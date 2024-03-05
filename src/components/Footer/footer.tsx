import SneakerLogo from "../../assets/SVGs/running-shoes.svg";
import footer from "./footerimport";
import { getFooterURL } from "../Utils/utils";

function Footer() {
  const getFooter = footer();
  return (
    <>
      <section className="h-full w-screen flex flex-col flex-wrap ">
        <div className="2xl:w-[1440px] xl:h-52 self-center max-[767px]:hidden h-24 w-[calc(100%-8rem)] ml-16 mr-16 bg-gry-400 " />
        <div className="min-[1800px]:justify-center 2xl:w-[1440px] xl:h-[700px] xl:justify-normal xl:gap-6 xl:pl-16 xl:pr-16 md:w-[calc(100%-8rem)] md:h-[523px] md:pt-20 md:ml-16 md:mr-16 w-[calc(100%-2rem)] flex flex-row flex-wrap justify-between pt-52 pl-4 pr-4 ml-4 mr-4 h-[923px] bg-blu-600 self-center">
          <div className="xl:w-52 md:h-full md:gap-8 w-20 h-52 flex flex-col flex-wrap">
            <h1 className="xl:text-4xl md:text-2xl font-jost font-black text-gry-900 text-xl">
              About
            </h1>
            <ul className="xl:text-xl font-jost text-gry-900 text-sm">
              <li>Home</li>
              <li>About</li>
              <li>Careers</li>
              <li>Contact</li>
              <li>Blog</li>
              <li>Info</li>
            </ul>
          </div>
          <div className="xl:w-52 md:h-full md:w-28 md:gap-8 w-24 h-52 flex flex-col flex-wrap">
            <h1 className="xl:text-4xl md:text-2xl font-jost font-black text-gry-900 text-xl">
              Products
            </h1>
            <ul className=" xl:text-xl font-jost text-gry-900 text-sm">
              <li>Men's Shoes</li>
              <li>Women's Shoes</li>
              <li>Sneaker's Shoes</li>
              <li>Sports Shoes</li>
            </ul>
          </div>
          <div className="xl:w-52 md:h-full md:w-28 md:gap-8 w-24 h-52 flex flex-col flex-wrap">
            <h1 className="xl:text-4xl md:text-2xl font-jost font-black text-gry-900 text-xl">
              Partners
            </h1>
            <ul className="xl:text-xl font-jost text-gry-900 text-sm">
              <li>Visa</li>
              <li>MasterCard</li>
              <li>Paypal</li>
            </ul>
          </div>
          <div className="xl:w-72 xl:justify-center md:order-[-1] md:w-60 md:h-full md:justify-start md:gap-4 w-full h-72 flex flex-col flex-wrap justify-between">
            <img
              className="xl:h-52 xl:w-40 md:w-28 md:h-28 w-full h-36"
              src={SneakerLogo}
              loading="lazy"
            />
            <h1 className="md:text-xs md:text-start font-jost text-gry-900 text-sm text-center">
              0123 BLDG NO. CITY, STATE ZIP CODE
            </h1>
            <h2 className="md:text-start font-jost text-gry-900 text-sm text-center">
              email@shoeshoper.com
            </h2>
            <div className=" w-full h-6 flex flex-col">
              <div className="md:self-start w-52 h-full self-center flex flex-row justify-between">
                {getFooter.map((getFooter) => (
                  <img
                    key={getFooter.id}
                    className=" w-6 h-full"
                    src={getFooterURL(getFooter.name)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
