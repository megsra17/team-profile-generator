const generateHTML = (data) => {
  console.log(data);
  const cardsHtml = data
    .map((employee) => {
      let footerHtml;
      console.log(employee);
      if (employee.role === "Manager") {
        footerHtml = `
              <p class="card-text">
                Office number: ${employee.office}
              </p>
            `;
      } else if (employee.role === "Intern") {
        footerHtml = `
          <p class="card-text">
                School: ${employee.school}
              </p>
          `;
      } else {
        footerHtml = `
           <p class="card-text">
                GitHub: <a href="https://github.com/${employee.github}">${employee.github}</a>
              </p>
          `;
      }
      return `
       <div class="col">
            <div class="card">
                <div class="card-header">
                    <h3>${employee.name}</h3>
                    <h3> <i class="bi bi-cup-hot-fill"></i> ${employee.role} </h3>
                </div>
                <div class="card-body">
                    <p id="id" class="card-text">ID: ${employee.id}</p>
                    <p class="card-text">Email: <a id="email" href="mailto:${employee.email}">${employee.email} </a></p>
                    ${footerHtml}
                </div>
            </div>
        </div>
      `;
    })
    .join("");

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
                   ${cardsHtml}
                </div>
            </div>
        </body>

        </html>
    `;
};

export default generateHTML;
