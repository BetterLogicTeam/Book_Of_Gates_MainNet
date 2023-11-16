import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/Header/Header";
import { useEffect } from "react";
import { useState } from "react";
import { BsArrowDownSquareFill, BsArrowUpSquareFill } from "react-icons/bs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Mint from "./components/Mint/Mint";
import Mint_now from "./components/Mint_now/Mint_now";
import Whitelist from "./components/Whitelist/Whitelist";
import Presale from "./components/Presale/Presale";
import Play_page from "./components/Play_page/Play_page";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Refferal_Info from "./components/Refferal_Info/Refferal_Info";
import Admin_Refferal_details from "./components/Admin_Refferal_details/Admin_Refferal_details";
import Treasure_Hunt from "./components/Treasure_Hunt/Treasure_Hunt";

function App() {
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0 && !isScrollingDown) {
        setIsScrollingDown(true);
      } else if (scrollTop === 0 && isScrollingDown) {
        setIsScrollingDown(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrollingDown]);

  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScrollDown = () => {
    window.document.getElementById("botttom").scrollIntoView();
  };

  return (
    <div className="App">
      {isScrollingDown && (
        <div className="scroll-button" onClick={handleScrollUp}>
          <BsArrowUpSquareFill />
        </div>
      )}
      {!isScrollingDown && (
        <a href="#botttom" className="scroll-button" onClick={handleScrollDown}>
          <BsArrowDownSquareFill />
        </a>
      )}

      <BrowserRouter>
      <ToastContainer />

        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Mint_Now" element={<Mint_now />} />
          <Route path="/mint" element={<Mint />} />
          <Route path="/whitelist" element={<Whitelist />} />
          <Route path="/presale" element={<Presale />} />
          <Route path="/TreasureMap" element={<Play_page />} />
          <Route path="/Refferal_Info" element={<Refferal_Info />} />
          <Route path="/Admin_Refferal_details" element={<Admin_Refferal_details />} />
          <Route path="/Treasure_Hunt" element={<Treasure_Hunt />} />



        </Routes>
        <Footer />
      </BrowserRouter>

      {/* <Footer /> */}
    </div>
  );
}

export default App;

// how to change data on click in react