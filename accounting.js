// get stored employeed from local storage
let employees = [];
function getEmplyeesFromLocalStorage() { 
    // get data from local storage
    let strObj = localStorage.getItem('employees');
    // parse it [to normal js object]
    let parseObj = JSON.parse(strObj);
    // check if the array is not empty
    if (parseObj !== null) {
        // Employee.employees = parseObj;
        for (let i = 0; i < parseObj.length; i++){
             new Employee(createEmployeeId(), parseObj[i].fullname, parseObj[i].department, parseObj[i].level,
                 parseObj[i].imageUrl);
            
                // Employee.employees.push(parsedEmployee);
            }
            Employee.employees[0].render();
        }
}
// render emplyees in a table according to their departments
function renderEmployees() {
    let table = document.createElement('table');
    let tableRow = document.createElement('tr');
    let tableD = document.createElement('td');
    for (let i = 0; i < employees.length; i++) { 
        tableD = document.createElement('td');
        tableD.textContent = employees[i].imageUrl;
        tableD.textContent = employees[i].fullname;
        tableD.textContent += employees[i].department;
        tableD.textContent += employees[i].level;
        tableD.textContent += employees[i].salary;
        tableRow.appendChild(tableD);
        table.appendChild(tableRow);
    }
    
}
function calculateAverageSalary() {
    let totalSalarySum = 0;
    let administrationSum = 0;
    let marketingSum = 0;
    let developmentSum = 0;
    let financeSum = 0;
    for (let i = 0; i < employees.length; i++) {
        if (this.department === 'administration') {
            administrationSum += this.salary;
        } else if (this.department === 'marketing') {
            marketingSum += this.salary;
        } else if (this.department === 'development') {
            developmentSum += this.salary;
        } else {
            financeSum += this.salary;
        }
    }
    totalSalarySum = administrationSum + marketingSum + developmentSum + financeSum;
    let average = totalSalarySum / employees.length;
    console.log(totalSalarySum)
    console.log(average);
}
function numOfEmployeesInEachDepartment() {
    
}
renderEmployees();
getEmplyeesFromLocalStorage();
calculateAverageSalary();