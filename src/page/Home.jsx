import React, { useEffect, useRef } from "react";
import MainIntro from "../components/MainIntro";
import SecRunto from "../components/section/SecRunto";
import SecPizect from "../components/section/SecPizect";
import SecNetflix from "../components/section/SecNetflix";
import SecWeady from "../components/section/SecWeady";
import Topbtn from "../components/custom/Topbtn";

const Home = () => {
  const isScrolling = useRef(false);
  const scrollTimeout = useRef(null);

  // 마우스휠이벤트 >> 한화면씩 이동
  const handleMouseWheel = (e) => {
    e.preventDefault();

    if (isScrolling.current) return;

    const delta = e.deltaY;
    if (Math.abs(delta) < 50) return; // 마우스 휠 민감도 조정
    const scrollDirect = delta > 0 ? "down" : "up";

    const sections = document.querySelectorAll("#scroll");

    const currentIdx = Array.from(sections).findIndex((section) => {
      const rect = section.getBoundingClientRect();
      return rect.top >= 0 && rect.top < window.innerHeight;
    });

    let targetIdx = currentIdx;

    if (scrollDirect === "down" && currentIdx < sections.length - 1) {
      targetIdx = currentIdx + 1;
    } else if (scrollDirect === "up" && currentIdx > 0) {
      targetIdx = currentIdx - 1;
    }

    sections[targetIdx].scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    isScrolling.current = true;
    clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => {
      isScrolling.current = false;
    }, 800);
  };

  useEffect(() => {
    window.addEventListener("wheel", handleMouseWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleMouseWheel);
    };
  }, []);

  return (
    <div className="all_wrapper">
      <div id="scroll">
        <MainIntro />
      </div>
      <div id="scroll">
        <SecRunto />
      </div>
      <div id="scroll">
        <SecPizect />
      </div>
      <div id="scroll">
        <SecNetflix />
      </div>
      <div id="scroll">
        <SecWeady />
      </div>
      <Topbtn />
    </div>
  );
};

export default Home;
