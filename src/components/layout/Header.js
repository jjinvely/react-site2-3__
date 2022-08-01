import React from 'react'



const textInfor = [
  
  {text: "아카데미 소개"},
  {text: "차별화"},
  {text: "강의안내"},
  {text:  "컨설팅"},
  {text: "커뮤니티"}]
  
  function Info({text}){
    return <>
       <li>
        <a href="/">{text}</a>
      </li>
    </>
  }

function Header() {
  return (
    <div>
      <header id="headerType" className="header__wrap nexon">
        <div className="header__inner">
          <h1 className="header__logo">
            <a href="/">BLACKTOP</a>
          </h1>
          <nav className="header__menu">
            <h2 className="ir_so">메인 메뉴</h2>
            <ul>
            {textInfor.map((txt) => (
                <Info text={txt.text} key={txt.text}/>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Header