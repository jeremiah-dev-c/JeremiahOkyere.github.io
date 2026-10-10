const projecten = [
    {
        titel: "Todo app",
        beschrijving: "Een eenvoudige app waarmee je taken kunt toevoegen en afvinken. Gebouwd met HTML, CSS en JavaScript.",
        categorie: "JavaScript",
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

const toonProjecten = (lijst) => {
    container.innerHTML = "";
    lijst.forEach(project => container.appendChild(maakCard(project)));
};

toonProjecten(projecten);

/* filters */
const filterProjecten = (categorie) => {
    if (categorie === "alle") {
        return projecten;
    }
    return projecten.filter(project => project.categorie === categorie);
};

const knoppen = document.querySelectorAll(".filters button");

knoppen.forEach(knop => {
    knop.addEventListener("click", () => {
        const gefilterd = filterProjecten(knop.dataset.categorie);
        toonProjecten(gefilterd);
    });
});