import { getArrivals } from "../Products/products";
import { getProdURL } from "../Utils/utils";

function NewArrivals() {
  const newArrivals = getArrivals();
  return (
    <>
      <section className=" h-full w-screen flex flex-col flex-wrap">
        <div className="2xl:w-[1440px] 2xl:self-center 2xl:border-r-coral-900 xl:border-l-[4rem] xl:border-r-[4rem] xl:border-gry-400 md:h-14 md:w-[calc(100%-8rem)] md:ml-16 md:mr-16 w-[calc(100%-2rem)] h-7 ml-4 mr-4 bg-coral-900" />
        <div className="2xl:hidden xl:ml-16 md:h-24 md:w-16 w-4 h-14 absolute left-0 bg-coral-900" />
        <div className="2xl:w-[1440px] 2xl:self-center 2xl:border-l-blu-800 xl:pt-[29px] xl:tracking-[1rem] xl:justify-center xl:border-l-[4rem] xl:border-r-[4rem] xl:border-gry-400 max-[767px]:hidden w-[calc(100%-8rem)] flex flex-row ml-16 mr-16 h-20 justify-end pt-[19px] bg-blu-800">
          <h1 className="xl:text-6xl m-0 relative font-roboto font-extrabold text-7xl text-white text-center">
            <em className=" not-italic text-gry-400">NEW</em>{" "}
            <em className=" not-italic text-blk">ARRIVALS</em>
          </h1>
        </div>
        <div className="md:hidden md:w-[calc(100%-8rem)] md:h-[1004px] md:ml-16 md:mr-16 md:bg-gry-400 w-[calc(100%-2rem)] flex flex-row flex-wrap justify-evenly ml-4 mr-4 h-[876px] bg-blu-800 self-center pl-6 pr-6 pb-2">
          <h1 className=" w-full h-8 m-0 relative justify-center font-jost font-extrabold text-[2rem] text-white text-center">
            NEW <em className=" not-italic text-blk">ARRIVALS</em>
          </h1>
          {newArrivals.slice(0, 6).map((newArrivals) => (
            <>
              <div
                className=" w-40 h-52 rounded-tl-2xl rounded-br-2xl bg-white self-center overflow-clip"
                key={newArrivals.id}
              >
                <img
                  className=" w-full h-[60%] object-cover"
                  src={getProdURL(newArrivals.name)}
                  loading="lazy"
                />
                <div className=" bg-gry-500 w-full h-[40%] flex flex-col flex-wrap justify-evenly pl-4 pr-4 pb-2">
                  <h1 className="m-0 font-roboto font-extralight text-sm text-center">
                    {newArrivals.prodName}
                  </h1>
                  <button className=" w-full h-4 bg-coral-900 text-white text-xs">
                    BUY NOW
                  </button>
                  <button className="w-full h-4 bg-blu-800 text-white text-xs font-light">
                    ADD TO CART
                  </button>
                </div>
              </div>
            </>
          ))}
          <div className=" w-full h-12 flex flex-col flex-wrap">
            <button className=" h-full w-44 font-roboto font-extralight text-xl bg-coral-800 self-center text-black">
              SEE MORE
            </button>
          </div>
        </div>
        <div className="2xl:w-[1440px] 2xl:self-center min-[1410px]:pl-24 min-[1410px]:pr-24 xl:h-[1200px] xl:pb-8 max-[767px]:hidden min-[1058px]:justify-center min-[1058px]:gap-8 min-[1058px]:h-[1100px] w-[calc(100%-8rem)] h-[1004px] ml-16 mr-16 pl-12 pr-12 md:bg-gry-400 flex flex-row flex-wrap justify-between">
          {newArrivals.map((newArrivals) => (
            <>
              <div
                className="min-[1440px]:w-60 2xl:w-72 2xl:h-80 xl:w-52 xl:h-72 min-[1058px]:w-60 min-[929px]:w-52 min-[929px]:h-56 w-44 h-52 rounded-tl-2xl rounded-br-2xl bg-white self-center overflow-clip"
                key={newArrivals.id}
              >
                <img
                  className=" w-full h-[60%] object-cover"
                  src={getProdURL(newArrivals.name)}
                  loading="lazy"
                />
                <div className=" bg-gry-500 w-full h-[40%] flex flex-col flex-wrap justify-evenly pl-4 pr-4 pb-2">
                  <h1 className="xl:text-xl m-0 font-roboto font-extrabold text-sm text-center">
                    {newArrivals.prodName}
                  </h1>
                  <button className="2xl:h-8 w-full h-6 bg-coral-900 text-white text-xs font-extralight rounded-xl">
                    BUY NOW
                  </button>
                  <button className="2xl:h-8 w-full h-6 bg-blu-800 text-white text-xs font-extralight rounded-xl">
                    ADD TO CART
                  </button>
                </div>
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  );
}

export default NewArrivals;
