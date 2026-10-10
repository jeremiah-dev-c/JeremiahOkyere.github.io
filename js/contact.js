const formulier = document.getElementById("contact-form");
const status = document.getElementById("formulier-status");

const naamVeld = document.getElementById("naam");
const emailVeld = document.getElementById("email");
const berichtVeld = document.getElementById("bericht");

const toonFout = (veld, tekst) => {
    document.getElementById(veld.id + "-fout").textContent = tekst;
    veld.setAttribute("aria-invalid", "true");
};

const wisFout = (veld) => {
    document.getElementById(veld.id + "-fout").textContent = "";
    veld.removeAttribute("aria-invalid");
};

const valideerNaam = () => {
    if (naamVeld.value.trim() === "") {
        toonFout(naamVeld, "Vul je naam in.");
        return false;
    }
    wisFout(naamVeld);
    return true;
};

const valideerEmail = () => {
    const geldig = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVeld.value.trim());
    if (!geldig) {
        toonFout(emailVeld, "Vul een geldig e-mailadres in, bijvoorbeeld naam@voorbeeld.nl.");
        return false;
    }
    wisFout(emailVeld);
    return true;
};

const valideerBericht = () => {
    if (berichtVeld.value.trim().length < 10) {
        toonFout(berichtVeld, "Je bericht moet minimaal 10 tekens bevatten.");
        return false;
    }
    wisFout(berichtVeld);
    return true;
};

formulier.addEventListener("submit", (event) => {
    event.preventDefault();
    status.textContent = "";

    const resultaten = [valideerNaam(), valideerEmail(), valideerBericht()];

    if (resultaten.every(resultaat => resultaat)) {
        status.textContent = "Bedankt, je formulier is correct ingevuld.";
        formulier.reset();
    }
});