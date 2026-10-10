const url = "https://api.github.com/users/jeremiah-dev-c/repos";
const lijst = document.getElementById("github-lijst");
const status = document.getElementById("github-status");

status.textContent = "Bezig met laden...";

fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error("Server gaf status " + response.status);
        }
        return response.json();
    })
    .then(repos => {
        status.textContent = "";
        repos.forEach(repo => {
            const item = document.createElement("li");
            item.textContent = `${repo.name} (${repo.language})`;
            lijst.appendChild(item);
        });
    })
    .catch(error => {
        status.textContent = "De repositories konden niet worden geladen. Probeer het later opnieuw.";
        console.error(error);
    });