import { getArrivals } from "../Products/products";
import { getProdURL } from "../Utils/utils";

function PopProd() {
  const disProduct = getArrivals();
  return (
    <section className=" h-full w-screen flex flex-col flex-wrap">
      <div className=" w-full h-28 flex flex-col flex-wrap justify-end bg-coral-800 absolute z-10 pl-10 pr-10 pt-16">
        <h1 className="m-0 justify-center font-jost font-extrabold text-[2rem]">
          POPULAR <em className=" not-italic text-blu-900">PRODUCTS</em>
        </h1>
      </div>
      <div className=" w-[calc(100%-2rem)] flex flex-row flex-wrap justify-between ml-4 mr-4 h-[932px] bg-blu-900 self-center pt-40 pl-6 pr-6 pb-4">
        {disProduct.map((disProduct) => (
          <>
            <div
              className=" w-40 h-52 rounded-tl-2xl rounded-br-2xl bg-white overflow-clip"
              key={disProduct.id}
            >
              <img
                className=" w-full h-[60%] object-cover"
                src={getProdURL(disProduct.name)}
              />
              <div className=" bg-gry-500 w-full h-[40%] flex flex-col flex-wrap justify-evenly pl-4 pr-4 pb-2">
                <h1 className="m-0 font-roboto font-extralight text-sm">
                  {disProduct.prodName}
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
      </div>
      <div className=" w-[77px] h-[767px] bg-coral-900 right-0 absolute -z-10 mt-36"></div>
    </section>
  );
}

export default PopProd;
