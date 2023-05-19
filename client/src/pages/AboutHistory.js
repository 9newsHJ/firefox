import React from "react";
import "../css/AboutHistory.css";
import team_member from "../images/history/가이.png";
import team_member1 from "../images/history/아따맘마.jpg";
import team_member2 from "../images/history/죠죠.png";
import team_member3 from "../images/history/고양이.jpg";
import team_member4 from "../images/history/가영.png";
import team_member5 from "../images/history/포비.jpg";
import team_member6 from "../images/history/병아리.png";

function AboutHistory() {
  return (
    <div className="abouthistory">
      <h2>
        파이어폭스의 <br />
        영광의 순간에 함께해주세요!
      </h2>

      <div className="team_img1">
        <div>
          <img src={team_member} className="team_imgs" alt="" />
          <p>
            이름: 팀장 윤여정
            <br />
            MBTI: ESFJ
            <br />
            담당: 프로젝트 총괄/백엔드
            <br />
            <br />
            한마디: 거 죽기 딱 좋은 날씨구만
          </p>
        </div>
        <div>
          <img src={team_member1} className="team_imgs" alt="" />
          <p>
            이름: 김예지
            <br />
            MBTI: ESFP
            <br />
            담당: SHOP / 장바구니
            <br />
            <br />
            한마디: 이불 좋아
          </p>
        </div>
        <div>
          <img src={team_member2} className="team_imgs" alt="" />
          <p>
            이름: 백인우
            <br />
            MBTI: ISTP
            <br />
            담당: 게시판
            <br />
            <br />
            한마디: 감기 조심하세요
          </p>
        </div>
        <div>
          <img src={team_member3} className="team_imgs" alt="" />
          <p>
            이름: 김채연
            <br />
            MBTI: INTP
            <br />
            담당: 일정관리 / 선수등록
            <br />
            <br />
            한마디 : 내가 너 좋아하면 안되냐?
          </p>
        </div>
      </div>

      <div>
        <div div className="team_img2">
          <div>
            <img src={team_member4} className="team_imgs" alt="" />
            <p>
              이름: 이현정
              <br />
              MBTI: ENTP
              <br />
              담당: 모든 페이지 CSS
              <br />
              <br />
              한마디: 도비는 자유로운 집요정
            </p>
          </div>
          <div>
            <img src={team_member5} className="team_imgs" alt="" />
            <p>
              이름: 나제영
              <br />
              MBTI: INFP
              <br />
              담당: 결제
              <br />
              <br />
              한마디: 4885 너지.
            </p>
          </div>
          <div>
            <img src={team_member6} className="team_imgs" alt="" />
            <p>
              이름: 이황운
              <br />
              MBTI: INFP
              <br />
              담당: 리액트 상태관리
              <br />
              <br />
              한마디: 나는 더 나은 미래를 위해 싸운다
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutHistory;
