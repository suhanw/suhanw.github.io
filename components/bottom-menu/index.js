import { useEffect, useState } from "react";
import style from "./style";
import cn from "classnames";

function BottomMenu() {
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
      <div className={style.author}>
        <a href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=suhanwijaya">
          <img src="https://github.com/suhanw.png?size=200" />
        </a>
        <span>
          Liked what you've read? <br />
          <a href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=suhanwijaya">
            Follow me on LinkedIn!
          </a>
        </span>
      </div>
    </nav>
  );
}

export default BottomMenu;
