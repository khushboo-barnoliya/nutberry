// import Link from "next/link";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="navigation overflow-hidden">
      <input
        type="checkbox"
        name=""
        id="nav-toggle"
        className="navigation__checkbox"
      />
      <label
        htmlFor="nav-toggle"
        className="navigation__button fixed md:top-24 md:right-24 top-10 right-[10%]"
      >
        <span className="navigation__icon">&nbsp;</span>
      </label>
      <div className="navigation__background fixed md:top-24 md:right-24 top-10 right-[10%]">
        &nbsp;
      </div>
      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a href="/" className="navigation__link sm:text-4xl text-2xl">
              Home page
            </a>
          </li>
          <li className="navigation__item">
            <a href="/about" className="navigation__link sm:text-4xl text-2xl">
              About Nutberry
            </a>
          </li>
          <li className="navigation__item">
            <a href="/products" className="navigation__link sm:text-4xl text-2xl">
              Our Products
            </a>
          </li>
          <li className="navigation__item">
            <a
              href="/procedure"
              className="navigation__link sm:text-4xl text-2xl"
            >
              Our Procedure
            </a>
          </li>
          <li className="navigation__item">
            <a
              href="/contact"
              className="navigation__link sm:text-4xl text-2xl"
            >
              Contact Us
            </a>
          </li>
          <li className="navigation__item">
            <a
              href="/signin"
              className="navigation__link sm:text-4xl text-2xl"
            >
              Sign In
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
