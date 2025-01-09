import cn from "classnames";
import { useShowElementOnUpScroll } from "utils";

import style from "./style";

function BottomPill({ children }) {
  const { showElement } = useShowElementOnUpScroll();

  return (
    <nav
      className={cn(style.bottomPill, {
        [style.show]: showElement,
      })}
    >
      {children}
    </nav>
  );
}

export default BottomPill;
