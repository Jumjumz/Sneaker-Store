import Shoepic from "../../assets/Converted/Asset 111.webp";
import Model from "../../assets/Converted/model-about-us.webp";

function About() {
  return (
    <>
      <section className=" h-full w-screen flex flex-col flex-wrap">
        <div className="2xl:w-[1440px] xl:h-[1200px] xl:pl-12 xl:pr-12 xl:grid-cols-16 xl:grid-rows-12 md:w-[calc(100%-8rem)] md:h-[1140px] md:grid md:grid-cols-10 md:grid-rows-12 md:ml-16 md:mr-16 w-[calc(100%-2rem)] flex flex-row flex-wrap justify-between ml-4 mr-4 h-[923px] bg-gry-400 self-center">
          <div className="xl:col-start-1 xl:col-span-6 xl:row-start-3 xl:row-span-4 md:col-start-1 md:col-span-4 md:gap-4 md:row-start-3 md:row-span-3 md:justify-center max-[767px]:w-16 max-[767px]:h-[30rem] max-[767px]:mt-4 flex flex-col flex-wrap justify-between">
            <h1 className="md:hidden font-roboto font-black text-5xl leading-[4rem] text-center m-0">
              A B O U T
            </h1>
            <h1 className="md:hidden font-roboto font-black text-5xl leading-[4rem] text-center m-0">
              U S
            </h1>
            <h1 className="xl:text-[5rem] max-[767px]:hidden font-roboto font-black text-7xl m-0">
              About Us
            </h1>
            <p className="xl:text-base max-[767px]:hidden font-inter-light text-black ml-2 text-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              id magna vel urna consectetur posuere. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
          </div>
          <div className="xl:col-start-8 xl:col-span-9 xl:h-[81.8%] md:w-full md:h-[90%] md:z-10 md:col-start-5 md:col-span-6 md:row-start-2 md:row-span-12 w-[80%] h-[31rem] bg-drkred flex flex-col flex-wrap">
            <div
              className="xl:w-[calc(100%-8rem)] xl:bg-cover xl:bg-no-repeat xl:bg-center xl:ml-16 xl:mr-16 xl:mb-16 w-[calc(100%-4rem)] h-[calc(100%-4rem)] m-8 bg-about-model bg-fixed self-center bg-cover"
              style={{ backgroundImage: `url(${Model})` }}
            />
          </div>
          <div className="md:hidden w-full h-28 flex flex-col justify-center">
            <p className=" font-inter-light text-black text-sm text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              id magna vel urna consectetur posuere. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
          </div>
          <div className="md:hidden w-[25.5rem] h-[4.5rem] relative left-[-1rem] bg-coral-800" />
          <div className="xl:left-[-7rem] xl:top-14 xl:col-start-1 xl:col-span-10 xl:row-start-6 max-[767px]:hidden col-start-1 col-span-5 row-start-6 relative right-16 bg-coral-800" />
          <img
            className="xl:w-full xl:h-full xl:top-0 xl:col-start-1 xl:col-span-7 xl:row-start-7 xl:row-span-4 md:col-start-1 md:col-span-4 md:row-start-7 md:row-span-3 w-full h-56 object-cover relative top-[-2.5rem] z-10"
            src={Shoepic}
            loading="lazy"
          />
          <div className="md:hidden w-[5.5rem] h-[19.7rem] relative top-[-18.5rem] left-[78%] bg-coral-800" />
          <div className="xl:ml-12 xl:top-16 xl:col-start-6 xl:col-span-2 xl:row-start-6 xl:row-span-5 max-[767px]:hidden col-start-4 row-start-6 row-span-4 relative bg-coral-800" />
          <div className="xl:col-start-8 xl:col-span-9 xl:row-start-1 max-[767px]:hidden col-start-6 col-span-5 bg-drkred" />
        </div>
      </section>
    </>
  );
}

export default About;
