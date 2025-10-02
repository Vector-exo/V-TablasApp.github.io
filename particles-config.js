// COMO LLEGASTE AQUI? JAJAJAJAJAJA

tsParticles.load("particles-js", {
  particles: {
    number: {
      value: 80, // cantidad de partículas
      density: { enable: true, value_area: 800 }
    },
    color: { value: "#9c2afffb" }, // color de partículas
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3, random: true },
    move: { enable: true, speed: 1, direction: "none", out_mode: "bounce" },
    line_linked: {
      enable: true,
      distance: 120,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" }
    },
    modes: {
      repulse: { distance: 50 },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});

// parece que te gusta leer codigo ageno eh? jaja