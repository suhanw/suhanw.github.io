import { useEffect, useState } from "react";
import style from "./style";
import cn from "classnames";

function BottomMenu({ children }) {
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    let lastScrollTop = window.scrollY || document.documentElement.scrollTop;
    const handleScroll = () => {
      const currentScrollTop =
        window.scrollY || document.documentElement.scrollTop;

      const isUpScroll = currentScrollTop < lastScrollTop;
      const scrollDistance = Math.abs(currentScrollTop - lastScrollTop);
      const closeToTop = currentScrollTop < 20;

      lastScrollTop = currentScrollTop;

      if (scrollDistance > 15) {
        setShowMenu(isUpScroll || closeToTop);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn({
        [style.bottomMenu]: true,
        [style.showMenu]: showMenu,
      })}
    >
      {children}
    </nav>
  );
}

export default BottomMenu;
