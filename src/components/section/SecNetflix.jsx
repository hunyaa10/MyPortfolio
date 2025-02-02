import React from "react";
import "../../style/commonStyle.css";
import useObserver from "../../hook/useObserver";

import LinkIcon from "../../assets/link.svg";
import Logo from "../../image/title-logo/NETFLIX.png";
import MockUpImg from "../../image/mock-up/netflix-mu.png";

import ReactLogo from "../../image/stack-logo/react.png";
import TSLogo from "../../image/stack-logo/ts.png";
import FMLogo from "../../image/stack-logo/framer-motion.png";
import GitHubLogo from "../../image/stack-logo/github.png";
import DividingLine from "../custom/DividingLine";

const SecNetflix = () => {
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
          work03
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
          <img src={Logo} alt="netflix-logo" className="info_logo" />
          <div className="info_script">
            <li className="script-title">개인 프로젝트</li>
            <li className="script-date">2024.09.29 ~ 2024.10.13</li>
            <li className="script-des">
              TMDB의 오픈 API와 TypeScript를 활용하여 다양한 콘텐츠 목록을
              표시하고, 넷플릭스 사이트의 기능과 애니메이션 효과를 구현한
              사이트를 만들었습니다.
            </li>
          </div>
          <div className="info_works">
            <h2 className="info_sub-title">주요 기능</h2>
            <div className="info_works-box">
              <li>로컬스토리지를 통한 로그인</li>
              <li>키워드 검색</li>
              <li>슬라이드 애니메이션</li>
              <li>사용자가 선택한 컨텐츠 분리</li>
            </div>
          </div>
          <div className="info_link">
            <h2 className="info_sub-title">작업 링크</h2>
            <div className="info_link-box">
              <a
                href="https://github.com/hunyaa10/NetflixClone"
                target="_blank"
              >
                <img src={LinkIcon} alt="link-icon" className="link-icon" />
                깃허브
              </a>
              <a
                href="https://polydactyl-chopper-e2c.notion.site/_Netflex-173ae95d4a5e812ead16c6c26b47f710?pvs=4"
                target="_blank"
              >
                <img src={LinkIcon} alt="link-icon" className="link-icon" />
                노션 기획안
              </a>
              <a
                href="https://netflix-clone-black-eta.vercel.app/"
                target="_blank"
              >
                <img src={LinkIcon} alt="link-icon" className="link-icon" />
                배포 사이트
              </a>
            </div>
          </div>
          <div className="info_stack">
            <h2 className="info_sub-title">기술 스택</h2>
            <div className="info_stack-list">
              <img src={ReactLogo} alt="react-logo" />
              <img src={TSLogo} alt="ts-logo" />
              <img src={FMLogo} alt="framer-motion-logo" />
              <img src={GitHubLogo} alt="github-logo" />
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

export default SecNetflix;
