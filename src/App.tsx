import Navbar from "./components/Navbar/navbar";
import Hero from "./components/Hero/hero";
import PopProd from "./components/Pop Prod/popprod.";
import NewArrivals from "./components/Arrivals/arrivals";
import About from "./components/About/about";
import Partners from "./components/Partners/partners";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col flex-wrap overflow-x-hidden">
        <Hero />
        <PopProd />
        <NewArrivals />
        <About />
        <Partners />
        <Footer />
      </div>
    </>
  );
}

export default App;
