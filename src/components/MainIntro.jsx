import React from "react";
import "../style/introStyle.css";
import "../style/commonStyle.css";
import useObserver from "../hook/useObserver";

import LinkIcon from "../assets/link.svg";
import ProfileImg from "../image/profile.jpg";
import AiLogo from "../image/stack-logo/ai.png";
import PsLogo from "../image/stack-logo/ps.png";
import HtmlLogo from "../image/stack-logo/html.png";
import CssLogo from "../image/stack-logo/css.png";
import JsLogo from "../image/stack-logo/js.png";
import TsLogo from "../image/stack-logo/ts.png";
import ReactLogo from "../image/stack-logo/react.png";
import FigmaLogo from "../image/stack-logo/figma.png";
import GithubLogo from "../image/stack-logo/github.png";

const MainIntro = () => {
  const { lineRef, titleRef, isInView } = useObserver();

  return (
    <main className="wrapper">
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
          profile
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
      <div className="intro_info">
        <div className="info_profile">
          <img src={ProfileImg} alt="프로필이미지" />
        </div>
        <div className="info_text">
          <p className="info_greeting-text">
            안녕하세요.
            <br />
            기본에 충실하고, 배움에 두려움이 없는 신입개발자 <span>하수현</span>
            입니다.
          </p>
          <div className="info_detail-text">
            <div className="detail-text">
              <div className="detail_profile">
                <h4 className="detail_title">Profile.</h4>
                <p>하수현_HaSuHyun, 29세</p>
                <p>010-5602-0979</p>
                <p>hunyaa10@gmail.com</p>
              </div>
              <div className="detail_license">
                <h4 className="detail_title">License.</h4>
                <p>웹디자인기능사</p>
                <p>컴퓨터그래픽스기능사</p>
                <p>컴퓨터활용능력1급</p>
              </div>
              <div className="detail_education">
                <h4 className="detail_title">Education.</h4>
                <p style={{ marginBottom: "0.5rem" }}>
                  <span className="detail_education-date">
                    2023.11 - 2024.08
                  </span>
                  SBS컴퓨터학원 퍼블리셔과정 & 웹기초과정 이수
                </p>
                <p>
                  <span className="detail_education-date">
                    2024.08 - 2024.11
                  </span>
                  슈퍼코딩 프론트엔드 부트캠프 이수
                </p>
              </div>
            </div>
            <div className="detail_skill">
              <h4 className="detail_title">Skill.</h4>
              <div className="detail_skill-images">
                <img src={ReactLogo} alt="react-logo" />
                <img src={JsLogo} alt="js-logo" />
                <img src={TsLogo} alt="ts-logo" />
                <img src={HtmlLogo} alt="html-logo" />
                <img src={CssLogo} alt="css-logo" />
                <img src={GithubLogo} alt="github-logo" />
                <img src={FigmaLogo} alt="figma-logo" />
                <img src={PsLogo} alt="ps-logo" />
                <img src={AiLogo} alt="ai-logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="link-notion">
        <a href="#">
          <img src={LinkIcon} alt="link-icon" className="icon" />
          전체 노션페이지 바로가기
        </a>
      </div>
    </main>
  );
};

export default MainIntro;