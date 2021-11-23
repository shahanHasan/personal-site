import React from "react";
import { Link } from "react-router-dom";

import ContactIcons from "../Contact/ContactIcons";

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Md. Mohidul Hasan</h2>
        <p>
          <a href="mailto:shahan.hasan101294@gmail.com">
            shahan.hasan101294@gmail.com
          </a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Mohidul. I like building things. I am a{" "}
        <a href="https://www.herts.ac.uk/courses/undergraduate/computer-science">
          University of Hertfordshire{" "}
        </a>
        graduate and Herts Alumni.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes("/resume") ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Md Mohidul Hasan <Link to="/">shahanHasan.github.io</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
