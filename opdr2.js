auto = document.getElementById("auto");

function auto() {
    pictureHolder = document.createElement("div");
    pictureHolder.className = "picture-holder";
    auto.appendChild(pictureHolder);
}


function myFunction() {
    var soort = document.getElementById("mySelect").value;
    pictureHolders = document.getElementsByClassName("picture-holder");

    if (soort === "Mercedes") {
        img = document.createElement("img");
        img.src = "img/opdr2/Mercedes.png";
        pictureHolder.appendChild("img");

    } else if (soort === "Audi") {
        img = document.createElement("img");
        img.src = "img/opdr2/Mercedes.png";

    } else if (soort === "Ford") {
        background = document.body.style.backgroundColor = "Yellow";

    } else if (soort === "Opel") {
        background = document.body.style.backgroundColor = "green";

    } else if (soort === "Ferrari") {
        background = document.body.style.backgroundColor = "green";

    }
}