import { easeInOut, type Variants, motion } from "framer-motion";
import Loader from "./components/loader";

const App = () => {
  const containerUp: Variants = {
    hidden: {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    },
    show: {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      transition: {
        delay: 4.4,
        duration: 0.6,
        ease: easeInOut,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  return (
    <main>
      <Loader />
      <motion.div
        variants={containerUp}
        initial="hidden"
        animate="show"
        className="
        custom-background
        absolute
        inset-0
        z-20
        mix-blend-exclusion
        "
      ></motion.div>
      <div
        className="
        w-screen
        h-screen
        relative
        overflow-hidden
        custom-background
        "
      >
        <h1
          className="
          text-6xl
          absolute
          bottom-0
          "
        >
          Welcome
        </h1>

        <img
          src="/assets/img-1.jpg"
          alt="img-1"
          className="
          absolute
          w-[200px]
          h-max
          z-10
          left-0
          "
        />
        <img
          src="/assets/img-2.jpg"
          alt="img-2"
          className="
          absolute
          w-[200px]
          h-max
          z-10
          left-1/2
          translate-x-[-50%]
          "
        />
        <img
          src="/assets/img-3.jpg"
          alt="img-4"
          className="
          absolute
          w-[200px]
          h-max
          z-10
          right-0
          bottom-20
          "
        />
        <img
          src="/assets/img-4.jpg"
          alt="img-4"
          className="
          absolute
          w-[200px]
          h-max
          z-10
          right-1/2
          bottom-0
          "
        />
      </div>
    </main>
  );
};

export default App;
