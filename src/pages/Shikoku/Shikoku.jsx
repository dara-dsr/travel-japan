import React from 'react';
import './Shikoku.css';
import shikokuBackground from '../../images/img/Сикоку-фон.jpg';
import kagawa from '../../images/img/Кагава-фон.jpg';
import ehime from '../../images/img/Эхиме-фон.JPG';
import tokushima from '../../images/img/Токусима-фон.jpg';
import kochi from '../../images/img/Коти-фон.jpg';

const Shikoku = () => {
  return (
    <div className="main-container">
      {/* Герой-секция */}
      <section className="shikoku-hero">
        <div className="hero-background">
          <img src={shikokuBackground} className="hero-image" alt="Остров Сикоку" />
        </div>
        <div className="hero-content">
          <h1 className="hero-title">Сикоку</h1>
          <p className="hero-subtitle">Остров паломничества и природы</p>
          
          <div className="hero-info-grid">
            <div className="hero-info-card">
              <h3>Основные характеристики</h3>
              <p className="hero-text">
                Сикоку (四国) — самый маленький из четырёх главных островов Японии, 
                известный своими древними буддийскими паломническими маршрутами, 
                живописными ущельями и традиционной культурой.
              </p>
              <div className="hero-stats">
                <div className="stat">
                  <span className="stat-number">18 800 км²</span>
                  <span className="stat-label">Площадь</span>
                </div>
                <div className="stat">
                  <span className="stat-number">4 преф.</span>
                  <span className="stat-label">Префектуры</span>
                </div>
                <div className="stat">
                  <span className="stat-number">3.8 млн</span>
                  <span className="stat-label">Население</span>
                </div>
              </div>
            </div>
            
            <div className="hero-info-card">
              <h3>Ключевые города</h3>
              <p className="hero-text">
                На Сикоку расположены исторические города, сохранившие традиционную 
                японскую атмосферу и уникальные культурные особенности.
              </p>
              <ul className="city-list">
                <li>Мацуяма — столица Эхиме с древним замком</li>
                <li>Такамацу — главный порт и ворота Сикоку</li>
                <li>Токусима — город фестиваля Ава-Одори</li>
                <li>Коти — исторический самурайский город</li>
              </ul>
            </div>
            
            <div className="hero-info-card">
              <h3>Регионы (префектуры)</h3>
              <p className="hero-text">
                Остров состоит из четырёх префектур, каждая со своей уникальной 
                культурой, кухней и природными достопримечательностями.
              </p>
              <div className="regions-list">
                <span className="region-tag">Кагава</span>
                <span className="region-tag">Эхиме</span>
                <span className="region-tag">Токусима</span>
                <span className="region-tag">Коти</span>
              </div>
              <p className="hero-note">
                Каждая префектура представляет собой отдельный культурный регион острова.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Дополнительная информация */}
      <section className="features-section">
        <div className="title">
          <h1>Особенности Сикоку</h1>
          <div className="line"></div>
        </div>
        
        <div className="features-grid">
          <div className="feature-card">
            <h2>Паломнический маршрут</h2>
            <p>
              Сикоку славится 88 храмовым паломническим маршрутом (сикоку хэндзё), 
              посвященным буддийскому монаху Кукаю. Маршрут длиной 1200 км проходит через 
              все 4 префектуры и привлекает паломников уже более 1200 лет.
            </p>
          </div>
          
          <div className="feature-card">
            <h2>Природа и география</h2>
            <p>
              Остров горный, с глубокими ущельями, бурными реками и водопадами. 
              Знаменитое ущелье Кобоке, водопад Рёдзэн, горы Исидзути. Береговая линия 
              разнообразна: от скалистых утёсов до песчаных пляжей.
            </p>
          </div>
          
          <div className="feature-card">
            <h2>Культура и традиции</h2>
            <p>
              Сикоку сохранил традиционные ремёсла: производство бумаги васи в Коти, 
              индиго-крашение в Токусиме, бронзовое литьё в Такамацу. Фестиваль Ава-Одори 
              в Токусиме — один из трёх великих танцевальных фестивалей Японии.
            </p>
          </div>
          
          <div className="feature-card">
            <h2>Кухня острова</h2>
            <p>
              Каждая префектура имеет свои кулинарные специалитеты: Сануки удон в Кагаве, 
              мандарины и морские продукты в Эхиме, сладкий картофель в Коти, 
              нарuto-рамен в Токусиме. Сикоку также известен производством сакэ.
            </p>
          </div>
        </div>
      </section>

      {/* Регионы (префектуры) */}
      <section className="regions-section">
        <div className="title">
          <h1>Префектуры Сикоку</h1>
          <div className="line"></div>
          <p className="section-subtitle">
            Каждая префектура обладает уникальным характером, историей и культурными традициями
          </p>
        </div>
        
        <div className="regions-grid">
          <div className="region-card">
            <div className="region-link">
              <div className="region-image">
                <img src={kagawa} alt="Префектура Кагава" />
                <div className="region-overlay">
                  <h3>Кагава</h3>
                  <p>Префектура лапши удон, прекрасных садов и островов</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="region-card">
            <div className="region-link">
              <div className="region-image">
                <img src={ehime} alt="Префектура Эхиме" />
                <div className="region-overlay">
                  <h3>Эхиме</h3>
                  <p>Земля мандаринов, древних замков и горячих источников</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="region-card">
            <div className="region-link">
              <div className="region-image">
                <img src={tokushima} alt="Префектура Токусима" />
                <div className="region-overlay">
                  <h3>Токусима</h3>
                  <p>Родина фестиваля Ава-Одори и бурного водоворота Наруто</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="region-card">
            <div className="region-link">
              <div className="region-image">
                <img src={kochi} alt="Префектура Коти" />
                <div className="region-overlay">
                  <h3>Коти</h3>
                  <p>Самурайский дух, дикая природа и знаменитая арена</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="shikoku-data">
        <div className="data-content">
          <h2>Сикоку в цифрах</h2>
          <div className="data-stats">
            <div className="data-stat">
              <span className="data-stat-number">88</span>
              <span className="data-stat-label">храмов паломничества</span>
            </div>
            <div className="data-stat">
              <span className="data-stat-number">1200</span>
              <span className="data-stat-label">лет традиции</span>
            </div>
            <div className="data-stat">
              <span className="data-stat-number">1400</span>
              <span className="data-stat-label">видов растений</span>
            </div>
            <div className="data-stat">
              <span className="data-stat-number">300+</span>
              <span className="data-stat-label">горячих источников</span>
            </div>
          </div>
          <p className="data-note">
            Сикоку — это остров духовных поисков и природных чудес, где время, кажется, 
            течёт медленнее. Здесь сохранилась подлинная Япония с её древними ритуалами, 
            мастерством ремесленников и уважением к природе. Остров предлагает уникальную 
            возможность отойти от суеты современного мира и погрузиться в атмосферу 
            традиционной японской культуры.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Shikoku;