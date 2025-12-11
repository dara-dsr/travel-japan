import React from 'react';
import './Footer.css';
import logo from '../../images/logo.png';
import vk from '../../images/vk.png'; 
import inta from '../../images/Instagram.png'; 
import tg from '../../images/telegram.png'; 


const Footer = () => {
  return (
      <footer className="footer">
    <nav className="footer-nav">
      <ul>
        <li><a href="/">Главная</a></li>
        <li><a href="/islands">Острова</a></li>
        <li><a href="/features">Особенности</a></li>
        <li><a href="/tours">Туры</a></li>
        <li><a href="/about">О проекте</a></li>
      </ul>
    </nav>
    <div className="footer-center">
      <div className="footer-title">Cherry Country</div>
      <img src={logo} alt="Cherry Country" className="footer-logo" />
      <div className="footer-copyright">Все права защищены, 2025.</div>
    </div>
    <div className="footer-social">
      <div className="footer-social-title">Следите за новостями!</div>
      <div className="social-icons">
        <a href="#"><img src={vk} alt="VK"/></a>
        <a href="#"><img src={inta} alt="Instagram"/></a>
        <a href="#"><img src={tg} alt="Telegram"/></a>
      </div>
      <div className="footer-contact">+7(960)589-11-75</div>
      <div className="footer-contact">+7(902)055-39-90</div>
      <div className="footer-contact">m.cherrycountry.com</div>
    </div>
    </footer>
  )
}

export default Footer;
