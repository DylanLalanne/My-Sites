// Initialize Particles on DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 300
        }
      },
      color: { value: "ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.5 },
      size: { value: 3 },
      line_linked: {
        enable: true,
        distance: 100,
        color: "#ffffff",
        opacity: .4,
        width: 1
      },
      move: {
        enable: true,
        speed: .55
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab"
        }
      },
      modes: {
        grab: {
          distance: 50,
          line_linked: {
            opacity: 1
          }
        }
      }
    },
    retina_detect: true
  });
});
