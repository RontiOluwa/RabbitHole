/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Rabbit from '../../public/svg/Rabbit.svg'
import LogoText from '../../public/svg/logo-text.svg'

const toggleNav = () => {
    var x = document.getElementById("nav__list");
    if (x.style.display === "none") {
        x.style.display = "flex";
    } else {
        x.style.display = "none";
    }
}

export default function Top() {
  return (
    <nav className="nav">
        <li className="logo">
            <Image width="50" height="50" src={Rabbit} alt=""/> 
            <img className="logo__text" src={LogoText} alt=""/>
        </li>
        <ul id="nav__list">
            <li className="nav__item">
                <a href="#service">About</a>
            </li> 
            <li className="nav__item">
                <a href="#membership">Membership</a>
            </li>  
            <li className="nav__item">
                <a href="#contact">Contact</a>
            </li> 
            <li className="nav__item">
                <button className="btn">Login with Metamask</button>
            </li>   
        </ul>
        <div className="hamburger" onClick={toggleNav}>
            <span className="hamburger__bar"></span>
            <span className="hamburger__bar"></span>
            <span className="hamburger__bar"></span>
        </div>
    </nav>
  )
}
