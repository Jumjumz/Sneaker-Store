import Navbar from "./components/Navbar/navbar";
import Pages from "./components/Pages/pages";
import BuyPage from "./components/Buy/buypage";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const TIMER = 3000;
  const [visible, isVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      isVisible(true);
    }, TIMER);
  }, []);
  return (
    visible && (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Pages />} />
          <Route path="/buypage/:id" element={<BuyPage />} />
        </Routes>
      </>
    )
  );
}

export default App;
