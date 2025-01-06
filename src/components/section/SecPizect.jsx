import React from "react";
import "../../style/commonStyle.css";
import useObserver from "../../hook/useObserver";

import LinkIcon from "../../assets/link.svg";
import Logo from "../../image/title-logo/PIZECT.png";
import MockUpImg from "../../image/mock-up/pizect-mu.png";

import ReactLogo from "../../image/stack-logo/react.png";
import JSLogo from "../../image/stack-logo/js.png";
import FireBaseLogo from "../../image/stack-logo/firebase.png";
import DndkitLogo from "../../image/stack-logo/dnd-kit.png";
import GitHubLogo from "../../image/stack-logo/github.png";
import DividingLine from "../custom/DividingLine";

const SecPizect = () => {
  const { lineRef, titleRef, isInView } = useObserver();

  return (
    <section className="wrapper">
      <div className="title-container">
        <div className="line_box-long">
          <span className="title_line-long" />
          <span
            ref={lineRef}
            className={`title_line-long-hide ${
              isInView ? "animated-line-left" : ""
            }`}
          />
        </div>
        <h1
          ref={titleRef}
          className={`title ${isInView ? "animated-title" : ""}`}
        >
          work02
        </h1>
        <div className="line_box-short">
          <span className="title_line-short" />
          <span
            ref={lineRef}
            className={`title_line-short-hide ${
              isInView ? "animated-line-right" : ""
            }`}
          />
        </div>
      </div>
      <div className="contents">
        <div className="contents_image">
          <img src={MockUpImg} alt="runto-mockup" />
        </div>

        <DividingLine isInView={isInView} />

        <div className="contents_info">
          <img src={Logo} alt="pizect-logo" className="info_logo" />
          <div className="info_script">
            <li>개인 프로젝트</li>
            <li>2024.10.23 ~ 2024.11.10</li>
            <li>
              Firebase를 사용하여 데이터를 관리하고, dnd-kit를 활용해 목록
              순서를 조정하는 일정 및 업무 공유 사이트를 만들었습니다.
            </li>
          </div>
          <div className="info_link">
            <h2 className="info_sub-title">작업 링크</h2>
            <div className="info_link-box">
              <a href="https://github.com/hunyaa10/pizect" target="_blank">
                <img src={LinkIcon} alt="link-icon" className="link-icon" />
                깃허브
              </a>
              <a
                href="https://polydactyl-chopper-e2c.notion.site/_Pizect-173ae95d4a5e819caa5bf6ccf755d9ab?pvs=4"
                target="_blank"
              >
                <img src={LinkIcon} alt="link-icon" className="link-icon" />
                노션 기획안
              </a>
              <a href="https://pizect.vercel.app/" target="_blank">
                <img src={LinkIcon} alt="link-icon" className="link-icon" />
                배포 사이트
              </a>
            </div>
          </div>
          <div className="info_stack">
            <h2 className="info_sub-title">기술 스택</h2>
            <div className="info_stack-list">
              <img src={ReactLogo} alt="react-logo" />
              <img src={JSLogo} alt="js-logo" />
              <img src={FireBaseLogo} alt="firebase-logo" />
              <img src={DndkitLogo} alt="dndkit-logo" />
              <img src={GitHubLogo} alt="github-logo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecPizect;
