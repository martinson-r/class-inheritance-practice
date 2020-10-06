const { Employee } = require("./Employee");

class Manager extends Employee {
  constructor(name, title, salary, boss) {
    super(name, title, salary, boss);
    this.employeeArray = [...];
  }

  //for loop of Employee array
  //if statement which checks if employee array at index is an instance of Manager
  //inside if statement, we push each element of the employee array that is an instance
  //of Manager into a new array
  //run reduce on that array

  bonus(multiplier) {
    const sumSalaries = () => {
      if (!this.employeeArray.length) {
        let reducedSalary = (this.totalSalaries = employeeArray.reduce(
          (salaries, currentElement) => {
            if (this.name === currentElement.boss) {
              return (salaries += currentElement.salary);
            }
          }
        ));
        sumSalaries();
      } else {
        return reducedSalary;
      }
      this.managerBonus = reducedSalary * multiplier;
    };
  }
}

//upper level manager
//mid level
//low level employee
