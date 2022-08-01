import React from 'react';


const ImgInfo=[{
  title:'라떼아트',
  desc:' 라떼아트 실습 시간이 충분하기 때문에 더욱 완성도 높은 아트를  만들 수 있습니다 더불어 (사)한국커피협회 바리스타 1급 자격증 준비까지 가능합니다',
  img:{img1:'img/sketch1.jpg',
  img2:'img/arrow.png'}
},{
  title:'라떼아트',
  desc:' 라떼아트 실습 시간이 충분하기 때문에 더욱 완성도 높은 아트를  만들 수 있습니다 더불어 (사)한국커피협회 바리스타 1급 자격증 준비까지 가능합니다',
  img:{img1:'img/sketch2.jpg',
  img2:'img/arrow.png'}
},{
  title:'라떼아트',
  desc:' 라떼아트 실습 시간이 충분하기 때문에 더욱 완성도 높은 아트를  만들 수 있습니다 더불어 (사)한국커피협회 바리스타 1급 자격증 준비까지 가능합니다',
  img:{img1:'img/sketch3.jpg',
  img2:'img/arrow.png'}
},{
  title:'라떼아트',
  desc:' 라떼아트 실습 시간이 충분하기 때문에 더욱 완성도 높은 아트를  만들 수 있습니다 더불어 (사)한국커피협회 바리스타 1급 자격증 준비까지 가능합니다',
  img:{img1:'img/sketch4.jpg',
  img2:'img/arrow.png'}
},{
  title:'라떼아트',
  desc:' 라떼아트 실습 시간이 충분하기 때문에 더욱 완성도 높은 아트를  만들 수 있습니다 더불어 (사)한국커피협회 바리스타 1급 자격증 준비까지 가능합니다',
  img:{img1:'img/sketch1.jpg',
  img2:'img/arrow.png'}
},{
  title:'라떼아트',
  desc:' 라떼아트 실습 시간이 충분하기 때문에 더욱 완성도 높은 아트를  만들 수 있습니다 더불어 (사)한국커피협회 바리스타 1급 자격증 준비까지 가능합니다',
  img:{img1:'img/sketch5.jpg',
  img2:'img/arrow.png'}
},{
  title:'라떼아트',
  desc:' 라떼아트 실습 시간이 충분하기 때문에 더욱 완성도 높은 아트를  만들 수 있습니다 더불어 (사)한국커피협회 바리스타 1급 자격증 준비까지 가능합니다',
  img:{img1:'img/sketch1.jpg',
  img2:'img/arrow.png'}
},{
  title:'라떼아트',
  desc:' 라떼아트 실습 시간이 충분하기 때문에 더욱 완성도 높은 아트를  만들 수 있습니다 더불어 (사)한국커피협회 바리스타 1급 자격증 준비까지 가능합니다',
  img:{img1:'img/sketch6.jpg',
  img2:'img/arrow.png'}
}
]

function ImgFunc({title,desc,img}){
  return(
    <article className="imageType__sketch">
        <figure className="sketch__header">
          <img className="img" src={ImgInfo[0].img.img1} alt="이미지1" />
        </figure>
        <div className="sketch__body">
          <h3 className="title">{title}</h3>
          <p className="desc">
          {desc}
           </p>
          <a href="/" className="btn">
            <img src={ImgInfo[0].img.img2} alt="화살표" />
          </a>
        </div>
    </article>

  )
}


function ImgCont() {
  return (
    <>
      <section id="imageType" className="image__wrap section">
        <h2 className="ir_so">현장 스케치</h2>
        <h2>현장스케치</h2>
        <p>
          다수의 카페 브랜드를 운영하고 있는 블랙탑은 실제 운영되고 있는
          매장에서 카페 운영에 필요한 전반적인 교육을 지원합니다
        </p>
        <div className="imageType__inner container">
        {ImgInfo.map((txt) => (
          <ImgFunc title={txt.title} desc={txt.desc} img={txt.img} key={txt.title}/>
        ))}
        </div>
      </section>
    </>
  );
}

export default ImgCont;
