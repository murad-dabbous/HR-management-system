// constructor
function Employee(employeeId,fullName,department,level,imageUrl,salary) {
    // keys and values
    this.employeeId = employeeId;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageUrl = '';
    this.salary = '';
}
let emp1 = new Employee(1000, 'Ghazi Samer', 'Administration', 'Senior');
let emp2 = new Employee(1001, 'Lana Ali', 'Finance', 'Senior');
let emp3 = new Employee(1002, 'Tamara Ayoub', 'Marketing', 'Senior');
let emp4 = new Employee(1003, 'Safi Walid', 'Administration', 'Mid-Senior');
let emp5 = new Employee(1004, 'Omar Zaid', 'Development', 'Senior');
let emp6 = new Employee(1005, 'Rana Saleh', 'Development', 'Junior');
let emp7 = new Employee(1006, 'Hadi Ahmad', 'Finance', 'Mid-Senior');

Employee.prototype.calculateSalary = function(level) {
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
    return salary;
};
// Render prototype function
Employee.prototype.render = function() {
    let renderEmp = document.getElementById('rendering');
    renderEmp.textContent = emp1.fullName + ' ' + emp1.calculateSalary(emp1.level) + '\n';
    renderEmp.textContent += emp2.fullName + ' ' + emp2.calculateSalary(emp2.level) + '\n';
    renderEmp.textContent +=  emp3.fullName + ' ' + emp3.calculateSalary(emp3.level) + '\n';
    renderEmp.textContent += emp4.fullName + ' ' + emp4.calculateSalary(emp4.level) + '\n';
    renderEmp.textContent += emp5.fullName + ' ' + emp5.calculateSalary(emp5.level) + '\n';
    renderEmp.textContent += emp6.fullName + ' ' + emp6.calculateSalary(emp6.level) + '\n';
    renderEmp.textContent += emp7.fullName + ' ' + emp7.calculateSalary(emp7.level) + '\n';
    // return renderEmp;
};
console.log(emp1.render());
console.log(emp2);
console.log(emp3);
console.log(emp4);
console.log(emp5);
console.log(emp6);
console.log(emp7);