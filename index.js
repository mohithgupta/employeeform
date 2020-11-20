// New Employee Button
$(".new-employee").click(function(){
	$(".main-container").addClass("slide");
	$(".new-employee-div").addClass("remove-div");
});

// CLear Details Button
$("#clear-details-button").click(function(event) {
	event.preventDefault();
	$("#form").trigger("reset");
});

// Add New Employee Button
$(".add-new-employee").click(function(){
	$("#tableId").removeClass("show-table");
	$(".main-container").removeClass("sign-up-mode");
  	$(".add-new-employee").addClass("hidden");
  	$("#form").trigger("reset");
  	setTimeout(function(){ $(".form-div").removeClass("after-submit");},1000); 
	setTimeout(function(){ $("#form").removeClass("form-submitted");},2000);
});

// Submit Button
$("#submit-button").click(function(event) {
	checkEmptyinputFields(event);
	const form = document.querySelector("form");
	const data = Object.fromEntries(new FormData(form).entries());
	data_array = Object.entries(data);
	let number_of_employee=$("tr").length;
	let number_of_submits;
	let values_array=[];
	localStorage.setItem(number_of_submits,number_of_employee)
	data_array.forEach((arr)=>{
		localStorage.setItem(arr[0],arr[1]);
		values_array.push(arr[1]);
	});
	$("#tbodyId").append("<tr><td></td></tr>")
	$("#tbodyId tr:last-of-type td:first-of-type").append("<i onClick=deleteRow(event) class='fa fa-close'></i>");
	let i=0;
	for(i=0;i<5;i++){
	$("#tbodyId tr:last-child").append("<td>"+values_array[i]+"</td>");
	}
});
function formSubmitted(){
  $(".main-container").addClass("sign-up-mode");
  $("#form").addClass("form-submitted");
  $(".form-div").addClass("after-submit");
  $(".form-heading").addClass("hidden");
  setTimeout(function(){$("#tableId").addClass("show-table");},1700);
};
function checkEmptyinputFields(event){
    $("input").each(function(){
        if($(this).val() == "" ) 
			{
        		throw "Error " +this.name +" is required!!";
        		return false;
        	}
    })
    event.preventDefault();
    formSubmitted();
    setTimeout(()=>{$(".add-new-employee").removeClass("hidden")},1600);
}
function deleteRow(event){
	let parent_row=event.target.parentElement.parentElement;
	parent_row.style.display="none"
};
