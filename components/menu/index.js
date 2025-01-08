import { useState, useEffect } from "react";
import Link from "next/link";
import cn from "classnames";
import style from "./style";
import Hamburger from "components/hamburger";

const Menu = ({ topMenu }) => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (typeof document !== "undefined" && document.body?.style) {
      document.body.style.overflow = showMenu ? "hidden" : ""; // prevent scrolling when menu is expanded on mobile
    }
  }, [showMenu]);

  const toggleMenu = (e) => setShowMenu((prevShowMenu) => !prevShowMenu);

  const hideMenu = (e) => setShowMenu(false);

  return (
    <>
      <nav
        className={cn({
          [style.menu]: true,
          [style.showMenu]: showMenu,
          [style.topMenu]: topMenu,
        })}
      >
        <h2 className={style.name}>
          suhan <br />
          wijaya
        </h2>
        <ul className={style.menuItems}>
          <li className={style.menuItem}>
            <Link href="/#intro">
              <a onClick={hideMenu}>INTRO</a>
            </Link>
          </li>
          <li className={style.menuItem}>
            <Link href="/#about">
              <a onClick={hideMenu}>ABOUT</a>
            </Link>
          </li>
          <li className={style.menuItem}>
            <Link href="/#blog">
              <a onClick={hideMenu}>BLOG</a>
            </Link>
          </li>
          <li className={style.menuItem}>
            <Link href="/#projects">
              <a onClick={hideMenu}>PROJECTS</a>
            </Link>
          </li>
          <li className={style.menuItem}>
            <Link href="/#contact">
              <a onClick={hideMenu}>CONTACT</a>
            </Link>
          </li>
          <li className={style.menuItem}>
            <Link href="/#toolbox">
              <a onClick={hideMenu}>TOOLBOX</a>
            </Link>
          </li>
        </ul>
        <a
          href={"mailto:suhanw@gmail.com"}
          target={"_blank"}
          className={style.email}
        >
          suhanw@gmail.com
        </a>
        <div className={style.social}>
          <a
            href={"https://www.linkedin.com/comm/in/suhanwijaya/"}
            target={"_blank"}
          >
            <img
              src={"/images/linked-in.png"}
              alt={`Suhan's LinkedIn profile`}
            />
          </a>
          <a href={"https://x.com/suhanw"} target={"_blank"}>
            <img
              src={"/images/twitter-x.png"}
              alt={`Suhan's Twitter profile`}
            />
          </a>
          <a href={"https://github.com/suhanw"} target={"_blank"}>
            <img src={"/images/github.png"} alt={`Suhan's GitHub profile`} />
          </a>
        </div>
        <ul className={style.topMenuItems}>
          <li className={style.menuItem}>
            <Link href="/#blog">
              <a>BACK TO HOME</a>
            </Link>
          </li>
        </ul>
      </nav>
      <Hamburger toggleMenu={toggleMenu} />
    </>
  );
};

export default Menu;
