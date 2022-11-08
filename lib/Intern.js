import Employee from "./Employee.js";

class Intern extends Employee {
  role = "Intern";
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return this.role;
  }
}

export default Intern;
