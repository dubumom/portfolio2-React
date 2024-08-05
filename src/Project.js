import React, { useEffect, useRef } from 'react';
import './App.css';

function Project() {
  const sliderRef = useRef(null);
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    const prevButton = prevButtonRef.current;
    const nextButton = nextButtonRef.current;

    if (!slider || !prevButton || !nextButton) {
      console.error('Slider or navigation buttons not found');
      return;
    }

    console.log('Slider and navigation buttons found');

    const handleNextClick = () => {
      const items = slider.querySelectorAll('.item');
      if (items.length > 0) {
        slider.appendChild(items[0]);
        console.log('Next button clicked');
      }
    };

    const handlePrevClick = () => {
      const items = slider.querySelectorAll('.item');
      if (items.length > 0) {
        slider.insertBefore(items[items.length - 1], items[0]);
        console.log('Prev button clicked');
      }
    };

    nextButton.addEventListener('click', handleNextClick);
    prevButton.addEventListener('click', handlePrevClick);

    return () => {
      nextButton.removeEventListener('click', handleNextClick);
      prevButton.removeEventListener('click', handlePrevClick);
    };
  }, []);

  return (
    <section id="project">
      <h2 className="hidden">project</h2>
      <div>
        <ul className="slider" ref={sliderRef}>
          <li className="item">
            <figure>
              <img src="./image/projeact_item01.png" alt="르세라핌 페이지" />
              <figcaption>
                <h2 className="tit-h1">르세라핌 리뉴얼 페이지</h2>
                <p>개인 프로젝트(기획 ~ 구현)</p>
                <p>바닐라 자바스크립트로 페이지 구현하였고,<br/> 구글 달력 API를 연동하였습니다.</p>
                <a href="https://lesserafimpage.netlify.app/" className="button" data-btn="web site 바로가기" target="_blank" rel="noreferrer" aria-label="More lesserafim"></a>
              </figcaption>
            </figure>
          </li>
          <li className="item">
            <figure>
              <img src="./image/projeact_item02.png" alt="삼성sdi페이지"/>
              <figcaption>
                <h2 className="tit-h1">삼성SDI 리뉴얼 페이지</h2>
                <p>팀 프로젝트 : 메인 섹션(전체), 서브 페이지(비지니스), 팝업</p>
                <p>반응형 페이지로 제이쿼리로 구현하였습니다.</p>
                <a href="https://dubumom.github.io/SamsungSDI/" className="button" data-btn="site 바로가기" target="_blank" rel="noreferrer" aria-label="More samsungSDI"></a>
              </figcaption>
            </figure>
          </li>
          <li className="item">
            <figure>
              <img src="./image/projeact_item03.png" alt="lms 대쉬보드 페이지"/>
              <figcaption>
                <h2 className="tit-h1">ccc coding 관리자 페이지(LMS site)</h2>
                <p>팀 프로젝트 : 대쉬보드 메인(전체), 강의 관련 전체, 로그인 관련 전체, 팝업</p>
                <p>php, mysql, bootstrap으로 구현했습니다.</p>
                <a href="http://ccccoding.dothome.co.kr/ccccoding/admin/login.php" className="button" data-btn="site 바로가기" target="_blank" rel="noreferrer" aria-label="ccc coding"></a>
              </figcaption>
            </figure>
          </li>
          <li className="item">
            <figure>
              <img src="./image/projeact_item04.png" alt="lms 사용자 페이지"/>
              <figcaption>
                <h2 className="tit-h1">ccc coding 사용자 페이지(LMS site)</h2>
                <p>팀 프로젝트 : 메인 섹션(베너슬라이드, 강의 바로가기, 신규강의, 베스트 강의), 카테고리 관련 전체, 로그인 관련 전체, 팝업</p>
                <p>php, mysql, bootstrap으로 구현했습니다.</p>
                <a href="http://ccccoding.dothome.co.kr/ccccoding/" className="button" data-btn="site 바로가기" target="_blank" rel="noreferrer" aria-label="ccc coding user"></a>
              </figcaption>
            </figure>
          </li>
          <li className="item">
            <figure>
              <img src="./image/projeact_item05.png" alt="시장하시죠 페이지"/>
              <figcaption>
                <h2 className="tit-h1">시장하시죠 제작 페이지</h2>
                <p>개인 프로젝트(기획 ~ 구현)</p>
                <p>적응형 페이지로 제이쿼리로 구현했습니다.</p>
                <a href="https://dubumom.github.io/Are-you-Hungry/" className="button mr" data-btn="web site 바로가기"></a>
                <a href="https://dubumom.github.io/Are-you-Hungry/m_index.html" className="button" data-btn="mobile 바로가기" target="_blank" rel="noreferrer" aria-label="are you hungry"></a>
              </figcaption>
            </figure>
          </li>
          <li className="item">
            <figure>
              <img src="./image/projeact_item06.png" alt="판다월드 페이지"/>
              <figcaption>
                <h2 className="tit-h1">판다월드 제작 페이지</h2>
                <p>개인 프로젝트(기획 ~ 구현)</p>
                <p>퍼블리싱을 배우며 처음 제작한 페이지 입니다.</p>
                <a href="https://dubumom.github.io/panda_world/" className="button" data-btn="site 바로가기" target="_blank" rel="noreferrer" aria-label="panda world"></a>
              </figcaption>
            </figure>
          </li>
          <li className="item">
            <figure>
              <img src="./image/projeact_item07.png" alt="오키친 페이지"/>
              <figcaption>
                <h2 className="tit-h1">오키친 리뉴얼 페이지</h2>
                <p>개인 프로젝트(기획 ~ 구현)</p>
                <p>반응형 페이지로 제이쿼리로 구현했습니다.</p>
                <a href="https://dubumom.github.io/Okichin/" className="button" data-btn="site 바로가기" target="_blank" rel="noreferrer" aria-label="okichin"></a>
              </figcaption>
            </figure>
          </li>          
        </ul>
        <nav>
          <ion-icon className="btn prev" name="chevron-back-circle-outline" ref={prevButtonRef}></ion-icon>
          <ion-icon className="btn next" name="chevron-forward-circle-outline" ref={nextButtonRef}></ion-icon>
        </nav>
      </div>
    </section>
  );
}

export default Project;