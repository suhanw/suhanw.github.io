import { useState, useEffect } from "react";

export const isTouchDevice = () => {
  return (
    typeof window !== "undefined" &&
    ("ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0)
  );
};

export const useShowElementOnUpScroll = ({ showOnPageLoad } = {}) => {
  const [showElement, setShowElement] = useState(showOnPageLoad);
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
        setShowElement(isUpScroll || closeToTop);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return {
    showElement,
  };
};
