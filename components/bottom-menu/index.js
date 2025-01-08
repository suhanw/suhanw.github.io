import { useEffect, useState } from "react";
import cn from "classnames";
import { useShowElementOnUpScroll } from "utils";

import style from "./style";

function BottomMenu({ children, mobileOnly = true }) {
  const { showElement } = useShowElementOnUpScroll();

  return (
    <nav
      className={cn({
        [style.bottomMenu]: true,
        [style.showMenu]: showElement,
        [style.mobileOnly]: mobileOnly,
      })}
    >
      {children}
    </nav>
  );
}

export default BottomMenu;
