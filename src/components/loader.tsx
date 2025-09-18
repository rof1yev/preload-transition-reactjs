import { motion, useAnimate, type Variants, easeInOut } from "framer-motion";
import { useEffect } from "react";

const Loader = () => {
  const [scope, animate] = useAnimate();

  async function animationFunc() {
    await animate("#image-container", {
      clipPath: "polygon(50% 40%, 50% 40%, 50% 60%, 50% 60%)",
      display: "hidden",
    });

    await animate(
      "#image-container",
      {
        clipPath: "polygon(0% 40%, 100% 40%, 100% 60%, 0% 60%)",
        display: "flex",
      },
      {
        delay: 0.45,
        duration: 0.4,
        ease: easeInOut,
      }
    );

    await animate(
      "#image-container",
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        display: "flex",
      },
      {
        delay: 0.2,
        duration: 0.4,
        ease: easeInOut,
      }
    );
  }

  useEffect(() => {
    animationFunc();
  }, []);

  const move = {
    hidden: (i: number[] = [0, 0]) => ({
      y: "100%",
      x: i[0],
    }),
    moveUp: (i: number[]) => ({
      y: 0,
      transition: {
        delay: i[1],
        duration: 0.4,
        ease: easeInOut,
      },
    }),
    moveRight: {
      x: "10px",
      transition: {
        delay: 0.8,
        duration: 0.4,
        ease: easeInOut,
      },
    },
    moveLeft: {
      x: "-10px",
      transition: {
        delay: 0.8,
        duration: 0.4,
        ease: easeInOut,
      },
    },
  };

  const imageChange = {
    hidden: {
      display: "block",
    },
    show: (i: number) => ({
      display: "none",
      transition: {
        duration: 0.6,
        delay: i,
        ease: easeInOut,
      },
    }),
  };

  const containerUp: Variants = {
    hidden: {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    },
    show: {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      transition: {
        delay: 4,
        duration: 0.6,
        ease: easeInOut,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  return (
    <motion.div
      variants={containerUp}
      initial="hidden"
      animate="show"
      ref={scope}
      className="
      bg-[#0e0e0e]
      h-screen
      w-screen
      absolute
      inset-0
      overflow-hidden
      z-50
      "
    >
      <motion.section
        className="
        flex
        justify-center
        items-center
        size-full
        gap-2
        "
      >
        <div className="overflow-y-clip">
          <motion.h1
            variants={move}
            initial="hidden"
            animate={["moveUp", "moveLeft"]}
            custom={[100, 0.2]}
            className="
            uppercase
            text-6xl
            font-bold
            text-gray-400
            "
          >
            Dilshod
          </motion.h1>
        </div>
        <motion.div id="image-container" className="w-[200px] relative">
          <motion.img
            variants={imageChange}
            initial="hidden"
            animate="show"
            custom={1.8}
            src="/assets/img-1.jpg"
            alt="image-1"
            className="object-cover"
          />
          <motion.img
            variants={imageChange}
            initial="hidden"
            animate="show"
            custom={2.2}
            src="/assets/img-2.jpg"
            alt="image-1"
            className="object-cover"
          />
          <motion.img
            variants={imageChange}
            initial="hidden"
            animate="show"
            custom={2.6}
            src="/assets/img-3.jpg"
            alt="image-1"
            className="object-cover"
          />
          <motion.img
            variants={imageChange}
            initial="hidden"
            animate="show"
            custom={3}
            src="/assets/img-4.jpg"
            alt="image-1"
            className="object-cover"
          />
          <motion.img
            variants={imageChange}
            initial="hidden"
            animate="show"
            custom={3.4}
            src="/assets/img-5.jpg"
            alt="image-1"
            className="object-cover"
          />
        </motion.div>
        <div className="overflow-y-clip">
          <motion.h1
            variants={move}
            initial="hidden"
            animate={["moveUp", "moveRight"]}
            custom={[-100, 0.3]}
            className="
            uppercase
            text-6xl
            font-bold
            text-gray-400
            "
          >
            Rofiyev
          </motion.h1>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Loader;
