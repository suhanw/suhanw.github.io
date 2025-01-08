import cn from "classnames";
import style from "./style";
import { useShowElementOnUpScroll } from "utils";

function Hamburger({ toggleMenu }) {
  const { showElement } = useShowElementOnUpScroll({ showOnPageLoad: true });

  return (
    <button
      className={cn(style.hamburger, {
        [style.showHamburger]: showElement,
      })}
      onClick={toggleMenu}
    >
      <img src={"/images/hamburger.png"} />
    </button>
  );
}

export default Hamburger;
