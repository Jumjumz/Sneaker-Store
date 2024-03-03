import SneakerLogo from "../../assets/SVGs/running-shoes.svg";
import Fb from "../../assets/SVGs/FB.svg";
import In from "../../assets/SVGs/instagram.svg";
import Yt from "../../assets/SVGs/youtube.svg";
import Tw from "../../assets/SVGs/TWTR.svg";
import Ld from "../../assets/SVGs/linkedin.svg";

function Footer() {
  const img = [Fb, In, Yt, Tw, Ld];
  return (
    <>
      <section className="h-full w-screen flex flex-col flex-wrap ">
        <div className="w-[calc(100%-2rem)] flex flex-row flex-wrap justify-between pt-52 pl-4 pr-4 ml-4 mr-4 h-[923px] bg-blu-600 self-center">
          <div className=" w-20 h-52 flex flex-col flex-wrap">
            <h1 className=" font-jost font-black text-gry-900 text-xl">
              About
            </h1>
            <ul className=" font-jost text-gry-900 text-sm">
              <li>Home</li>
              <li>About</li>
              <li>Careers</li>
              <li>Contact</li>
              <li>Blog</li>
              <li>Info</li>
            </ul>
          </div>
          <div className=" w-24 h-52 flex flex-col flex-wrap">
            <h1 className=" font-jost font-black text-gry-900 text-xl">
              Products
            </h1>
            <ul className=" font-jost text-gry-900 text-sm">
              <li>Men's Shoes</li>
              <li>Women's Shoes</li>
              <li>Sneaker's Shoes</li>
              <li>Sports Shoes</li>
            </ul>
          </div>
          <div className=" w-24 h-52 flex flex-col flex-wrap">
            <h1 className=" font-jost font-black text-gry-900 text-xl">
              Partners
            </h1>
            <ul className=" font-jost text-gry-900 text-sm">
              <li>Visa</li>
              <li>MasterCard</li>
              <li>Paypal</li>
            </ul>
          </div>
          <div className=" w-full h-72 flex flex-col flex-wrap justify-between">
            <img className=" w-full h-36" src={SneakerLogo} />
            <h1 className=" font-jost text-gry-900 text-sm text-center">
              0123 BLDG NO. CITY, STATE ZIP CODE
            </h1>
            <h2 className=" fon-jost text-gry-900 text-sm text-center">
              email@shoeshoper.com
            </h2>
            <div className=" w-full h-6 flex flex-col">
              <div className=" w-52 h-full self-center flex flex-row justify-between">
                {img.map((i) => (
                  <img className=" w-6 h-full" src={i} />
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
