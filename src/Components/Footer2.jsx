import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import logo from "../assets/img/logo.png";

const Footer2 = () => {
  return (
    <footer className="footer footer-center text-[#b8b8b8]">
      <nav className="">
        <p className="text-4xl">Al Zabid</p>

        <p className="text-xl">Email: alzabid.ashik@gmail.com</p>
      </nav>
      <nav>
        <div className="social-icon">
          <a target="_blank" href="https://www.linkedin.com/in/alzabid/">
            <img src={navIcon1} alt="Icon" />
          </a>
          <a href="#">
            <img src={navIcon2} alt="Icon" />
          </a>
          <a href="#">
            <img src={navIcon3} alt="Icon" />
          </a>
        </div>
      </nav>
      <aside>
        <p>Copyright © 2023 - All right reserved by Al_Zabid_Official</p>
      </aside>
    </footer>
  );
};

export default Footer2;
