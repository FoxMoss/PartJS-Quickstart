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

    tsParticles.setOnClickHandler((event, particles) => {
        /* custom on click handler */
    });
    particles.play();
}

loadPart("./amoungus.json")

