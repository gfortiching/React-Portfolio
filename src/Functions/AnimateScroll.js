import AOS from "aos";
import { useEffect } from "react";

function AnimateScroll() {
    useEffect(() => {
      AOS.init({duration: 2000});
    }, []);
}

export default AnimateScroll;
