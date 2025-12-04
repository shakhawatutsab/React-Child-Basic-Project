import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

const Nav = () => {
  const address = useLocation();

  const allLink = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Products",
      path: "/products",
    },
  ];

  return (
    <>
      <Helmet>
        {address.pathname === "/" ? <title>Home</title> : null}
        {address.pathname === "/about" ? <title>About</title> : null}
        {address.pathname === "/products" ? <title>Products</title> : null}
      </Helmet>
      <ul className="nav navbar-nav">
        {allLink.map(function (link, index) {
          return (
            <li
              key={index}
              className={address.pathname === link.path ? "active" : ""}
            >
              <Link to={link.path}>{link.name}</Link>
            </li>
          );
        })}
        {/* <li className="dropdown">
          <a
            href="#"
            className="dropdown-toggle"
            data-toggle="dropdown"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Services <span className="caret"></span>
          </a>
          <ul className="dropdown-menu" aria-labelledby="about-us">
            <li>
              <a href="#">Engage</a>
            </li>
            <li>
              <a href="#">Pontificate</a>
            </li>
            <li>
              <a href="#">Synergize</a>
            </li>
          </ul>
        </li> */}
      </ul>
    </>
  );
};

export default Nav;
