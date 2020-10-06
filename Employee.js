class Employee {
  constructor(name, title, salary, boss) {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.boss = boss;
  }
  bonus(multiplier) {
    this.employeeBonus = this.salary * multiplier;
  }
}

module.exports = { Employee };
