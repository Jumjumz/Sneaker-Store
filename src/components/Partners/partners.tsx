import PartSvg from "../../assets/SVGs/Content Info.svg";

function Partners() {
  return (
    <>
      <section className=" h-full w-screen flex flex-col flex-wrap ">
        <div className="w-[calc(100%-2rem)] flex flex-row flex-wrap justify-between ml-4 mr-4 h-[923px] bg-gry-400 self-center">
          <div className=" w-full h-[12.5rem] bg-blu-900 pt-16 pl-8 pr-8 flex flex-col">
            <h1 className=" font-roboto font-extrabold text-6xl text-black m-0">
              OUR
            </h1>
            <h1 className=" font-roboto font-black text-white text-6xl m-0">
              PARTNERS
            </h1>
          </div>
          <div className="w-full h-[40rem] flex flex-col overflow-clip">
            <img className=" h-[90%] object-cover self-center" src={PartSvg} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Partners;
