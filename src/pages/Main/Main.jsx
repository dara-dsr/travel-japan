import React from 'react';
import { features } from '../../data/features';
import { islands } from '../../data/islands';
import './Main.css';
import flag from '../../images/флаг.jpg';
import japan from '../../images/япония.jpg';

const largestCities = [
  "Токио", "Иокогама", "Осака", "Нагоя", "Саппоро", 
  "Кобе", "Фукуока", "Киото", "Кавасаки", "Сайтама"
];

const Main = () => {
  return (
    <div className="main-container">
      {/* Шапка */}
      <header id="home">
        <div className="home-content">
          <h1>Туризм <br />Японии</h1>
        </div>
      </header>

      {/* Краткая информация */}
      <section className="dragon-back">
        <div className="title">
          <h1>Краткая информация о стране</h1>
          <div className="line"></div>
        </div>
        <section className="briefly" id="briefly">
          <div className="container">
            <div className="country-info">
              {/* Первая колонка */}
              <div className="country-column">
                <span className="country-head">Флаг</span>
                <img 
                  className="country-flag" 
                  src={flag} 
                  alt="Флаг страны"
                />
                <span className="country-head">Столица</span>
                <span className="country-text">Токио</span>
                <span className="country-head">Валюта</span>
                <span className="country-text">Японская иена (¥)</span>
              </div>
              
              {/* Вторая колонка */}
              <div className="country-column">
                <span className="country-head">Дата основания</span>
                <span className="country-text">11 февраля 660 г. до н.э.</span>
                <span className="country-head">Часовой пояс</span>
                <span className="country-text">JST (UTC+9)</span>
                <span className="country-head">Форма правления</span>
                <span className="country-text">Парламентарная монархия</span>
                <span className="country-head">Официальный язык</span>
                <span className="country-text">Японский</span>
              </div>
              
              {/* Третья колонка */}
              <div className="country-column">
                <span className="country-head">Население</span>
                <span className="country-text">125,4 млн чел.</span>
                <span className="country-head">Территория</span>
                <span className="country-text">377,976 км²</span>
                <span className="country-head">Национальность</span>
                <span className="country-text">Японцы</span>
                <span className="country-head">Телефонный код</span>
                <span className="country-text">+81</span>
              </div>
              
              {/* Четвертая колонка с городами */}
              <div className="country-column">
                <span className="country-head">Крупнейшие города</span>
                <div className="cities-list">
                  {largestCities.map((city, index) => (
                    <div className="city-item" key={index}>
                      <span className="country-text">
                        {city}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Информация */}
        <section className="section-info">
          <div className="container">
            <div className="japan-banner-img">
              <img src={japan} alt="Япония" className="japan-image" />
              <div className="japan-content">
                <h1 className="japan-zag">Япония</h1>
                <p className="japan-text">
                  — одна из самых динамично развивающихся отраслей экономики страны,
                  которая сочетает в себе богатую историю, уникальную культуру
                  и современные достижения.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* Острова */}
      <section className="islands">
        <h1>Острова</h1>
        <div className="line"></div>
        <div className="container-islands">
          {islands.map(island => (
            <div key={island.id} className="island-card">
              <a href={island.link}>
                <h2>{island.title}</h2>
                <p>{island.description}</p>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Особенности */}
      <section className="features">
        <h1>Культурные особенности</h1>
        <div className="line"></div>
        <div className="features-container">
          {features.map((feature) => (
            <div className="feature-card" key={feature.id}>
              <img src={feature.img} alt={feature.alt} />
              <h3>{feature.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Main;
