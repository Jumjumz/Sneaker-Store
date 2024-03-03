import { getProduct } from "../Products/products";
import { getProdURL } from "../Utils/utils";

function NewArrivals() {
  const newArrivals = getProduct();
  return (
    <>
      <section className=" h-full w-screen flex flex-col flex-wrap">
        <div className=" w-[calc(100%-2rem)] h-7 ml-4 mr-4 bg-coral-900" />
        <div className=" w-4 h-14 absolute left-0 bg-coral-900" />
        <div className=" w-[calc(100%-2rem)] flex flex-row flex-wrap justify-between ml-4 mr-4 h-[876px] bg-blu-800 self-center pl-6 pr-6 pb-2">
          <h1 className="w-full h-8 m-0 relative justify-center font-jost font-extrabold text-[2rem] text-white text-center">
            NEW <em className=" not-italic text-blk">ARRIVALS</em>
          </h1>
          {newArrivals.map((newArrivals) => (
            <>
              <div
                className=" w-40 h-52 rounded-tl-2xl rounded-br-2xl bg-white overflow-clip"
                key={newArrivals.id}
              >
                <img
                  className=" w-full h-[60%] object-cover"
                  src={getProdURL(newArrivals.name)}
                />
                <div className=" bg-gry-500 w-full h-[40%] flex flex-col flex-wrap justify-evenly pl-4 pr-4 pb-2">
                  <h1 className="m-0 font-roboto font-extralight text-sm">
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
          <div className="w-full h-12 flex flex-col flex-wrap">
            <button className=" h-full w-44 font-roboto font-extralight text-xl bg-coral-800 self-center text-black">
              SEE MORE
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default NewArrivals;
