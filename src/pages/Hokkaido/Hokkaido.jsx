import React from 'react';
import './Hokkaido.css';
import fon from '../../images/img/Хоккайдо-фон.jpg';

const Hokkaido = () => {
  return (
    <div className="main-container">
      {/* Герой-секция */}
      <section className="hokkaido-hero">
        <div className="hero-background">
          <img src={fon} className="hero-image" alt="Остров Хоккайдо" />
        </div>
        <div className="hero-content">
          <h1 className="hero-title">Хоккайдо</h1>
          <p className="hero-subtitle">Северная жемчужина Японии</p>
          
          <div className="hero-info-grid">
            <div className="hero-info-card">
              <h3>Основные характеристики</h3>
              <p className="hero-text">
                Хоккайдо (北海道) — второй по величине и самый северный остров Японии, 
                известный своими необъятными природными просторами, уникальной экосистемой 
                и отличными от остальной Японии культурой и климатом.
              </p>
              <div className="hero-stats">
                <div className="stat">
                  <span className="stat-number">83 456 км²</span>
                  <span className="stat-label">Площадь</span>
                </div>
                <div className="stat">
                  <span className="stat-number">5,3 млн</span>
                  <span className="stat-label">Население</span>
                </div>
                <div className="stat">
                  <span className="stat-number">47,3 чел/км²</span>
                  <span className="stat-label">Плотность</span>
                </div>
              </div>
            </div>
            
            <div className="hero-info-card">
              <h3>Ключевые города</h3>
              <p className="hero-text">
                Хоккайдо сочетает современные города с дикой природой. 
                Саппоро — административный и культурный центр, а другие города 
                представляют собой ворота в уникальные природные зоны.
              </p>
              <ul className="city-list">
                <li>Саппоро — столица префектуры, известен снежным фестивалем</li>
                <li>Хакодате — исторический портовый город с великолепным видом</li>
                <li>Асахикава — крупнейший город в центральной части острова</li>
                <li>Обихиро — сельскохозяйственный центр региона Токачи</li>
              </ul>
            </div>
            
            <div className="hero-info-card">
              <h3>Региональное деление</h3>
              <p className="hero-text">
                Остров разделен на 4 основных субпрефектурных региона, 
                каждый с уникальными географическими и культурными особенностями.
              </p>
              <div className="regions-list">
                <span className="region-tag">Дохо</span>
                <span className="region-tag">Доо</span>
                <span className="region-tag">Дохоку</span>
                <span className="region-tag">Донан</span>
              </div>
              <p className="hero-note">
                14 субпрефектур образуют административную структуру острова.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Дополнительная информация */}
      <section className="features-section">
        <div className="title">
          <h1>Особенности Хоккайдо</h1>
          <div className="line"></div>
        </div>
        
        <div className="features-grid">
          <div className="feature-card">
            <h2>Рельеф и география</h2>
            <p>
              Хоккайдо отличается разнообразным рельефом: горные цепи (хребты Хидака, Токачи), 
              вулканические плато, обширные равнины и побережья. Здесь находится национальный парк Дайсецудзан 
              с самой высокой горой на острове — Асахидаке (2291 м).
            </p>
          </div>
          
          <div className="feature-card">
            <h2>Климат</h2>
            <p>
              Климат умеренный, с прохладным летом (средняя температура 17-22°C) и снежной зимой 
              (-5 до -12°C). Снег лежит с ноября по апрель, что делает Хоккайдо раем для зимних видов спорта. 
              Остров известен своими ясными голубыми небесами и низкой влажностью.
            </p>
          </div>
          
          <div className="feature-card">
            <h2>Природа и экология</h2>
            <p>
              Более 70% территории покрыто лесами и национальными парками. 
              Здесь обитают уникальные виды: бурые медведи, эдзо-шика (местный олень), 
              тануки, красные лисы. Шесть крупных национальных парков сохраняют первозданную природу.
            </p>
          </div>
          
          <div className="feature-card">
            <h2>Культурное наследие</h2>
            <p>
              Хоккайдо — родина коренного народа айну, чья культура и традиции бережно сохраняются. 
              Современные достопримечательности включают знаменитый Снежный фестиваль в Саппоро, 
              исторические здания в стиле мейдзи и уникальную кухню.
            </p>
          </div>
        </div>
      </section>

      <section className="hokkaido-data">
        <div className="data-content">
          <h2>Хоккайдо в цифрах</h2>
          <div className="data-stats">
            <div className="data-stat">
              <span className="data-stat-number">22%</span>
              <span className="data-stat-label">площади Японии</span>
            </div>
            <div className="data-stat">
              <span className="data-stat-number">6</span>
              <span className="data-stat-label">национальных парков</span>
            </div>
            <div className="data-stat">
              <span className="data-stat-number">120+</span>
              <span className="data-stat-label">горнолыжных курортов</span>
            </div>
            <div className="data-stat">
              <span className="data-stat-number">2 млн т</span>
              <span className="data-stat-label">морепродуктов ежегодно</span>
            </div>
          </div>
          <p className="data-note">
            Хоккайдо — это мир контрастов, где дикая природа соседствует с современными городами, 
            а древние традиции айну гармонируют с японской культурой. 
            Остров привлекает любителей природы, активного отдыха и гастрономических открытий, 
            предлагая уникальный опыт, недоступный в других регионах Японии.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Hokkaido;