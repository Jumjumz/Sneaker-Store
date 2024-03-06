import Hero from "../Hero/hero";
import PopProd from "../PopProd/popprod";
import NewArrivals from "../Arrivals/arrivals";
import About from "../About/about";
import Partners from "../Partners/partners";
import Footer from "../Footer/footer";
import { motion } from "framer-motion";

function Pages() {
  return (
    <>
      <motion.div
        className="flex flex-col flex-wrap overflow-x-hidden"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial="hidden"
        animate="visible"
        transition={{
          duration: 0.5,
          delay: 0.3,
        }}
      >
        <Hero />
        <PopProd />
        <NewArrivals />
        <About />
        <Partners />
        <Footer />
      </motion.div>
    </>
  );
}

export default Pages;
