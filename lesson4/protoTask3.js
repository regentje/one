const СurrentEmployee = function () {
  this.retire = function () {
    console.log('заявление на увольнение')
  }
}
const FormerEmployee = function () {
  this.startVacation = function () {
    console.log('вернуться на старую работу')
  }
}
const Employees = function (position, startDate, baseSalary, salaryCurrency, location, department,endDate) {
  if(endDate == undefined ) {
    СurrentEmployee.call(this);
  }else{
    FormerEmployee.call(this);
  }
  this.position = position;
  this.startDate = startDate;
  this.endDate = endDate;
  this.baseSalary = baseSalary;
  this.salaryCurrency = salaryCurrency;
  this.location = location;
  this.department = department;
  this.writeReport = function () { console.log('writeReport') };
  this.organizeMeeting = function () { console.log('organizeMeeting') };
  
}

const Human = function (name, lastName, phoneNumber,position, startDate, baseSalary, salaryCurrency, location, department,endDate ) {
  Employees.call(this, position, startDate, baseSalary, salaryCurrency, location, department,endDate)
  this.name = name;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
  this.eat = function () { };
  this.sleep = function () {console.log('sleep') };
  this.callFriend = function () { };
}

const alex = new Human("name", "lastName", "phoneNumber", "position", "startDate", "baseSalary", "salaryCurrency", "location", "department","25.05.2020");

console.log(alex);
alex.writeReport();
alex.startVacation();
