const projecten = [
    {
        titel: "Todo app",
        beschrijving: "Een eenvoudige app waarmee je taken kunt toevoegen en afvinken. Gebouwd met HTML, CSS en JavaScript.",
        categorie: "Javascript",
        link: "https://github.com/jeremiah-dev-c/Todo-app"
    },
    {
        titel: "Folea-webshop",
        beschrijving: "Een webshop, gebouwd met Typescript",
        categorie: "TypeScript",
        link: "https://github.com/jeremiah-dev-c/Folea"
    },
    {
        titel: "Portfolio",
        beschrijving: "Portfolio website gemaakt met HTML,CSS en JavaScript",
        categorie: "HTML/CSS",
        link: "https://github.com/jeremiah-dev-c/JeremiahOkyere.github.io"
    }
];


const maakCard = (project) =>  {

    const card = document.createElement("article");
    card.classList.add("card");

    const titel = document.createElement("h2");
    const link = document.createElement("a");
    link.href = project.link;
    link.textContent = project.titel;
    link.target = "_blank";
    link.rel = "noopener";
    titel.appendChild(link);

    const beschrijving = document.createElement("p");
    beschrijving.textContent = project.beschrijving;


    card.appendChild(titel);
    card.appendChild(beschrijving);
    return card;
}

const container = document.getElementById("projecten-lijst");
projecten.forEach(project => container.appendChild(maakCard(project)));