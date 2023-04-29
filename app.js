"use strict";
// constructor
function Employee(
  employeeId,
  fullName,
  department,
  level,
  imageUrl,
  salary = 0
) {
  // keys and values
  this.employeeId = employeeId;
  this.fullName = fullName;
  this.department = department;
  this.level = level;
  this.imageUrl = imageUrl;
  this.salary = salary;
  // line below ??
  // EVERY OBJECT CREATED WILL BE PUSHED TO THE NEW ARRAY
  Employee.employees.push(this);
}
// array as property
Employee.employees = [];

// Calculate the salary
Employee.prototype.calculateSalary = function (level) {
  let netSalary = 0;
  if (level === "senior") {
    // max and min salary included
    this.salary = Math.floor(Math.random() * (2000 - 1500 + 1) + 1500);
    netSalary = this.salary * 7.5;
  } else if (level === "mid-senior") {
    this.salary = Math.floor(Math.random() * (1500 - 1000 + 1) + 1000);
    netSalary = this.salary * 7.5;
  } else {
    this.salary = Math.floor(Math.random() * (1000 - 500 + 1) + 500);
    netSalary = this.salary * 7.5;
  }
};
//---------------------
// Add data manually
//-------------------- Add data manually
let emp1 = new Employee(1000, "Ghazi Samer", "Administration", "Senior");
emp1.calculateSalary("senior");
console.log(emp1);
let emp2 = new Employee(1001, "Lana Ali", "Finance", "senior");
emp2.calculateSalary("senior");
console.log(emp2);
let emp3 = new Employee(1002, "Tamara Ayoub", "Marketing", "senior");
emp3.calculateSalary("senior");
console.log(emp3);
let emp4 = new Employee(1003, "Safi Walid", "Administration", "mid-senior");
emp4.calculateSalary("mid-senior");
console.log(emp4);
let emp5 = new Employee(1004, "Omar Zaid", "Development", "senior");
emp5.calculateSalary("senior");
console.log(emp5);
let emp6 = new Employee(1005, "Rana Saleh", "Development", "junior");
emp6.calculateSalary("junior");
console.log(emp6);
let emp7 = new Employee(1006, "Hadi Ahmad", "Finance", "mid-senior");
emp7.calculateSalary("mid-senior");
console.log(emp7);
// console.log(Employee.employees);
// Render prototype function
Employee.prototype.render = function () {
  let renderEmp = document.getElementById("rendering");
  let divEle = document.createElement("div");
  let h4Ele = document.createElement("h4");
  h4Ele.textContent = "Name: " + this.fullName;
  divEle.appendChild(h4Ele);
  let spEle = document.createElement("span");
  spEle.textContent = "Salary: " + this.salary;
  divEle.appendChild(spEle);
  renderEmp.appendChild(divEle);
};
for (let i = 0; i < Employee.employees.length; i++) {
  //   render(Employee.employees[i]);
  Employee.employees[i].render();
}
