import inquirer from "inquirer";
import Manager from "./lib/Manager.js";
import Engineer from "./lib/Engineer.js";
import Intern from "./lib/Intern.js";
import generateHTML from "./src/generateHTML.js";
import fs from "fs";

const employeeAswers = [];

const emloyees = [];

const managerPrompt = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the Managers name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the Managers ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the Managers email?",
      },
      {
        type: "input",
        name: "office",
        message: "What is the Managers office #?",
      },
    ])
    .then((answers) => {
      employeeAswers.push(answers);
      nextEmployeePrompt();
    })
    .catch((error) => console.log(error));
};

const engineerPrompt = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the Engineers name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the Engineers ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the Engineers email?",
      },
      {
        type: "input",
        name: "github",
        message: "What is the Engineers github?",
      },
    ])
    .then((answers) => {
      employeeAswers.push(answers);
      nextEmployeePrompt();
    })
    .catch((error) => console.log(error));
};

const internPrompt = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the Interns name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the Interns ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the Interns email?",
      },
      {
        type: "input",
        name: "school",
        message: "What is the Interns school?",
      },
    ])
    .then((answers) => {
      employeeAswers.push(answers);
      nextEmployeePrompt();
    })
    .catch((error) => console.log(error));
};

const nextEmployeePrompt = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "nextEmployee",
        message: "Is there another Employee?",
        choices: ["Engineer", "Intern", "Finished"],
      },
    ])
    .then((answers) => {
      if (answers.nextEmployee === "Engineer") {
        engineerPrompt();
      } else if (answers.nextEmployee === "Intern") {
        internPrompt();
      } else {
        employeeAswers.forEach((employee) => {
          if (employee.office) {
            const manager = new Manager(
              employee.name,
              employee.id,
              employee.email,
              employee.office
            );
            emloyees.push(manager);
            employee;
          } else if (employee.github) {
            const engineer = new Engineer(
              employee.name,
              employee.id,
              employee.email,
              employee.github
            );
            emloyees.push(engineer);
          } else {
            const intern = new Intern(
              employee.name,
              employee.id,
              employee.email,
              employee.school
            );
            emloyees.push(intern);
          }
        });
      }
      fs.writeFile("./dist/index.html", generateHTML(emloyees), (error) => {
        if (error) {
          console.log(error);
          return;
        } else {
          console.log("File Saved");
        }
      });
    })
    .catch((error) => console.log(error));
};

managerPrompt();
