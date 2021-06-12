/* 
Employees and Managers
1. Create constructor functions with properties representing the following:
○ Person: name, surname
○ Employee: inherits Person and has job and salary
○ Developer: inherits from Employee and has specialization
○ Manager: inherits from Employee and has department
2. All developers should inherit method:
○ getSpecialization which prints out the name of the specialization
3. All managers should inherit methods:
○ getDepartment which prints out the name of the department
○ changeDepartment which sets the department value on the given value
4. All employees should inherit methods:
○ getData which returns the name, surname and salary
○ getSalary which prints out the salary
○ increaseSalary which increases the salary by 10%

*/

// person constructor function, Person: name, surname

function Person(name, surname){
    this.name = name;
    this.surname = surname;
}

var ivana = new Person ('Ivana', 'Milenovic');
console.log(ivana);


// Employee inherits Person ... and has job and salary

function Employee (name, surname, job, salary){
    Person.call(this, name, surname);
    this.job = job;
    this.salary = salary;
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.contructor = Employee;


Employee.prototype.getData = function(){
    var data = (this.name + ", " + this.surname + "," + this.salary);
    return data;
}

Employee.prototype.getSalary = function(){
    console.log(this.salary);
}

Employee.prototype.increaseSalary = function(){
    this.salary = this.salary * 1.1;
}


var marija = new Employee ('Marija', 'Nikolic', 'logoped', 1000);

marija.increaseSalary();

console.log(marija);





// Developer inherits from Employee and has specialization

function Developer (name, surname, job, salary, specialization){
    Employee.call(this, name, surname, job, salary);
    this.specialization = specialization;
}
Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.contructor = Developer;


Developer.prototype.getSpecialization = function(){
    console.log(this.specialization());
}

var mara = new Developer ('Mara', 'Nikolic', 'logoped', 1000, 'developer');
console.log(mara);




// Manager: inherits from Employee and has department

function Manager (name, surname, job, salary, department){
    Employee.call(this, name, surname, job, salary);
    this.department = department;
}
Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.contructor = Manager;


Manager.prototype.getDepartment = function(){
    console.log(this.department);
}

Manager.prototype.changeDepartment = function(newDepartment){
    this.department = newDepartment;
    return newDepartment; 
}

