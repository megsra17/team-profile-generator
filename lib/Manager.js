const Employee = require("./Employee");

class Manager extends Employee {
  role = "Manager";
  constructor(name, id, email, office) {
    super(name, id, email);
    this.office = office;
  }

  getOfficeNumber() {
    return this.office;
  }

  getRole() {
    return this.role;
  }
}

export default Manager;
