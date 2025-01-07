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
import JqueryLogo from "../image/stack-logo/jquery.png";
import JsLogo from "../image/stack-logo/js.png";
import TsLogo from "../image/stack-logo/ts.png";
import ReactLogo from "../image/stack-logo/react.png";
import ReactNativeLogo from "../image/stack-logo/react-native.png";
import ReduxLogo from "../image/stack-logo/react-redux.png";
import FigmaLogo from "../image/stack-logo/figma.png";
import GithubLogo from "../image/stack-logo/github.png";
import FirebaseLogo from "../image/stack-logo/firebase.png";
import AndroidLogo from "../image/stack-logo/android.png";

const MainIntro = () => {
  const { lineRef, titleRef, isInView } = useObserver();

  return (
    <main className="wrapper wrapper_profile">
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
                    2014.03 - 2021.02
                  </span>
                  영남대학교 물리학과 졸업
                </p>
                <p style={{ marginBottom: "0.5rem" }}>
                  <span className="detail_education-date">
                    2023.12 - 2024.07
                  </span>
                  SBS컴퓨터학원 퍼블리셔과정 & 웹기초과정 이수
                </p>
                <p>
                  <span className="detail_education-date">
                    2024.08 - 2024.12
                  </span>
                  슈퍼코딩 프론트엔드 부트캠프 이수
                </p>
              </div>
            </div>
            <div className="detail_skill">
              <h4 className="detail_title">Skill.</h4>
              <div className="detail_skill-box">
                <div className="detail_skill-imgs">
                  <img src={PsLogo} alt="ps-logo" />
                  <img src={AiLogo} alt="ai-logo" />
                  <img src={HtmlLogo} alt="html-logo" />
                  <img src={CssLogo} alt="css-logo" />
                  <img src={JqueryLogo} alt="jquery-logo" />
                  <img src={FigmaLogo} alt="figma-logo" />
                  <img src={GithubLogo} alt="github-logo" />
                </div>
                <div className="detail_skill-imgs">
                  <img src={JsLogo} alt="js-logo" />
                  <img src={TsLogo} alt="ts-logo" />
                  <img src={ReactLogo} alt="react-logo" />
                  <img src={ReduxLogo} alt="redux-logo" />
                  <img src={ReactNativeLogo} alt="reactnative-logo" />
                  <img src={AndroidLogo} alt="android-logo" />
                  <img src={FirebaseLogo} alt="firebase-logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="link-notion">
        <a
          href="https://polydactyl-chopper-e2c.notion.site/Hello-I-m-SuHyun-173ae95d4a5e80f1b41dc22c632a521d?pvs=4"
          target="_blank"
        >
          <img src={LinkIcon} alt="link-icon" className="icon" />
          노션 포트폴리오 바로가기
        </a>
      </div>
    </main>
  );
};

export default MainIntro;
