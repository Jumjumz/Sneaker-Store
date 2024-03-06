import Navbar from "./components/Navbar/navbar";
import Pages from "./components/Pages/pages";
import BuyPage from "./components/Buy/buypage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Pages />} />
        <Route path="/buypage/:id" element={<BuyPage />} />
      </Routes>
    </>
  );
}

export default App;
