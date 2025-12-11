import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Honshu.css';
import fon from '../../images/img/Хонсю.фон.jpeg';

import tyugoku from '../../images/img/Тюгоку-фон.jpg';
import kansai from '../../images/img/Кансай-фон.jpg';
import tuby from '../../images/img/Тюбу-фон.jpg';
import kanto from '../../images/img/Канто-фон.jpg';
import tohoku from '../../images/img/Тохоку-фон.jpg';

const Honshu = () => {
  const navigate = useNavigate();

  const handleRegionClick = (path) => {
    navigate(path);
  };
  return (
    <div className="main-container">
      {/* Герой-секция */}
      <section className="honcy-hero">
        <div className="hero-background">
          <img src={fon} className="hero-image" alt="Остров Хонсю" />
        </div>
        <div className="hero-content">
          <h1 className="hero-title">Хонсю</h1>
          <p className="hero-subtitle">Сердце Японии</p>
          
          <div className="hero-info-grid">
            <div className="hero-info-card">
              <h3>Основные характеристики</h3>
              <p className="hero-text">
                Хонсю (本州) — крупнейший и самый важный остров Японского архипелага, 
                где расположены исторические, политические и экономические центры страны.
              </p>
              <div className="hero-stats">
                <div className="stat">
                  <span className="stat-number">227 962 км²</span>
                  <span className="stat-label">Площадь</span>
                </div>
                <div className="stat">
                  <span className="stat-number">1 300 км</span>
                  <span className="stat-label">Длина</span>
                </div>
                <div className="stat">
                  <span className="stat-number">104 млн</span>
                  <span className="stat-label">Население</span>
                </div>
              </div>
            </div>
            
            <div className="hero-info-card">
              <h3>Ключевые города</h3>
              <p className="hero-text">
                На Хонсю расположены столица Японии Токио, а также исторические и культурные 
                центры: Киото, Осака, Иокогама, Нагоя, Хиросима.
              </p>
              <ul className="city-list">
                <li>Токио — столица и крупнейший мегаполис</li>
                <li>Киото — древняя столица Японии</li>
                <li>Осака — экономический центр региона Кансай</li>
                <li>Хиросима — город мира и возрождения</li>
              </ul>
            </div>
            
            <div className="hero-info-card">
              <h3>Региональное деление</h3>
              <p className="hero-text">
                Остров разделен на 5 основных регионов, каждый со своей уникальной культурой, 
                историей и особенностями.
              </p>
              <div className="regions-list">
                <span className="region-tag">Тохоку</span>
                <span className="region-tag">Канто</span>
                <span className="region-tag">Тюбу</span>
                <span className="region-tag">Кансай</span>
                <span className="region-tag">Тюгоку</span>
              </div>
              <p className="hero-note">
                Всего 34 префектуры, составляющие административную структуру острова.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Дополнительная информация */}
      <section className="features-section">
        <div className="title">
          <h1>Особенности Хонсю</h1>
          <div className="line"></div>
        </div>
        
        <div className="features-grid">
          <div className="feature-card">
            <h2>Рельеф и география</h2>
            <p>
              Хонсю — гористый остров с множеством вулканов, включая священную гору Фудзи (3 776 м), 
              самую высокую точку Японии. Горные цепи делят остров на тихоокеанскую и япономорскую стороны, 
              создавая разнообразные климатические зоны.
            </p>
          </div>
          
          <div className="feature-card">
            <h2>Климат</h2>
            <p>
              Климат варьируется от умеренного на севере до субтропического на юге. Лето теплое и влажное 
              (20-28°C), зима прохладная (0-8°C). Сезон дождей (цуй) в июне-июле, а осенью часты тайфуны. 
              Весна знаменита цветением сакуры, а осень — красными клёнами.
            </p>
          </div>
          
          <div className="feature-card">
            <h2>Природа и экология</h2>
            <p>
              Около 70% территории покрыто лесами, где обитают уникальные виды: японские макаки, 
              сероу, тануки. Многочисленные национальные парки сохраняют природное наследие. 
              Флора включает эндемичные виды сакуры, бамбука и хвойных деревьев.
            </p>
          </div>
          
          <div className="feature-card">
            <h2>Культурное наследие</h2>
            <p>
              Хонсю — колыбель японской цивилизации. Здесь находятся 14 из 17 объектов Всемирного 
              наследия ЮНЕСКО в Японии, включая храмы Киото, святилища Нары, замок Химэдзи и 
              мемориал мира в Хиросиме.
            </p>
          </div>
        </div>
      </section>

      {/* Регионы */}
      <section className="regions-section">
        <div className="title">
          <h1>Исследуйте регионы Хонсю</h1>
          <div className="line"></div>
          <p className="section-subtitle">
            Каждый регион предлагает уникальное сочетание истории, культуры и природных красот
          </p>
        </div>
        
        
        <div className="regions-grid">
          <div className="region-card" onClick={() => handleRegionClick("/tugoku")}>
              <div className="region-image">
                <img src={tyugoku} alt="Регион Тюгоку" />
                <div className="region-overlay">
                  <h3>Тюгоку</h3>
                  <p>Западный регион с Хиросимой и садами Каваси</p>
                </div>
              </div>
          </div>

          <div className="region-card" onClick={() => handleRegionClick("/tohoku")}>
            <div className="region-image">
              <img src={tohoku} alt="Регион Тохоку" />
              <div className="region-overlay">
                <h3>Тохоку</h3>
                <p>Северный регион с горячими источниками и нетронутой природой</p>
              </div>
            </div>
          </div>
          
          <div className="region-card" onClick={() => handleRegionClick("/kanto")}>
              <div className="region-image">
                <img src={kanto} alt="Регион Канто" />
                <div className="region-overlay">
                  <h3>Канто</h3>
                  <p>Столичный регион с Токио, Йокогамой и горой Фудзи</p>
                </div>
              </div>
          </div>
          
          <div className="region-card" onClick={() => handleRegionClick("/chubu")}>
              <div className="region-image">
                <img src={tuby} alt="Регион Тюбу" />
                <div className="region-overlay">
                  <h3>Тюбу</h3>
                  <p>Центральный горный регион и Японские Альпы</p>
                </div>
              </div>
          </div>
          
          <div className="region-card" onClick={() => handleRegionClick("/kansai")}>
              <div className="region-image">
                <img src={kansai} alt="Регион Кансай" />
                <div className="region-overlay">
                  <h3>Кансай</h3>
                  <p>Культурное сердце с Киото, Осакой и Нарой</p>
                </div>
              </div>
          </div>
        </div>
      </section>

      <section className="honshu-data">
        <div className="data-content">
          <h2>Хонсю в цифрах</h2>
          <div className="data-stats">
            <div className="data-stat">
              <span className="data-stat-number">80%</span>
              <span className="data-stat-label">населения Японии</span>
            </div>
            <div className="data-stat">
              <span className="data-stat-number">60%</span>
              <span className="data-stat-label">площади страны</span>
            </div>
            <div className="data-stat">
              <span className="data-stat-number">30+</span>
              <span className="data-stat-label">действующих вулканов</span>
            </div>
            <div className="data-stat">
              <span className="data-stat-number">1000+</span>
              <span className="data-stat-label">замков и храмов</span>
            </div>
          </div>
          <p className="data-note">
            Хонсю — не просто остров, это живое сердце Японии, где древние традиции гармонично 
            сочетаются с современными технологиями, создавая уникальную культуру, привлекающую 
            миллионы туристов со всего мира.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Honshu;