const human = {
  name: "John",
  lastName: "Smith",
  phoneNumber: "+1234567890"
}
const employees = {
  position: "Senior engineer",
  startDate: "10.10.1990",
  endDate: "10.10.2000",
  baseSalary: "10000",
  salaryCurrency: "$",
  location: "Russia",
  department: "IT",
}
Object.setPrototypeOf(human, employees);

const ability = {
  eat: function () { },
  sleep: function () { },
  callFriend: function () { },
  writeReport: function () { },
  organizeMeeting: function () { },
  retire: function () { },
  startVacation: function () { },
  currentEmployee: function () {
    if (this.endDate === undefined) {
      console.log('Нынешний сотрудник');
    } else {
      console.log('бывший сотрудник')
    }
  }
};

Object.setPrototypeOf(employees, ability);
human.currentEmployee();
