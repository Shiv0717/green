import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Lenis from "@studio-freight/lenis";

const ScrollToTop = ({ lenis }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true }); // scroll to top on route change
    }
  }, [pathname, lenis]);

  return null;
};

export default ScrollToTop;
