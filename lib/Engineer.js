import Employee from "./Employee.js";

class Engineer extends Employee {
  role = "Engineer";
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
}
export default Engineer;
