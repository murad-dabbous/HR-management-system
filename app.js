'use strict';
let employees = [];
// constructor
function Employee(employeeId,fullName,department,level,imageUrl,salary = 0) {
    // keys and values
    this.employeeId = employeeId;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageUrl = imageUrl;
    this.salary = salary;
    employees.push(this);
}
// Generate unique id 
const createEmployeeId = () => {
    const empId = Math.floor(Math.random() * 9000 + 1000);
    return empId;
};
// Calculate the salary
Employee.prototype.calculateSalary = function (level) {
    let netSalary = 0;
    if (level === 'senior') {
        // max and min salary included
        this.salary = Math.floor(Math.random() * (2000 - 1500 + 1) + 1500);
        netSalary = this.salary * 7.5;
    } else if (level === 'mid-senior') {
        this.salary = Math.floor(Math.random() * (1500 - 1000 + 1) + 1000);
        netSalary = this.salary * 7.5;
    } else {
        this.salary = Math.floor(Math.random() * (1000 - 500 + 1) + 500);
        netSalary = this.salary * 7.5;
    }
};

// -------------------- Add data manually
// let emp1 = new Employee(createEmployeeId(), 'Ghazi Samer', 'Administration', 'Senior', 'assets/img/Ghazi.jpg');
// emp1.calculateSalary('senior');
// console.log(emp1);
// let emp2 = new Employee(createEmployeeId(), 'Lana Ali', 'Finance', 'senior', './assets/img/Lana.jpg');
// emp2.calculateSalary('senior');
// console.log(emp2);
// let emp3 = new Employee(createEmployeeId(), 'Tamara Ayoub', 'Marketing', 'senior', './assets/img/Tamara.jpg');
// emp3.calculateSalary('senior');
// console.log(emp3);
// let emp4 = new Employee(createEmployeeId(), 'Safi Walid', 'Administration', 'mid-senior', './assets/img/Safi.jpg');
// emp4.calculateSalary('mid-senior');
// console.log(emp4);
// let emp5 = new Employee(createEmployeeId(), 'Omar Zaid', 'Development', 'senior', './assets/img/Omar.jpg');
// emp5.calculateSalary('senior');
// console.log(emp5);
// let emp6 = new Employee(createEmployeeId(), 'Rana Saleh', 'Development', 'junior', './assets/img/Rana.jpg');
// emp6.calculateSalary('junior');
// console.log(emp6);
// let emp7 = new Employee(createEmployeeId(), 'Hadi Ahmad', 'Finance', 'mid-senior', './assets/img/Hadi.jpg');
// emp7.calculateSalary('mid-senior');
// console.log(emp7);
// // // Add them to the array
// employees.push(emp1, emp2, emp3, emp4, emp5, emp6, emp7);
// for (let i = 0; employees.length; i++){
//     employees[i].render();
// }

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
    console.log(department);
    newEmp.calculateSalary(level);
    // employees.push(newEmp);
    newEmp.render();
    console.log(newEmp);
    
}
// Get the data from the form
const myForm = document.getElementById('emp-form');
myForm.addEventListener('submit', addNewEmployee);
// Render prototype function
Employee.prototype.render = function() {
    let renderEmp = document.getElementById('rendering');
    let administrationDep = document.getElementById('administration');
    // console.log(administrationDep);
    let marketingDep = document.getElementById('marketing');
    let financeDep = document.getElementById('finance');
    let developmentDep = document.getElementById('development');
    if (this.department === 'administration') {
    let divEle = document.createElement('div');
    divEle.setAttribute('class', 'card');
    renderEmp.appendChild(divEle);
    let img = document.createElement('img');
    img.setAttribute('src', this.imageUrl);
    divEle.appendChild(img);
    let h4Ele = document.createElement('h4');
    h4Ele.setAttribute('class', 'card-title');
    h4Ele.textContent = 'Name: ' + this.fullName + ' - ID: ' + createEmployeeId() + '\n' ;
    divEle.appendChild(h4Ele);
    let spEle = document.createElement('span');
    spEle.textContent = 'Department: ' + this.department + ' - Level: ' + this.level + ' ' + '\n';
    divEle.appendChild(spEle);
    let h5Ele = document.createElement('h5');
    h5Ele.textContent = this.salary + '\n';
        divEle.appendChild(h5Ele);
        administrationDep.appendChild(divEle);
    } else if (this.department === 'finance') {
           let divEle = document.createElement('div');
            divEle.setAttribute('class', 'card');
            renderEmp.appendChild(divEle);
            let img = document.createElement('img');
            img.setAttribute('src', this.imageUrl);
            divEle.appendChild(img);
            let h4Ele = document.createElement('h4');
            h4Ele.setAttribute('class', 'card-title');
            h4Ele.textContent = 'Name: ' + this.fullName + ' - ID: ' + createEmployeeId() + '\n' ;
            divEle.appendChild(h4Ele);
            let spEle = document.createElement('span');
            spEle.textContent = 'Department: ' + this.department + ' - Level: ' + this.level + ' ' + '\n';
            divEle.appendChild(spEle);
            let h5Ele = document.createElement('h5');
            h5Ele.textContent = this.salary + '\n';
        divEle.appendChild(h5Ele);
        financeDep.appendChild(divEle);
    } else if (this.department === 'marketing') {
         let divEle = document.createElement('div');
            divEle.setAttribute('class', 'card');
            renderEmp.appendChild(divEle);
            let img = document.createElement('img');
            img.setAttribute('src', this.imageUrl);
            divEle.appendChild(img);
            let h4Ele = document.createElement('h4');
            h4Ele.setAttribute('class', 'card-title');
            h4Ele.textContent = 'Name: ' + this.fullName + ' - ID: ' + createEmployeeId() + '\n' ;
            divEle.appendChild(h4Ele);
            let spEle = document.createElement('span');
            spEle.textContent = 'Department: ' + this.department + ' - Level: ' + this.level + ' ' + '\n';
            divEle.appendChild(spEle);
            let h5Ele = document.createElement('h5');
            h5Ele.textContent = this.salary + '\n';
            divEle.appendChild(h5Ele);
            marketingDep.appendChild(divEle);
    } else if(this.department === 'development'){
          let divEle = document.createElement('div');
                divEle.setAttribute('class', 'card');
                renderEmp.appendChild(divEle);
                let img = document.createElement('img');
                img.setAttribute('src', this.imageUrl);
                divEle.appendChild(img);
                let h4Ele = document.createElement('h4');
                h4Ele.setAttribute('class', 'card-title');
                h4Ele.textContent = 'Name: ' + this.fullName + ' - ID: ' + createEmployeeId() + '\n' ;
                divEle.appendChild(h4Ele);
                let spEle = document.createElement('span');
                spEle.textContent = 'Department: ' + this.department + ' - Level: ' + this.level + ' ' + '\n';
                divEle.appendChild(spEle);
                let h5Ele = document.createElement('h5');
                h5Ele.textContent = this.salary + '\n';
                divEle.appendChild(h5Ele);
                developmentDep.appendChild(divEle);
    }
};

