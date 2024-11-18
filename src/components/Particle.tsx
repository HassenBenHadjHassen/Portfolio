import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Engine, ISourceOptions } from "@tsparticles/engine";

const App = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = {
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
      },
      modes: {
        push: {
          particles_nb: 1,
        },

        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },

      move: {
        direction: "right",
        speed: 0.05,
      },
      number: {
        density: {
          enable: true,
          width: 1920,
          height: 1080,
        },
        value: 160,
      },
      opacity: {
        animation: {
          enable: true,
          speed: 1,
          startValue: "random",
        },
      },

      size: {
        value: 1,
      },
    },
    detectRetina: true,
  };

  return (
    <>
      {init && (
        <Particles id="tsparticles" style={{ zIndex: -1 }} options={options} />
      )}
    </>
  );
};

export default App;
