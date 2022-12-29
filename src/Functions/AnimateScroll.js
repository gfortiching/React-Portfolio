import AOS from "aos";
import { useEffect } from "react";

function AnimateScroll() {
    AOS.init();

    useEffect(() => {
      AOS.init({duration: 2000});
    }, []);
}

export default AnimateScroll;
