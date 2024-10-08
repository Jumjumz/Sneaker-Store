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
    <section className=" md:h-20 h-16 w-screen bg-gry-900 fixed top-0 flex flex-col flex-wrap z-50">
      <div className="2xl:w-[1440px] md:mr-16 md:ml-16 md:w-[calc(100%-8rem)] h-full w-[calc(100%-4rem)] mr-8 ml-8 self-center flex flex-row flex-wrap justify-between">
        <Link to="/" className=" self-center">
          <img
            className="xl:w-16 xl:h-16 h-[50px] w-[50px]"
            src={SneakerLogo}
          />
        </Link>
        <img
          className=" md:hidden h-[50px] w-[50px] self-center cursor-pointer"
          src={Hamb}
          onClick={() => setNavOpen(true)}
        />
        <div className="max-[767px]:hidden xl:w-[52rem] h-full w-[34.5rem]">
          <ul className="xl:text-xl h-full flex flex-row flex-wrap justify-between font-roboto font-bold text-white text-lg text-center">
            <li className=" self-center cursor-pointer">MENS</li>
            <li className=" self-center cursor-pointer">WOMENS</li>
            <li className=" self-center cursor-pointer">SNEAKERS</li>
            <li className=" self-center cursor-pointer">SPORTS</li>
            <li className=" self-center cursor-pointer">
              <img className="xl:w-11 xl:h-11 w-9 h-9" src={Cart} />
            </li>
          </ul>
        </div>
      </div>
      <AnimatePresence>
        {navOpen && (
          <motion.nav
            key={"nav"}
            className=" absolute w-[70%] h-dvh bg-blu-900 right-0"
            variants={{
              hidden: {
                x: 1000,
              },
              animate: {
                x: 0,
              },
            }}
            initial="hidden"
            animate="animate"
            exit="hidden"
            transition={{
              duration: 0.5,
              delay: 0,
              ease: "linear",
              type: "spring",
              bounce: 0.8,
              stiffness: 40,
            }}
          >
            <div className=" w-[calc(100%-4rem)] h-[calc(100%-4rem)] m-8 flex flex-col flex-wrap">
              <img
                className=" w-9 h-12 self-end cursor-pointer"
                src={CloseBtn}
                onClick={() => setNavOpen(false)}
              />
              <ul className=" font-roboto font-bold text-white text-5xl text-center">
                <li className=" mt-24 mb-12 cursor-pointer">MENS</li>
                <li className=" mt-24 mb-12 cursor-pointer">WOMENS</li>
                <li className=" mt-24 mb-12 cursor-pointer">SNEAKERS</li>
                <li className=" mt-24 mb-12 cursor-pointer">SPORTS</li>
                <li className=" flex flex-col flex-wrap mt-8 cursor-pointer">
                  <img className=" w-16 h-16 self-center" src={Cart} />
                </li>
              </ul>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Navbar;
