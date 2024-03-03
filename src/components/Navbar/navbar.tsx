import SneakerLogo from "../../assets/SVGs/running-shoes.svg";
import Hamb from "../../assets/SVGs/bars-solid-white.svg";
import CloseBtn from "../../assets/SVGs/x-solid.svg";
import Cart from "../../assets/SVGs/cart-shopping-solid.svg";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <section className=" h-16 w-screen bg-gry-900 fixed top-0 flex flex-col flex-wrap z-50">
      <div className=" h-full w-[calc(100%-4rem)] mr-8 ml-8 self-center flex flex-row- flex-wrap justify-between">
        <Link to="/" className=" self-center">
          <img className=" h-[50px] w-[50px]" src={SneakerLogo} />
        </Link>
        <img
          className=" h-[50px] w-[50px] self-center"
          src={Hamb}
          onClick={() => setNavOpen(true)}
        />
      </div>
      <AnimatePresence>
        {navOpen && (
          <motion.div
            className=" absolute w-[70%] h-dvh bg-blu-900 right-0"
            variants={{
              hidden: { x: ["100vw"], scale: 0.7 },
              animate: { x: 0, scale: 1 },
            }}
            initial="hidden"
            animate="animate"
            transition={{
              duration: 0.5,
              delay: 0,
              ease: "linear",
              type: "spring",
              bounce: 0.5,
              stiffness: 30,
            }}
          >
            <div className=" w-[calc(100%-4rem)] h-[calc(100%-4rem)] m-8 flex flex-col flex-wrap">
              <img
                className=" w-9 h-12 self-end"
                src={CloseBtn}
                onClick={() => setNavOpen(false)}
              />
              <ul className=" font-roboto font-bold text-white text-5xl text-center">
                <li className=" mt-24 mb-12">MENS</li>
                <li className=" mt-24 mb-12">WOMENS</li>
                <li className=" mt-24 mb-12">SNEAKERS</li>
                <li className=" mt-24 mb-12">SPORTS</li>
                <li className=" flex flex-col flex-wrap mt-8">
                  <img className=" w-16 h-16 self-center" src={Cart} />
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Navbar;
