import PartSvg from "../../assets/SVGs/Content Info.svg";

function Partners() {
  return (
    <>
      <section className=" h-full w-screen flex flex-col flex-wrap ">
        <div className="2xl:w-[1440px] xl:h-[1000px] md:w-[calc(100%-8rem)] md:h-[900px] md:ml-16 md:mr-16 w-[calc(100%-2rem)] flex flex-row flex-wrap justify-between ml-4 mr-4 h-[923px] bg-gry-400 self-center">
          <div className="md:h-56 w-full h-[12.5rem] bg-blu-900 pt-16 pl-8 pr-8 flex flex-col">
            <h1 className="xl:pl-80 xl:text-start md:text-7xl md:text-center font-roboto font-extrabold text-6xl text-black m-0">
              OUR
            </h1>
            <h1 className="xl:pl-80 xl:text-start md:text-7xl md:text-center md:mt-7 md:text-gry-400 font-roboto font-black text-white text-6xl m-0">
              PARTNERS
            </h1>
          </div>
          <div className="xl:h-[45rem] w-full h-[40rem] flex flex-col overflow-clip">
            <img
              className="xl:w-[120%] xl:h-[120%] xl:top-[-8rem] xl:object-contain xl:rotate-[20deg] xl:relative md:rotate-45 md:h-full md:object-fill h-[90%] object-cover self-center"
              src={PartSvg}
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Partners;
