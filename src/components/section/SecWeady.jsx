import React from "react";
import "../../style/commonStyle.css";
import useObserver from "../../hook/useObserver";

import LinkIcon from "../../assets/link.svg";
import Logo from "../../image/title-logo/WEADY.png";
import MockUp01 from "../../image/mock-up/weady-mu-1.png";
import MockUp02 from "../../image/mock-up/weady-mu-2.png";
import ReactNativeLogo from "../../image/stack-logo/react-native.png";
import JSLogo from "../../image/stack-logo/js.png";
import ExpoLogo from "../../image/stack-logo/expo.png";
import AndroidLogo from "../../image/stack-logo/android.png";
import GitHubLogo from "../../image/stack-logo/github.png";
import DividingLine from "../custom/DividingLine";

const SecWeady = () => {
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
          work04
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
          <img src={MockUp01} alt="mockup-1" className="phone-img" />
          <img src={MockUp02} alt="mockup-2" className="phone-img" />
        </div>

        <DividingLine isInView={isInView} />

        <div className="contents_info">
          <img
            src={Logo}
            alt="weady-logo"
            className="info_logo info_logo-weady"
          />
          <div className="info_script">
            <li>개인 프로젝트</li>
            <li>2024.11.27 ~ 2024.12.07</li>
            <li>
              OpenWeatherAPI와 OpenAI를 활용하여 날씨를 기반으로 한 오늘의 코디
              추천어플을 만들었습니다.
            </li>
          </div>
          <div className="info_link">
            <h2 className="info_sub-title">작업 링크</h2>
            <div className="info_link-box">
              <a href="https://github.com/hunyaa10/Weady" target="_blank">
                <img src={LinkIcon} alt="link-icon" className="link-icon" />
                깃허브
              </a>
              <a
                href="https://polydactyl-chopper-e2c.notion.site/_WEADY-173ae95d4a5e812681cdf74206e7cb9b?pvs=4"
                target="_blank"
              >
                <img src={LinkIcon} alt="link-icon" className="link-icon" />
                노션 기획안
              </a>
            </div>
          </div>
          <div className="info_stack">
            <h2 className="info_sub-title">기술 스택</h2>
            <div className="info_stack-list">
              <img src={ReactNativeLogo} alt="react-native-logo" />
              <img src={JSLogo} alt="js-logo" />
              <img src={ExpoLogo} alt="expo-logo" />
              <img src={AndroidLogo} alt="android-logo" />
              <img src={GitHubLogo} alt="github-logo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecWeady;
