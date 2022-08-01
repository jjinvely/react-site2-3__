import React from 'react'




const bannerInfo = [
  {
    title: 'BLACK TOP',
    desc: '취업과 창업에 강한 BLACK TOP<br/>소수 정예 교육으로 개인 수준에 따른 맞춤형 교육을 진행합니다.',
    btn:'바로가기'
  }
]

function BannerCont() {
  return (
    <div> 
    <section id="bannerType" className="banner__wrap section gmarket">
    <h2 className="ir_so">배너 영역</h2>
    <div className="banner__inner">
      <h3 className="banner__title">{bannerInfo[0].title}</h3>
      <p className="banner__desc">
      {bannerInfo[0].desc}
        <a href="/">{bannerInfo[0].btn}</a>
      </p>
    </div>
  </section>
  </div>
  )
}

export default BannerCont