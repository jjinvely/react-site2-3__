import React from 'react'



const CardInfo = [{
    id:1,
    img:'img/tutor01.jpg'},
  {title:'원장 Sam',
  btn:'더 자세히보기'},
  {id:2,img:'img/tutor02.jpg'},{title:'부원장 Sella', btn:'더 자세히보기'},
  {id:3, img:'img/tutor03.jpg'},{title:'강사 James', btn:'더 자세히보기'}
]


function CardCont({id,img,title,btn}) {
  return (
    <div>
        <section id="cardType" className="card__wrap section nexon">
        <h2 className="ir_so">강사진 멤버</h2>
        <h2>블랙탑 강사진 멤버</h2>
        <p>
          국가 대표 최고의 강사진
          <br />
          우수한 교수진들의 높은 교육 완성도를 자랑합니다.
        </p>
        <div className="card__inner container">
          <article className="card">
            <figure className="card__header">
              <img className="img" src={CardInfo[0].img} alt="강사1" />
            </figure>
            <div className="card__body card_color01">
              <h3 className="title">{CardInfo[1].title}</h3>
              <a className="btn" href="/">
                <p>{CardInfo[1].btn}</p>
              </a>
            </div>
          </article>
          <article className="card">
            <figure className="card__header ">
              <img className="img" src={CardInfo[2].img} alt="강사2" />
            </figure>
            <div className="card__body card_color02">
              <h3 className="title">부원장 Sella</h3>
              <a className="btn" href="/">
              <p>{CardInfo[3].btn}</p>
              </a>
            
            </div>
          </article>
          <article className="card">
            <figure className="card__header">
              <img className="img" src={CardInfo[4].img} alt="강사3"/>
            </figure>
            <div className="card__body card_color03">
              <h3 className="title">{CardInfo[5].title}</h3>
              <a className="btn" href="/">
                <p>{CardInfo[5].btn}</p>
              </a>
            </div>
          </article>
        </div>
      </section>

    </div>
  )
}

export default CardCont