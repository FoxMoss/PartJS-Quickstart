const particles = tsParticles.domItem(0);
function loadPart(file) {
    tsParticles
        .loadJSON("tsparticles", file)
        .then((container) => {
            console.log("tsparticles config loaded from '" + file + "'");
        })
        .catch((error) => {
            console.error(error);
        });

    document.querySelector("#tsparticles > canvas").style.zIndex = -1;
    particles.play();
}

loadPart("./amoungus.json")

