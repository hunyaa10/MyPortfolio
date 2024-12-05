import React from "react";
import "../../style/commonStyle.css";
import useObserver from "../../hook/useObserver";

import LinkIcon from "../../assets/link.svg";
import Logo from "../../image/title-logo/RUNTO.png";
import MockUpImg from "../../image/mock-up/runto-mu.png";

import ReactLogo from "../../image/stack-logo/react.png";
import JSLogo from "../../image/stack-logo/js.png";
import GitHubLogo from "../../image/stack-logo/github.png";
import FigmaLogo from "../../image/stack-logo/figma.png";
import AxiosLogo from "../../image/stack-logo/axios.png";
import DividingLine from "../custom/DividingLine";

const SecRunto = () => {
  const { lineRef, titleRef, isInView } = useObserver();

  return (
    <section className="wrapper">
      <div className="title-container">
        <div className="line_box-short">
          <span className="title_line-short" />
          <span
            ref={lineRef}
            className={`title_line-short-hide ${
              isInView ? "animated-line-left" : ""
            }`}
          />
        </div>
        <h1
          ref={titleRef}
          className={`title ${isInView ? "animated-title" : ""}`}
        >
          work01
        </h1>
        <div className="line_box-long">
          <span className="title_line-long" />
          <span
            ref={lineRef}
            className={`title_line-long-hide ${
              isInView ? "animated-line-right" : ""
            }`}
          />
        </div>
      </div>
      <div className="contents">
        <div className="contents_info">
          <img src={Logo} alt="runto-logo" className="info_logo" />
          <div className="info_script">
            <li>팀 프로젝트(팀장)</li>
            <li>2024.10.14 ~ 2024.11.15</li>
            <li>
              백앤드와 협업을 통해 런닝소모임을 개설하고 참여할 수 있는
              소통가능한 소셜사이트를 만들었습니다.
            </li>
          </div>
          <div className="info_link">
            <h2 className="info_sub-title">작업 링크</h2>
            <div className="info_link-box">
              <a href="#">
                <img src={LinkIcon} alt="link-icon" className="link-icon" />
                깃허브 링크
              </a>
              <a href="#">
                <img src={LinkIcon} alt="link-icon" className="link-icon" />
                노션 링크
              </a>
            </div>
          </div>
          <div className="info_stack">
            <h2 className="info_sub-title">기술 스택</h2>
            <div className="info_stack-list">
              <img src={ReactLogo} alt="react-logo" />
              <img src={JSLogo} alt="js-logo" />
              <img src={AxiosLogo} alt="axios-logo" />
              <img src={GitHubLogo} alt="github-logo" />
              <img src={FigmaLogo} alt="figma-logo" />
            </div>
          </div>
        </div>

        <DividingLine isInView={isInView} />

        <div className="contents_image">
          <img src={MockUpImg} alt="runto-mockup" />
        </div>
      </div>
    </section>
  );
};

export default SecRunto;