const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, is, email);
    this.github = github;
  }
}
export default Engineer;
