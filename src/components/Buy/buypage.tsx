import { getProduct } from "../Products/products";
import { getProdURL } from "../Utils/utils";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

function BuyPage() {
  const params = useParams();
  const getProd = getProduct();
  let passedData = null;
  getProd.map((getProd) => {
    if (params.id === getProd.id.toString()) {
      passedData = {
        imgName: getProd.name,
        prodName: getProd.prodName,
        prodClass: getProd.nameClass,
        clsFr: getProd.clO,
        clsTw: getProd.clTw,
        clsTr: getProd.clTr,
        price: getProd.price,
      };
    }
  });
  return (
    <>
      <section className=" w-screen h-screen flex flex-col flex-wrap overflow-x-hidden">
        <div className="2xl:w-[1440px] 2xl:self-center xl:w-[calc(100%-6rem)] xl:h-[1024px] xl:pt-20 xl:pl-12 xl:pr-12 xl:ml-12 xl:mr-12 xl:grid xl:grid-cols-8 xl:grid-rows-8 md:h-[1200px] w-[calc(100%-4rem)] h-[950px] pt-16 ml-8 mr-8 flex flex-col flex-wrap bg-gry-400">
          <h1 className={passedData.prodClass}>{passedData.prodName}</h1>
          <img
            className=" xl:col-start-3 xl:col-span-6 xl:row-start-2 xl:row-span-4 md:h-[30rem] w-full h-72 rounded-ee-[3rem] object-cover"
            src={getProdURL(passedData.imgName)}
          />
          <div className="xl:w-fit xl:h-full xl:mr-14 xl:justify-end xl:gap-4 xl:mt-0 xl:col-start-1 xl:col-span-2 xl:row-start-2 xl:row-span-4 md:h-40 md:gap-16 sm:h-28 w-full h-24 mt-10 flex flex-row flex-wrap justify-center gap-8">
            <img
              className="xl:w-44 xl:h-36 sm:w-28 w-24 h-full object-cover"
              src={getProdURL(passedData.imgName)}
            />
            <img
              className="xl:w-44 xl:h-36 sm:w-28 w-24 h-full object-cover transform scale-x-[-1] opacity-70"
              src={getProdURL(passedData.imgName)}
            />
            <img
              className="xl:w-44 xl:h-36 sm:w-28 w-24 h-full object-cover opacity-70"
              src={getProdURL(passedData.imgName)}
            />
          </div>
          <div className="xl:mt-20 xl:w-[calc(100%-4rem)] xl:ml-8 xl:mr-8 xl:justify-end xl:col-start-1 xl:col-span-4 xl:row-start-6 w-[calc(100%-2rem)] h-20 ml-4 mr-4 mt-10 gap-8 flex flex-row flex-wrap justify-center">
            <div className=" w-44 h-full gap-4 flex flex-col flex-wrap">
              <div className={passedData.clsFr} />
              <div className={passedData.clsTw} />
              <div className={passedData.clsTr} />
            </div>
            <div className=" w-24 h-full flex flex-col flex-wrap">
              <h1 className=" w-full h-7 p-1 m-0 font-jost text-center text-sm font-extrabold tracking-widest bg-gry-500">
                SIZE
              </h1>
              <h1 className=" w-24 h-11 m-0 pt-2 font-jost text-center text-2xl font-extrabold text-black bg-white ">
                9"
              </h1>
            </div>
          </div>
          <div className="xl:mt-20 xl:w-full xl:ml-0 xl:mr-0 xl:justify-start xl:col-start-5 xl:col-span-4 xl:row-start-6 md:h-32 md:mt-10 md:justify-center md:gap-8 md:flex-row w-[calc(100%-10rem)] h-52 mt-6 ml-20 mr-20 gap-4 flex flex-col flex-wrap ">
            <h1 className="md:text-4xl font-jost m-0 font-bold text-5xl text-center text-black">
              {passedData.price}
            </h1>
            <div className="xl:w-40 md:w-44 w-full h-12 flex flex-row flex-wrap justify-center">
              <h1 className=" w-[60%] h-full pt-3 m-0 font-jost text-xl text-center bg-gry-500 ">
                Quantity
              </h1>
              <h1 className=" w-[40%] h-full pt-1 m-0 font-jost text-4xl font-semibold text-black text-center bg-white">
                3
              </h1>
            </div>
            <motion.button
              className="xl:w-40 md:w-44 w-full h-12 font-jost text-center text-2xl tracking-widest font-black text-white bg-blu-800"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
            >
              BUY
            </motion.button>
          </div>
        </div>
      </section>
    </>
  );
}

export default BuyPage;
