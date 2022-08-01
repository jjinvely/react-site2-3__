import React from 'react'

// const sliderInfo = [
//   {text:'BLACK TOP',
// desc:'커피의 나라를 기록하는 블랙탑<br />세계 각지에서 체험한 다양한 기록으로<br />한 차원 높은 수준의 교육을 만듭니다.',
// more:'더알아보기',
// btn:{
//   btn1:'자세히 보기',
//   btn2:'사이트 보기'
// }}]





function SliderCont({sliderInfo}) {
  return (
    <div>
        <section id="sliderType" className="slider__wrap nexon">
        <h2 className="ir_so">슬라이드 영역</h2>
        <div className="slider__inner">
          <div className="slider">
            <div className="slider__img">
              <div className="desc">
                <h3>{sliderInfo[0].text}</h3>
                <p>
                 {sliderInfo[0].desc}
                </p>
                <div className="btn">
                  <a href="/" className="white">
                   {sliderInfo[0].more}
                  </a>
                </div>
              </div> 
            </div>
            <div className="slider__arrow">
              <a href="/" className="left">
                <span className="ir_pm">  {sliderInfo[0].btn.btn1}</span>
              </a>
              <a href="/" className="right">
                <span className="ir_pm">{sliderInfo[0].btn.btn2}</span>
              </a>
            </div>
            <div className="slider__dot">
              <a href="/" className="dot active">
                <span className="ir_pm">1</span>
              </a>
              <a href="/" className="dot">
                <span className="ir_pm">2</span>
              </a>
              <a href="/" className="dot">
                <span className="ir_pm">3</span>
              </a>
              <a href="/" className="dot">
                <span className="ir_pm">4</span>
              </a>
              <a href="/" className="play">
                <span className="ir_pm">자동플레이</span>
              </a>
              <a href="/" className="stop">
                <span className="ir_pm">정지</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SliderCont