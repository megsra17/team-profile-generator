import Engineer from "../lib/Engineer";

const generateHTML = (data) => {
  console.log(data);
  //loop through employees (map)
  //return card html for each employee
  //join html string into one string

  return `
        <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"
                integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
            <title>Team Profile Generator</title>
        </head>

        <body>
            <header class="py-4 px-3 p-lg-5 bg-danger">
                <h2 class="text-center text-white">My Team</h2>
            </header>
            <div class="container py-4 px-3 p-lg-5">
                <div class="row row-cols-lg-3 g-3">
                    <div class="col">
                        <div class="card">
                            <div class="card-header">
                                <h3>${manager.name}</h3>
                                <h3> <i class="bi bi-cup-hot-fill"></i> Manager </h3>
                            </div>
                            <div class="card-body">
                                <p id="id" class="card-text">ID: ${manager.id}</p>
                                <p class="card-text">Email: <a id="email" href="mailto:${manager.email}">${manager.email} </a></p>
                                <p id="office" class="card-text">Office number: ${manager.office}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <div class="card-header">
                                <h3>${engineer.name}</h3>
                                <h3> <i class="bi bi-sunglasses"></i> Engineer </h3>
                            </div>
                            <div class="card-body">
                                <p id="id" class="card-text">ID: ${engineer.id}</p>
                                <p class="card-text">Email: <a id=" email" href="mailto:${engineer.email}">${engineer.email}</a></p>
                                <p id="office" class="card-text">GitHub:<a href="https://github.com/${engineer.github}">${engineer.github}/a></p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <div class="card-header">
                                <h3>${intern.name}</h3>
                                <h3> <i class="bi bi-file-person"></i> Intern</h3>
                            </div>
                            <div class="card-body">
                                <p id="id" class="card-text">ID: ${intern.id}</p>
                                <p class="card-text">Email: <a id="email" href="mailto: ${intern.email}">${intern.email} </a></p>
                                <p id="office" class="card-text">School: ${intern.school}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>

        </html>
    `;
};

export default generateHTML;
