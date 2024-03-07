import { getHero } from "../Products/products";
import { getProdURL } from "../Utils/utils";
import { motion } from "framer-motion";

function Hero() {
  const heroAni = getHero();
  return (
    <section className=" w-screen h-full flex flex-col flex-wrap ">
      <div className="2xl:w-[1440px] xl:h-[984px] xl:grid-cols-16 xl:grid-rows-14 xl:pl-8 xl:pr-8 md:h-[1140px] md:pt-20 h-[932px] md:ml-16 md:mr-16 md:grid-cols-12 md:bg-gry-400 self-center pt-16 grid grid-cols-6 grid-rows-12">
        {heroAni.map((heroAni) => (
          <div className={heroAni.divclass} key={heroAni.id}>
            <motion.img
              className="w-full h-full object-cover"
              src={getProdURL(heroAni.name)}
              alt={heroAni.alt}
            />
          </div>
        ))}
        <div className="xl:mr-4 xl:mt-3 xl:h-[31rem] xl:col-start-6 xl:col-span-4 xl:row-start-3 xl:row-span-8 md:col-start-7 md:row-start-2 md:h-[31rem] md:z-0 h-[480px] ml-2 mt-4 -z-10 bg-coral-900 col-start-1 col-span-3 row-start-1 row-span-6" />
        <div className="xl:ml-[-0.5rem] xl:mt-2 xl:h-[30rem] xl:col-start-14 xl:row-start-3 xl:row-span-8 md:col-start-10 md:row-start-5 md:h-[30.5rem] md:z-0 w-[76px] h-[505px] -z-10 mt-[0.35rem] ml-[-0.5rem] bg-coral-900 col-start-4 row-start-6 row-span-6 " />
        <div className="xl:ml-[-1.3rem] xl:mr-12 xl:mt-10 xl:h-[14.2rem] xl:col-start-10 xl:col-span-4 xl:row-start-9 xl:row-span-4 max-[767px]:hidden h-[245px] relative left-3 md:z-0 mt-8 col-start-5 col-span-4 row-start-7 row-span-3 bg-coral-900 " />
        <div className="max-[1279px]:hidden xl:h-[30.8rem] xl:mr-6 xl:mt-8 xl:col-start-10 xl:col-span-4 xl:row-start-1 xl:row-span-8 md:col-start-7 md:row-start-2 md:h-[31rem] md:z-0 h-[480px] ml-2 mt-4 -z-10 bg-coral-900 col-start-1 col-span-3 row-start-1 row-span-6" />
        <div className="xl:col-start-1 xl:col-span-5 xl:row-start-3 xl:row-span-5 md:col-start-2 md:col-span-4 md:row-start-2 md:row-span-4 md:m-0 md:flex-row col-start-4 col-span-3 row-start-1 row-span-5 ml-4 mr-4 flex flex-col flex-wrap justify-center">
          <h1 className=" md:hidden font-jost italic font-black text-[4rem] leading-[5rem] text-center">
            Shoes Shop Store
          </h1>
          <h1 className="max-[767px]:hidden max-[960px]:text-[2.5rem] font-roboto font-extrabold text-6xl leading-[4.5rem] m-0 self-center">
            One Stop Shop for Sneaker Enthusiast
          </h1>
        </div>
        <div className="xl:col-start-1 xl:col-span-4 xl:row-start-8 xl:row-span-3 md:col-start-2 md:col-span-4 md:row-start-6 md:row-span-2 md:p-0 col-start-1 col-span-3 row-start-8 row-span-4 p-4">
          <p className="min-[960px]:text-base font-inter-light text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id
            magna vel urna consectetur posuere.
          </p>
          <motion.button
            className="xl:mt-8 font-roboto font-bold text-sm text-white w-40 h-11 mt-10 bg-blu-800"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            transition={{
              delay: 0,
            }}
          >
            SHOP NOW
          </motion.button>
        </div>
        <div className="xl:hidden max-[767px]:hidden col-start-1 col-span-10 row-start-11 row-span-2 bg-coral-800 " />
      </div>
    </section>
  );
}

export default Hero;
