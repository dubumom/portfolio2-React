import React, { useEffect } from 'react';
import './App.css';

function Portfolio() {
  useEffect(() => {
    const charts = document.querySelectorAll('.chart');
    let executed = false;

    const handleScroll = () => {
      const sct = window.scrollY;
      charts.forEach((chart) => {
        if (sct >= chart.offsetTop - window.innerHeight / 2) {
          if (!executed) {
            startAnimation();
            executed = true;
          }
        }
      });
    };

    const startAnimation = () => {
      charts.forEach((chart) => {
        const h2 = chart.querySelector('h2');
        const circle = chart.querySelector('circle');
        const targetNum = parseInt(h2.getAttribute('data-num'), 10);
        let rate = { rate: 0 };

        const animate = () => {
          const now = Math.floor(rate.rate);
          const offset = 360 - (360 * now / 100);
          h2.textContent = now;
          circle.style.strokeDashoffset = offset;

          if (rate.rate < targetNum) {
            rate.rate += targetNum / 100;
            requestAnimationFrame(animate);
          }
        };

        animate();
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="portfolio">
      <div className="container">
        <h2 className="hidden">portfolio</h2>
        <aside className="profile-img">
          <div>
            <ul className="d-flex jcc aic">
              <li><a href="https://www.notion.so/b6b536f4720e4cefb4d171defd739e00" target="_blank" rel="noreferrer" aria-label="노션"><img src="./image/notion_icon.png" alt="노션" /></a></li>
              <li><a href="https://github.com/dubumom/portfolio2" target="_blank" rel="noreferrer" aria-label="깃허브"><img src="./image/git_icon.png" alt="깃허브" /></a></li>
              <li><a href="#"><img src="./image/slack_icon.png" alt="슬랙" /></a></li>
            </ul> 
          </div>
        </aside>
        <div className="portfolio-tit">
          <h2 className="tit-h1">안녕하세요<br/><em className="bnr-tit">웹 프론트엔드 개발자 <br /> <strong className="medium-blue">우예지</strong>입니다.</em></h2>
          <p>"최신 기술을 빠르게 습득하고 창의적인 해결책을 통해 사용자 경험을 극대화 하는 <br /> 웹 퍼블리셔 및 프론트엔드 개발자가 되겠습니다."
            <br/>
            <br/>
            git, notion, slack, figma를 능숙하게 사용하며, 구글 지도, 달력 API 뿐만 아니라 각종 라이브러리 사용에 능통합니다.
            <br/>  
            <br/>  
            저는 함께하는 즐거움과 소통의 중요성을 깊이 이해하고, 이를 통해 팀의 목표를 효과적으로 달성하는 인재입니다. <br/>원활한 소통을 바탕으로 신뢰를 쌓고, 협력을 통해 성장을 이루어 나가겠습니다.
          </p>
        </div>
        <a href="./image/resume.png" className="button" data-btn="이력서 바로가기" target="_blank" rel="noreferrer" aria-label="이력서"></a>
        <div className="charts">
          <div className="chart" data-title="HTML5" data-desc="웹표준, 웹접근성을 준수하여 작업하며
          새로운 태그를 바로적용할 수 있습니다.">
            <h2 data-num="90">0</h2>
            <svg>
              <circle cx="55" cy="55" r="50"></circle>
            </svg>
          </div>
          <div className="chart" data-title="CSS3" data-desc="크로스 브라우징에 능숙하며, bootstrap, tailwind도 사용할 수 있습니다.">
            <h2 data-num="90">0</h2>
            <svg>
              <circle cx="55" cy="55" r="50"></circle>
            </svg>
          </div>
          <div className="chart" data-title="javascript" data-desc="바닐라 자바스크립트로 구현한 웹페이지 다수 개발하였으며, 다양한 라이브러리 사용에 능통합니다."> 
            <h2 data-num="65">0</h2>
            <svg>
              <circle cx="55" cy="55" r="50"></circle>
            </svg>
          </div>
          <div className="chart" data-title="jQuery" data-desc="제이쿼리로 구현한 웹페이지 다수 개발하였으며, 다양한 라이브러리 사용에 능통합니다.">
            <h2 data-num="70">0</h2>
            <svg>
              <circle cx="55" cy="55" r="50"></circle>
            </svg>
          </div>
          <div className="chart" data-title="php" data-desc="php로 lms사이트를 개발하였고, Mysql과 연동할 수 있습니다.">
            <h2 data-num="60">0</h2>
            <svg>
              <circle cx="55" cy="55" r="50"></circle>
            </svg>
          </div>
          <div className="chart" data-title="Mysql" data-desc="Mysql데이터를 활용한 CRUD 가능합니다.">
            <h2 data-num="50">0</h2>
            <svg>
              <circle cx="55" cy="55" r="50"></circle>
            </svg>
          </div>
          <div className="chart" data-title="React" data-desc="react의 기본문법을 이해하며, CRUD가능합니다. 해당 페이지 또한 react로 개발하였습니다.">
            <h2 data-num="50">0</h2>
            <svg>
              <circle cx="55" cy="55" r="50"></circle>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
