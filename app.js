'use strict';
// constructor
function Employee(employeeId,fullName,department,level,imageUrl,salary) {
    // keys and values
    this.employeeId = employeeId;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageUrl = imageUrl;
    this.salary = '';
}
let emp1 = new Employee(1000, 'Ghazi Samer', 'Administration', 'Senior','.assets/img/Ghazi.jpg');
let emp2 = new Employee(1001, 'Lana Ali', 'Finance', 'Senior','./assets/img/Lana.jpg');
let emp3 = new Employee(1002, 'Tamara Ayoub', 'Marketing', 'Senior','./assets/img/Tamara.jpg');
let emp4 = new Employee(1003, 'Safi Walid', 'Administration', 'Mid-Senior','./assets/img/Safi.jpg');
let emp5 = new Employee(1004, 'Omar Zaid', 'Development', 'Senior','./assets/img/Omar.jpg');
let emp6 = new Employee(1005, 'Rana Saleh', 'Development', 'Junior','./assets/img/Rana.jpg');
let emp7 = new Employee(1006, 'Hadi Ahmad', 'Finance', 'Mid-Senior','./assets/img/Hadi.jpg');

Employee.prototype.calculateSalary = function (level) {
    let salary = 0;
    let netSalary = 0;
    if (level === 'Senior') {
        // max and min salary included
        salary = Math.floor(Math.random() * (2000 - 1500 + 1) + 1500);
        netSalary = salary * 7.5;
    } else if (level === 'Mid-Senior') {
        salary = Math.floor(Math.random() * (1500 - 1000 + 1) + 1000);
        netSalary = salary * 7.5;
    } else {
        salary = Math.floor(Math.random() * (1000 - 500 + 1) + 500);
        netSalary = salary * 7.5;
    }
    // return salary;
};
const createEmployeeId = () => {
    const empId = Math.floor(Math.random() * 9000 + 1000);
    return empId;
};
//
function employeeDataForm(event) {
    event.preventDefault();
    // let empId = createEmployeeId();
    const fullname = event.target.fullname.value;
    const department = event.target.department.value;
    const level = event.target.level.value;
    const image = event.target.image.value;
    // let salary = calculateSalary(level);

    // console.log(event.target.fullname.value);
    // console.log(event.target.department.value);
    // console.log(event.target.level.value);
    // console.log(event.target.image.value);
    let newEmp = new Employee(createEmployeeId(),fullname, department, level, image);
    console.log(newEmp);
    // empCard.textContent(newEmp);
}
// Get the data from the form
const myForm = document.getElementById('emp-form');
myForm.addEventListener('submit', employeeDataForm);
// Render prototype function
Employee.prototype.render = function() {
    let renderEmp = document.getElementById('rendering');
    // const empCard = document.getElementById('card');
    // const p = document.createElement('p');
    // p.textContent = `${this.empId} ${this.fullname} ${this.department} ${this.level} ${this.image} ${this.salary}`;
    // p.appendChild(empCard);
    renderEmp.textContent = 'Name: ' + emp1.fullName + ' - ' + 'ID: ' + createEmployeeId() +
    ' Department: ' + emp1.department + ' - ' + 'Level: ' + emp1.level + '\n' + emp1.calculateSalary(emp1.level) + '\n';
    renderEmp.textContent += 'Name: ' + emp2.fullName + ' - ' + 'ID: ' + createEmployeeId() +
    ' Department: ' + emp2.department + ' - ' + 'Level: ' + emp2.level + '\n' + emp2.calculateSalary(emp2.level) + '\n';
    renderEmp.textContent += 'Name: ' + emp3.fullName + ' - ' + 'ID: ' + createEmployeeId() +
    ' Department: ' + emp3.department + ' - ' + 'Level: ' + emp3.level + '\n' + emp3.calculateSalary(emp3.level) + '\n';
    renderEmp.textContent += 'Name: ' + emp4.fullName + ' - ' + 'ID: ' + createEmployeeId() +
    ' Department: ' + emp4.department + ' - ' + 'Level: ' + emp4.level + '\n' + emp4.calculateSalary(emp4.level) + '\n';
    renderEmp.textContent += 'Name: ' + emp5.fullName + ' - ' + 'ID: ' + createEmployeeId() +
    ' Department: ' + emp5.department + ' - ' + 'Level: ' + emp5.level + '\n' + emp5.calculateSalary(emp5.level) + '\n';
    renderEmp.textContent += 'Name: ' + emp6.fullName + ' - ' + 'ID: ' + createEmployeeId() +
    ' Department: ' + emp6.department + ' - ' + 'Level: ' + emp6.level + '\n' + emp6.calculateSalary(emp6.level) + '\n';
    renderEmp.textContent += 'Name: ' + emp7.fullName + ' - ' + 'ID: ' + createEmployeeId() +
    ' Department: ' + emp7.department + ' - ' + 'Level: ' + emp7.level + '\n' + emp7.calculateSalary(emp7.level) + '\n';
    
    
};
console.log(emp1.render());
// // console.log(emp2.createEmployeeId());
// // console.log(emp3);
// // console.log(emp4);
// // console.log(emp5);
// // console.log(emp6);
// // console.log(emp7);