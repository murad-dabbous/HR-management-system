"use strict";
// let employees = [];
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

// Generate unique id
const createEmployeeId = () => {
  const empId = Math.floor(Math.random() * 9000 + 1000);
  return empId;
};
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

//
function addNewEmployee(event) {
  event.preventDefault();
  let empId = createEmployeeId();
  const fullname = event.target.fullname.value;
  const department = event.target.department.value;
  const level = event.target.level.value;
  const image = event.target.image.value;

  // console.log(event.target.fullname.value);
  // console.log(event.target.department.value);
  // console.log(event.target.level.value);
  // console.log(event.target.image.value);
  // add employee from the form data
  let newEmp = new Employee(empId, fullname, department, level, image);
  // console.log(department);
  newEmp.calculateSalary(level);
  // employees.push(newEmp);
  newEmp.render();
  // console.log(Employee.employees);
  saveToLocalStorage();
  // Employee.employees.push(newEmp);
  // save newEmp object in localStorage
  // convert it to json object
  // const convToJsonObj = JSON.stringify(newEmp);
  // const saveToLocalStorage = localStorage.setItem('New Employee', convToJsonObj);
  // const getEmployeeFromLocalStorage = localStorage.getItem('New Employee');
  // // convert it normal js object
  // const convertBackToJsObject = JSON.parse(getEmployeeFromLocalStorage);
  // console.log(newEmp);
  // console.log(saveToLocalStorage);
  // console.log(convertBackToJsObject);
}
// Get the data from the form
const myForm = document.getElementById("emp-form");
myForm.addEventListener("submit", addNewEmployee);
// Saving data inside the local storage
function saveToLocalStorage() {
  let data = JSON.stringify(Employee.employees);
  localStorage.setItem("employees", data);
}
// Get data from local storage
function getDataFromLocalStorage() {
  // get data from local storage
  let strObj = localStorage.getItem("employees");
  // parse it [to normal js object]
  let parseObj = JSON.parse(strObj);
  // check if the array is not empty
  if (parseObj !== null) {
    // Employee.employees = parseObj;
    for (let i = 0; i < parseObj.length; i++) {
      new Employee(
        createEmployeeId(),
        parseObj[i].fullname,
        parseObj[i].department,
        parseObj[i].level,
        parseObj[i].imageUrl
      );
    }
    Employee.employees[0].render();
  }
}
// Render prototype function
Employee.prototype.render = function () {
  let renderEmp = document.getElementById("rendering");
  renderEmp.innerHTML = "";

  // render from local storage
  for (let i = 0; i < Employee.employees.length; i++) {
    let addedEmployee = Employee.employees[i];
    let administrationDep = document.getElementById("administration");
    // console.log(administrationDep);
    let marketingDep = document.getElementById("marketing");
    let financeDep = document.getElementById("finance");
    let developmentDep = document.getElementById("development");
    if (this.department === "administration") {
      let divEle = document.createElement("div");
      divEle.setAttribute("class", "card");
      renderEmp.appendChild(divEle);
      let img = document.createElement("img");
      img.setAttribute("src", addedEmployee.imageUrl);
      divEle.appendChild(img);
      let h4Ele = document.createElement("h4");
      h4Ele.setAttribute("class", "card-title");
      h4Ele.textContent =
        "Name: " +
        addedEmployee.fullName +
        " - ID: " +
        createEmployeeId() +
        "\n";
      divEle.appendChild(h4Ele);
      let spEle = document.createElement("span");
      spEle.textContent =
        "Department: " +
        addedEmployee.department +
        " - Level: " +
        addedEmployee.level +
        " " +
        "\n";
      divEle.appendChild(spEle);
      let h5Ele = document.createElement("h5");
      h5Ele.textContent = addedEmployee.salary + "\n";
      divEle.appendChild(h5Ele);
      administrationDep.appendChild(divEle);
    } else if (addedEmployee.department === "finance") {
      let divEle = document.createElement("div");
      divEle.setAttribute("class", "card");
      renderEmp.appendChild(divEle);
      let img = document.createElement("img");
      img.setAttribute("src", addedEmployee.imageUrl);
      divEle.appendChild(img);
      let h4Ele = document.createElement("h4");
      h4Ele.setAttribute("class", "card-title");
      h4Ele.textContent =
        "Name: " +
        addedEmployee.fullName +
        " - ID: " +
        createEmployeeId() +
        "\n";
      divEle.appendChild(h4Ele);
      let spEle = document.createElement("span");
      spEle.textContent =
        "Department: " +
        addedEmployee.department +
        " - Level: " +
        addedEmployee.level +
        " " +
        "\n";
      divEle.appendChild(spEle);
      let h5Ele = document.createElement("h5");
      h5Ele.textContent = addedEmployee.salary + "\n";
      divEle.appendChild(h5Ele);
      financeDep.appendChild(divEle);
    } else if (addedEmployee.department === "marketing") {
      let divEle = document.createElement("div");
      divEle.setAttribute("class", "card");
      renderEmp.appendChild(divEle);
      let img = document.createElement("img");
      img.setAttribute("src", addedEmployee.imageUrl);
      divEle.appendChild(img);
      let h4Ele = document.createElement("h4");
      h4Ele.setAttribute("class", "card-title");
      h4Ele.textContent =
        "Name: " +
        addedEmployee.fullName +
        " - ID: " +
        createEmployeeId() +
        "\n";
      divEle.appendChild(h4Ele);
      let spEle = document.createElement("span");
      spEle.textContent =
        "Department: " +
        addedEmployee.department +
        " - Level: " +
        addedEmployee.level +
        " " +
        "\n";
      divEle.appendChild(spEle);
      let h5Ele = document.createElement("h5");
      h5Ele.textContent = addedEmployee.salary + "\n";
      divEle.appendChild(h5Ele);
      marketingDep.appendChild(divEle);
    } else if (addedEmployee.department === "development") {
      let divEle = document.createElement("div");
      divEle.setAttribute("class", "card");
      renderEmp.appendChild(divEle);
      let img = document.createElement("img");
      img.setAttribute("src", addedEmployee.imageUrl);
      divEle.appendChild(img);
      let h4Ele = document.createElement("h4");
      h4Ele.setAttribute("class", "card-title");
      h4Ele.textContent =
        "Name: " +
        addedEmployee.fullName +
        " - ID: " +
        createEmployeeId() +
        "\n";
      divEle.appendChild(h4Ele);
      let spEle = document.createElement("span");
      spEle.textContent =
        "Department: " +
        addedEmployee.department +
        " - Level: " +
        addedEmployee.level +
        " " +
        "\n";
      divEle.appendChild(spEle);
      let h5Ele = document.createElement("h5");
      h5Ele.textContent = addedEmployee.salary + "\n";
      divEle.appendChild(h5Ele);
      developmentDep.appendChild(divEle);
    }
  }
};
getDataFromLocalStorage();
