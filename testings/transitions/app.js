const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const table = document.querySelector(".content-table")
const employee_div= document.querySelector(".new_employee_div")
const employee_btn=document.querySelector(".new_employee")

employee_btn.addEventListener("click",()=>{
	container.style.left="0";
	employee_div.style.display="none"
})
sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
  table.style.opacity="1"
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
