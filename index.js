import inquirer from "inquirer";

function init() {
  return inquirer
    .prompt(questions)
    .then((answers) => {
      writeToFile("README.md", generateMarkdown(answers));
    })
    .catch((error) => console.log(error));
}

init();
