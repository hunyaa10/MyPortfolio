import React from "react";
import "../../style/topbtnStyle.css";
import TopArrow from "../../assets/topArrow.svg";

const Topbtn = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button className="top-btn" onClick={scrollToTop}>
      <img src={TopArrow} alt="top-arrow" />
      <p>프로필</p>
    </button>
  );
};

export default Topbtn;
