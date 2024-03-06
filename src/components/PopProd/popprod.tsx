import { getProduct } from "../Products/products";
import { getProdURL } from "../Utils/utils";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function PopProd() {
  const disProduct = getProduct();

  return (
    <section className=" h-full w-screen flex flex-col flex-wrap">
      <div className=" 2xl:w-fit 2xl:self-center xl:w-[815px] md:w-[calc(100%-8rem)] md:h-32 md:ml-16 md:mr-16 w-full h-28 flex flex-col flex-wrap justify-end bg-coral-800 absolute z-10 pl-10 pr-10 pt-16">
        <h1 className="xl:top-4 md:text-[4rem] md:text-center m-0 justify-center relative font-jost font-extrabold text-[2rem]">
          POPULAR{" "}
          <em className="xl:text-blu-900 not-italic text-blu-900">PRODUCTS</em>
        </h1>
      </div>
      <div className="2xl:w-[1440px] 2xl:border-r-coral-900 xl:h-[1124px] xl:pt-16 xl:pl-14 xl:pr-14 xl:border-t-[4rem] xl:border-l-[4rem] xl:border-r-[4rem] xl:border-gry-400 min-[900px]:pl-20 min-[900px]:pr-20 md:w-[calc(100%-8rem)] md:h-[1140px] md:ml-16 md:mr-16 md:pl-10 md:pr-10 md:pt-44 min-[560px]:flex-col w-[calc(100%-2rem)] flex flex-row flex-wrap justify-evenly ml-4 mr-4 h-[932px] bg-blu-900 self-center pt-40 pl-6 pr-6 pb-4">
        {disProduct.slice(0, 6).map((disProduct) => (
          <>
            <div
              className="xl:w-64 xl:h-96 md:w-60 md:h-72 w-40 h-52 rounded-tl-2xl rounded-br-2xl bg-white self-center overflow-clip"
              key={disProduct.id}
            >
              <img
                className=" w-full h-[60%] object-cover"
                src={getProdURL(disProduct.name)}
                loading="lazy"
              />
              <div className=" bg-gry-500 w-full h-[40%] flex flex-col flex-wrap justify-evenly pl-4 pr-4 pb-2">
                <h1 className="xl:text-2xl md:font-extrabold md:text-2xl m-0 font-roboto font-extralight text-sm text-center">
                  {disProduct.prodName}
                </h1>
                <Link to={"/buypage/" + disProduct.id}>
                  <motion.button
                    className="md:h-8 md:text-base md:font-extrabold w-full h-4 bg-coral-900 text-white text-xs rounded-md"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.96 }}
                    transition={{
                      delay: 0,
                    }}
                  >
                    BUY NOW
                  </motion.button>
                </Link>
                <motion.button
                  className="md:h-8 md:text-base md:font-extrabold w-full h-4 bg-blu-800 text-white text-xs font-light rounded-md"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{
                    delay: 0,
                  }}
                >
                  ADD TO CART
                </motion.button>
              </div>
            </div>
          </>
        ))}
      </div>
      <div className="2xl:hidden xl:w-16 xl:h-[971px] xl:mt-[6.8rem] xl:mr-16 xl:z-10 md:w-[252px] md:h-[950px] w-[77px] h-[767px] bg-coral-900 right-0 absolute -z-10 mt-36" />
    </section>
  );
}

export default PopProd;
