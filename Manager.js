const { Employee } = require("./Employee");

class Manager extends Employee {
    constructor(name, title, salary, boss) {
        super(name, title, salary, boss);
        this.employeeArray = [];
    }

    addEmployee(employee) {
        this.employeeArray.push(employee);
    }

    bonus(multiplier) {
        if (this.employeeArray.length) {
            const totalSalaries = this.totalSubSalaries();
            this.managerBonus = totalSalaries * multiplier;
            return this.managerBonus;
        }
    };
    totalSubSalaries() {
        return this.employeeArray.reduce(
            (salaries, currentEmployee) => {
                if (currentEmployee instanceof Manager) {
                    return salaries + currentEmployee.salary + currentEmployee.totalSubSalaries();
                }
                return salaries + currentEmployee.salary;
            }, 0);
    }

}

const Jodi = new Manager('Jodi', 'Human', 5000, null);
const Lucky = new Employee('Lucky', 'Cat', 1000, Jodi);
const Mike = new Manager('Mike', 'Janitor', 3000, Jodi);
const Teddy = new Employee('Teddy', 'stuffed animal', 500, Mike);

Jodi.addEmployee(Lucky);
Jodi.addEmployee(Mike);
Mike.addEmployee(Teddy);

const JodiSalary = Jodi.bonus(.1);
console.log(JodiSalary);

