import React from 'react'


const TextInfo=[
  {
    title1:'Baristar',
    title2:'바리스타<br/>전문과정',
    desc:'바리스타로 취업하기 위한 전문 과정입니다.<br />여러분들도 도전해보세요!'
  }
]

const TextInfor =[
  {text:'바리스타 1급 자격증과정',
desc:'이론 및 실기과정을 통해 바리스타1급자격증 취득할 수 있으며 에스프레소 심화 교과와 라떼아트 교과를 통해 중급 바리스타로서의 숙련도를 향상하는 과정'
},
{text:'바리스타 2급 자격증과정',
desc:'  에스프레소 머신, 그라인더를 사용하여 에스프레소, 카푸치노를 만들는 방법을 습득하여 바리스타 2급자격증 취득하는 과정'
},
{text:'커피브루잉과정(핸드드립)',
desc:' 각 추출도구를 사용하여 커피를 추출하는 과정 (사)한국커피협회 홈카페 마스터,커피지도사 자격증 수료하는 과정'},
{text:'커피로스팅실무과정(핸드드립+티마스터)',
desc:'커피의 향, 맛, 바디의 감각적인 영향들을 통해 일정한 기준에 따라 커피의 질과 수준을 평가하며 커피품질을 판별하고 관리하는 능력을 함양할 수 있다.'}

]

function TextFunc(text,desc){
  return(
    <>
  <h3>{text}</h3>
  <p>{desc}</p>
  </>
  )
}


function TextCont() {
  return (
    <div>  <section id="textType" className="text__wrap section nexon">
    <div className="textType__wrap">
      <h2 className="ir_so"> 교육과정 </h2>
      <div className="textType__text">
        <span>{TextInfo[0].title1}</span>
        <h2>
        {TextInfo[0].title2}
        </h2>
        <p>
        {TextInfo[0].desc}
        </p>
      </div>

      <div className="textType__inner container">
        <div className="text">
          <h3>바리스타 1급 자격증과정</h3>
          <p>
            이론 및 실기과정을 통해 바리스타1급자격증 취득할 수 있으며
            에스프레소 심화 교과와 라떼아트 교과를 통해 중급 바리스타로서의
            숙련도를 향상하는 과정
          </p>
        </div>
        <div className="text">
          <h3>바리스타 2급 자격증과정</h3>
          <p>
            에스프레소 머신, 그라인더를 사용하여 에스프레소, 카푸치노를
            만들는 방법을 습득하여 바리스타 2급자격증 취득하는 과정
          </p>
        </div>
        <div className="text">
          <h3>커피브루잉과정(핸드드립)</h3>
          <p>
            각 추출도구를 사용하여 커피를 추출하는 과정 (사)한국커피협회
            홈카페 마스터,커피지도사 자격증 수료하는 과정
          </p>
        </div>
        <div className="text">
          <h3>커피로스팅실무과정(핸드드립+티마스터)</h3>
          <p>
            커피의 향, 맛, 바디의 감각적인 영향들을 통해 일정한 기준에 따라
            커피의 질과 수준을 평가하며 커피품질을 판별하고 관리하는 능력을
            함양할 수 있다.
          </p>
        </div>
      </div>
    </div>
  </section></div>
  )
}

export default TextCont