// New Employee Button
$(".new-employee").click(function() {
    $(".main-container").addClass("slide");
    $(".new-employee-div").addClass("remove-div");
});

// CLear Details Button
$("#clear-details-button").click(function(event) {
    event.preventDefault();
    $("#form").trigger("reset");
});

// Submit Button
$("#submit-button").click(function(event) {
    checkEmptyinputFields(event);
    const form = document.querySelector("form");
    const data = Object.fromEntries(new FormData(form).entries());
    data_array = Object.entries(data);
    let values_array = [];
    data_array.forEach((arr) => {
        values_array.push(arr[1]);
    });
    $("#tbodyId").append("<tr><td></td></tr>")
    $("#tbodyId tr:last-of-type td:first-of-type").append("<i onClick=deleteRow(event) class='fa fa-close'></i>");
    let i = 0;
    for (i = 0; i < 5; i++) {
        $("#tbodyId tr:last-child").append("<td>" + values_array[i] + "</td>");
    }
});

function formSubmitted() {
    $(".main-container").addClass("form-done");
    $("#form").addClass("form-submitted");
    $(".form-div").addClass("after-submit");
    $(".form-heading").addClass("hidden");
    $(".company-name").addClass("hidden");
    setTimeout(function() { $("#tableId").addClass("show-table"); }, 1700);
};

function checkEmptyinputFields(event) {
    $("input").each(function() {
        if ($(this).val() == "") {
            throw "Error : " + this.name + " is required!!";
            return false;
        }
    })
    event.preventDefault();
    formSubmitted();
    setTimeout(() => { $(".add-new-employee").removeClass("hidden") }, 1600);
}

// Add New Employee Button
$(".add-new-employee").click(function() {
    $("#tableId").removeClass("show-table");
    $(".main-container").removeClass("form-done");
    $(".add-new-employee").addClass("hidden");
    $("#form").trigger("reset");
    setTimeout(function() { $(".form-div").removeClass("after-submit"); }, 1000);
    setTimeout(function() {
        $("#form").removeClass("form-submitted");
        $(".company-name").removeClass("hidden");
    }, 2000);

});

function deleteRow(event) {
	 $(".popup").animate({left:"0",top:"30%"}, 1000);
	  $(".overlay").animate({left:"0"},500);
	 let parent_row = event.target.parentElement.parentElement;
  	 $(".btn-yes").click(function(){
  		parent_row.style.display = "none";
  		$(".overlay").animate({left:"100%"},500);
	 	$(".popup").animate({left: "200%",top:"0"}, 1500);    
	 });
  	 $(".btn-cancel").click(function(){
  	 	$(".overlay").animate({left:"100%"},500);
	 	$(".popup").animate({left: "200%",top:"0"}, 1500);
  	 })
}
