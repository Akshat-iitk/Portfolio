import { useEffect, useState } from "react";
import "./Header.css";

const Header = (props) => {
  useEffect(() => {
    switchTheme();
  }, []);

  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  /* ===================  TOGGLE MENU =================== */
  const [Toggle, showMenu] = useState(false);
  const [themeIcon, setThemeIcon] = useState(<i className="uil uil-moon"></i>);

  const [activeNav, setActiveNav] = useState("#home");

  const [curTheme, setCurTheme] = useState("Bright");
  const switchTheme = () => {
    props.themeSwitch();
    if (curTheme === "Bright") {
      setCurTheme("Dark");
      setThemeIcon(
        <>
          <i className="uil uil-brightness"></i>
        </>
      );
    } else {
      setCurTheme("Bright");
      setThemeIcon(<i className="uil uil-moon"></i>);
    }
  };
  return (
    <header className="header">
      <nav  className={curTheme === "Bright" ? "nav container rounded-xl bg-zinc-100 p-1 " : "nav container rounded-xl"}>
        <a href="index.html" className="nav__logo">
          AT
        </a>
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-estate nav__icon"></i>Home
              </a>
            </li>
            <li className="nav__item">
              <a
                href="https://drive.google.com/file/d/1Agf-5AYB39Qk6ocF1VLNTV6Q9R9fa4E1/view?usp=sharing"
                target="_blank"
                className="nav__link"
              >
                <i className="uil uil-estate nav__icon"></i>Resume
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={
                  activeNav === "#about" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-user nav__icon"></i>About
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#portfolio"
                onClick={() => setActiveNav("#portfolio")}
                className={
                  activeNav === "#portfolio"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-scenery nav__icon"></i>Portfolio
              </a>
            </li>{" "}
            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setActiveNav("#skills")}
                className={
                  activeNav === "#skills"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-file nav__icon"></i>Skills
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={
                  activeNav === "#contact"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-message nav__icon"></i>Contact
              </a>
            </li>
            <li className="nav__item">
              <a
                onClick={switchTheme}
                href="#"
                className="nav__link nav__theme_switch"
              >
                {themeIcon}
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu((prevValue) => !prevValue)}
          ></i>
        </div>

        <div
          className="nav__toggle"
          onClick={() => showMenu((prevValue) => !prevValue)}
        >
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
