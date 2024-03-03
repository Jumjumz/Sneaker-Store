import Shoepic from "../../assets/Products/pexels-adrian-dorobantu-2300334.jpg";

function About() {
  return (
    <>
      <section className=" h-full w-screen flex flex-col flex-wrap">
        <div className="w-[calc(100%-2rem)] flex flex-row flex-wrap justify-between ml-4 mr-4 h-[923px] bg-gry-400 self-center">
          <div className=" w-16 h-[30rem] mt-4 flex flex-col flex-wrap justify-between">
            <h1 className="font-roboto font-black text-5xl leading-[4rem] text-center m-0">
              A B O U T
            </h1>
            <h1 className="font-roboto font-black text-5xl leading-[4rem] text-center m-0">
              U S
            </h1>
          </div>
          <div className=" w-[80%] h-[31rem] bg-drkred flex flex-col flex-wrap">
            <div className=" w-[calc(100%-4rem)] h-[calc(100%-4rem)] m-8 bg-about-model bg-fixed self-center bg-cover" />
          </div>
          <div className=" w-full h-28 flex flex-col justify-center">
            <p className=" font-inter-light text-black text-sm text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              id magna vel urna consectetur posuere. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
          </div>
          <div className=" w-[25.5rem] h-[4.5rem] relative left-[-1rem] bg-coral-800" />
          <img
            className=" w-full h-56 object-cover relative top-[-2.5rem] z-10"
            src={Shoepic}
          />
          <div className=" w-[5.5rem] h-[19.7rem] relative top-[-18.5rem] left-[78%] bg-coral-800" />
        </div>
      </section>
    </>
  );
}

export default About;
