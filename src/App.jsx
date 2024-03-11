import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./Components/Navbar";
import { Banner } from "./Components/Banner";
import { Skills } from "./Components/Skills";
import { Projects } from "./Components/Projects";
import { Contact } from "./Components/Contact";
import { Footer } from "./Components/Footer";
import Footer2 from "./Components/Footer2";
import { useEffect, useState } from "react";
import { IoMdArrowDropupCircle } from "react-icons/io";

function App() {
  const [topButton, setTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setTopButton(true);
      } else {
        setTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="App">
      {topButton && (
        <button
          className="fixed bottom-[10px] right-[10px] md:bottom-[50px] lg:right-[50px] h-[50px] w-[50px] lg:h-[50px] lg:w-[50px] text-4xl text-green-600"
          onClick={scrollUp}
        >
          <IoMdArrowDropupCircle />
        </button>
      )}
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer2 />
    </div>
  );
}

export default App;
