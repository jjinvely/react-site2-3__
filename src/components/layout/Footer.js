import React from 'react'


const menuList =[
    {text:"아카데미소개",
    menu1:"아카데미소개",
    menu2:"오시는길",
    },
    {text:"차별화",
    menu1:"블랙탑의 차별화",
    menu2:"최고의 강사진",
    menu3:'최상의 교육시설'
    },
    {text:"강의안내",
    menu1:"개강 일정",
    menu2:"국비과정(NCS)",
    menu3:"일반과정 개강",
  },
    {text:"컨설팅",
    menu1:"블랙탑 컨설팅",
    menu2:"창업센터"
   },
    {text:"커뮤니티",
    menu1:"현장스케치",
    menu2:"공지사항",
  menu3:"이벤트",
menu4:"sns",
menu5:"건의함",
menu6:"취업지원센터"},
    {text:"My블랙탑",
    menu1:"트레이닝 룸 예약",
    menu2:"이수내역",
    menu3:"트랜드 소식지",
   }
  ]
  const menuCont=[
    {img:"img/icon1.png"},
    {img:"img/icon2.png"},
    {img:"img/icon3.png"},
    {img:"img/icon4.png"},
    {img:"img/icon5.png"},
  ]

  function Info({text,menu1,menu2,menu3,menu4,menu5,menu6}){
    return (
    <>
        <div>
                <h3>{text}</h3>
                <ul>
                  <li>
                    <a href="/">{menu1}</a>
                  </li>
                  <li>
                    <a href="/">{menu2}</a>
                  </li>
                  <li>
                    <a href="/">{menu3}</a>
                  </li>
                  <li>
                    <a href="/">{menu4}</a>
                  </li>
                  <li>
                    <a href="/">{menu5}</a>
                  </li>
                </ul>
              </div>
    </>)
  }


function Footer() {
  return (
    <div>
        <footer id="footerType" className="footer__wrap section nexon gray">
        <h2 className="ir_so">푸터 영역</h2>
        <div className="footer__inner container">
          <div className="footer__wrap">
            <div className="footer_left">
              <div className="footer_info">
                <h3>BLACK TOP</h3>
                <ul>
                  <li>
                    <a href="/">개인정보처리방침</a>
                  </li>
                  <li>
                    <a href="/">이용약관</a>
                  </li>
                  <li>
                    <a href="/">사업자등록번호 431-85-01442</a>
                  </li>
                  <li>
                    <a href="/">T.02-702-3233</a>
                  </li>
                </ul>
              </div>
              <div className="icon">
                <ul>
                  <li>
                    <a href="/">
                      <img src={menuCont[0].img}  alt="icon" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src={menuCont[1].img} alt="icon" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src={menuCont[2].img}  alt="icon" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src={menuCont[3].img}  alt="icon" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src={menuCont[4].img}  alt="icon" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer__menu">
            {menuList.map((txt) => (
                <Info text={txt.text} 
                key={txt.text}
                text={txt.text}
                menu1={txt.menu1}
                menu2={txt.menu2}
                menu3={txt.menu3}
                menu4={txt.menu4}
                menu5={txt.menu5}
                menu6={txt.menu6}
                />))}               
          
            </div>
          </div>
          <address className="footer__address">
            ©2022 blacktop. All rights reserved.
          </address>
        </div>
      </footer>
    </div>
  )
}

export default Footer