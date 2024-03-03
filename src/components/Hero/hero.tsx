import ImgOne from "../../assets/Products/pexels-suraj-b-2759783.jpg";
import ImgTwo from "../../assets/Products/pexels-mnz-1598505.jpg";

function Hero() {
  return (
    <section className=" w-screen h-full flex flex-col flex-wrap ">
      <div className="h-[932px] self-center pt-16 grid grid-cols-6 grid-rows-12">
        <div className=" col-start-1 col-span-3 row-start-1 row-span-6 mt-1 mr-2 h-[482px]">
          <img className="w-full h-full object-cover" src={ImgOne} />
        </div>
        <div className=" col-start-4 col-span-3 row-start-6 row-span-6 h-[474px] mt-4">
          <img className=" w-full h-full object-cover" src={ImgTwo} />
        </div>
        <div className=" h-[480px] ml-2 mt-4 -z-10 bg-coral-900 col-start-1 col-span-3 row-start-1 row-span-6"></div>
        <div className=" w-[76px] h-[505px] -z-10 mt-[0.35rem] ml-[-0.5rem] bg-coral-900 col-start-4 row-start-6 row-span-6 "></div>
        <div className=" col-start-4 col-span-3 row-start-1 row-span-5 ml-4 mr-4 flex flex-col flex-wrap justify-center">
          <h1 className=" font-jost italic font-black text-[4rem] leading-[5rem]">
            Shoes Shop Store
          </h1>
        </div>
        <div className=" col-start-1 col-span-3 row-start-8 row-span-4 p-4">
          <p className=" font-inter-light text-sm ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id
            magna vel urna consectetur posuere.
          </p>
          <button className=" font-roboto font-bold text-sm text-white w-40 h-11 mt-10 bg-blu-800">
            SHOP NOW
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
