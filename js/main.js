fetch("https://api.github.com/users/char502/repos")
  .then(response => response.json())
  .then(data => {
    console.log(data);

    const repos = data.map(repo => {
      return {
        name: repo.name,
        url: repo["html_url"],
        stars: repo["stargazers_count"]
      };
    });

    const ol = document.createElement("ol");

    ol.innerHTML = data
      .map(repo => {
        return `<li>
    <a href="${repo.url}">${repo.name} (${repo.stars} stars)</a>
    </li>`;
      })
      .join("");

    document.body.appendChild(ol);
  });

// const request = new XMLHttpRequest();
// request.addEventListener("load", e => {
//   const repos = JSON.parse(e.target.response);
//   console.log(repos);
// });
// request.open("get", "https://api.github.com/users/char502/repos");
// request.send();

// const data = repos.map(repo => {
//   return {
//     name: repo.name,
//     url: repo["html_url"],
//     stars: repo["stargazers_count"]
//   };
// });

// const ol = document.createElement("ol");

// ol.innerHTML = data
//   .map(repo => {
//     return `<li>
//   <a href="${repo.url}">${repo.name} (${repo.stars} stars)</a>
//   </li>`;
//   })
//   .join("");

// document.body.appendChild(ol);

// const rep1 = document.getElementsByClassName('r1').innerHTML;
