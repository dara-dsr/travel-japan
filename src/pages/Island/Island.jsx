import React from 'react';
import oblojka from '../../images/Обложка для островов.jpg';
import './Island.css';
import { osnisland } from '../../data/osnisland';
import Mesto from './Mesto';
import IslandStats from './Stats';

const Island = () => {
  return (
    <div className="island-page">
      {/* Главный баннер с изображением и статистикой */}
      <section className="main-banner-section">
        <div className="banner-container">
          <div className="banner-content-wrapper">
            <img src={oblojka} className="banner-image" alt="Острова Японии" />
            
            <div className="banner-right-content">
              <div className="banner-text">
                <h1>Острова Японии</h1>
                <p>
                  Япония — архипелаг, состоящий из более чем 6 тысяч островов. 
                  Здесь гармонично сочетаются древние традиции и современные технологии, 
                  уникальная природа и урбанистические пейзажи.
                </p>
              </div>
              
              {/* Статистика интегрирована в баннер */}
              <div className="banner-stats">
                <IslandStats />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Основные острова */}
      <section className="main-islands-section">
        <div className="container">
          <div className="section-header">
            <h1>Основные острова</h1>
            <div className="line"></div>
          </div>
          <div className="islands-grid">
            {osnisland.map(island => (
              <div key={island.id} className="islands-card">
                <a href={island.link}>
                  <img src={island.img} alt={island.alt} />
                  <h2>{island.title}</h2>
                  <p>{island.description}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>


      <Mesto />
    </div>
  );
};

export default Island;