const {Employee} = require('./Employee');

class Manager extends Employee {
    constructor(name, title, salary, boss) {
    super(name, title, salary, boss);
    this.employeeArray = [];
    }


    //for loop of Employee array
    //if statement which checks if employee array at index is an instance of Manager
    //inside if statement, we push each element of the employee array that is an instance
    //of Manager into a new array
    //run reduce on that array

    bonus(multiplier) {

        if () {
        this.totalSalaries = employeeArray.reduce ((salaries, currentElement) => {
            return salaries+= currentElement.salary;
        });
    }
        this.managerBonus = totalSalaries * multiplier;
    }
}
