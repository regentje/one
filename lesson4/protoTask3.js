const Human = function (newHuman) {
  this.name = newHuman.name;
  this.lastName = newHuman.lastName;
  this.phoneNumber = newHuman.phoneNumber;
  this.eat = function () { };
  this.sleep = function () { console.log('sleep') };
  this.callFriend = function () { };
}

const Employees = function (employee) {
  Human.call(this, employee)
  this.position = employee.position;
  this.startDate = employee.startDate;
  this.baseSalary = employee.baseSalary;
  this.salaryCurrency = employee.salaryCurrency;
  this.location = employee.location;
  this.department = employee.department;
  this.writeReport = function () { console.log('writeReport') };
  this.organizeMeeting = function () { console.log('organizeMeeting') };
}
const СurrentEmployee = function (humanObj) {
  Employees.call(this, humanObj)
  this.retire = function () {
    console.log('заявление на увольнение')
  }
}
const FormerEmployee = function (former) {
  Employees.call(this, former)
  this.endDate = former.endDate;
  this.startVacation = function () {
    console.log('вернуться на старую работу')
  }
}

Employees.prototype = Object.create(Human.prototype);
СurrentEmployee.prototype = Object.create(Employees.prototype);
FormerEmployee.prototype = Object.create(Employees.prototype);

const john = {
  name: "John",
  lastName: "Smith",
  position: "Senior engineer",
  startDate: "10.10.1990",
  baseSalary: "10000",
  salaryCurrency: "$",
  location: "Russia",
  department: "IT",
  phoneNumber: "+1234567890",
};
const alex = {
  name: "Alex",
  lastName: "Ivanov",
  position: "engineer",
  startDate: "10.10.1990",
  endDate: "10.10.2000",
  baseSalary: "10000",
  salaryCurrency: "$",
  location: "Russia",
  department: "IT",
  phoneNumber: "+1234567890",
};

const newJohn = new СurrentEmployee(john);
console.log(newJohn)
newJohn.retire();
const newAlex = new FormerEmployee(alex);
console.log(newAlex)
newAlex.startVacation();
