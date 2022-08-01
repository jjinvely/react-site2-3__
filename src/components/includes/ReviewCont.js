import React from 'react'


const ReviewTitle =[
  {
    title: {a:'김여진', b:'블랙탑1기'},
    desc: '기초 바리스타 과정을 학습하고 카페 운영에 필요한 전반적인 교육을 지원받았습니다. 감사합니다. 기초 바리스타 과정을 학습하고 카페 운영에 필요한 전반적인 교육을 지원받았습니다. 감사합니다. 기초 바리스타 과정을 학습하고 카페 운영에 필요한 전반적인 교육을 지원받았습니다. 감사합니다.',
    image: 'img/smile1.png',
    star:'img/star.png'
  },
  {
    title: {a:'김여진', b:'블랙탑1기'},
    desc: '기초 바리스타 과정을 학습하고 카페 운영에 필요한 전반적인 교육을 지원받았습니다. 감사합니다. 기초 바리스타 과정을 학습하고 카페 운영에 필요한 전반적인 교육을 지원받았습니다. 감사합니다. 기초 바리스타 과정을 학습하고 카페 운영에 필요한 전반적인 교육을 지원받았습니다. 감사합니다.',
    image: 'img/smile2.png',

  },
  {
    title: {a:'김여진', b:'블랙탑1기'},
    desc: '기초 바리스타 과정을 학습하고 카페 운영에 필요한 전반적인 교육을 지원받았습니다. 감사합니다. 기초 바리스타 과정을 학습하고 카페 운영에 필요한 전반적인 교육을 지원받았습니다. 감사합니다. 기초 바리스타 과정을 학습하고 카페 운영에 필요한 전반적인 교육을 지원받았습니다. 감사합니다.',
    image: 'img/smile3.png',

  }
];

function ReviewCont() {
  return (
    <>
    <div> <section id="reviewType">
    <h2 className="ir_so"></h2>
    <h2>수업 후기</h2>
    <p>블랙탑 바리스타를 소개합니다.</p>
    <div className="review__inner container">
      <div className="review__box">
        <div className="desc">
          {ReviewTitle[0].desc}
        </div>
        <div className="title">
          <div className="title__inner">
            <span>
              <img src={ReviewTitle[0].image} alt="스마일" />
            </span>
            <h3>{ReviewTitle[0].title.a}</h3>
            <span>{ReviewTitle[0].title.b}</span>
          </div>
          <div className="star">
            <img src={ReviewTitle[0].star} alt="별" />
          </div>
        </div>
        <a href="/" className="btn">
          자세히보기
        </a>
      </div>
      <div className="review__box">
        <div className="desc">
        {ReviewTitle[1].desc}
        </div>
        <div className="title">
          <div className="title__inner">
            <span>
              <img src={ReviewTitle[1].image} alt="스마일" />
            </span>
            <h3>{ReviewTitle[1].title.a}</h3>
            <span>{ReviewTitle[1].title.b}</span>
          </div>
          <div className="star">
            <img src={ReviewTitle[0].star} alt="별" />
          </div>
        </div>
        <a href="/" className="btn">
          자세히보기
        </a>
      </div>
      <div className="review__box">
        <div className="desc">
        {ReviewTitle[2].desc}
        </div>
        <div className="title">
          <div className="title__inner">
            <span>
              <img src={ReviewTitle[2].image} alt="스마일" />
            </span>
            <h3>{ReviewTitle[2].title.a}</h3>
            <span>{ReviewTitle[2].title.b}</span>
          </div>
          <div className="star">
            <img src={ReviewTitle[0].star} alt="별" />
          </div>
        </div>
        <a href="/" className="btn">
          자세히보기
        </a>
      </div>
    </div>
    </section></div>
    </>
  )
}

export default ReviewCont