import React from 'react';
import './Kyushu.css';
import kyushuBg from '../../images/img/Кюсю-фон.jpg';
import fukuokaImg from '../../images/img/Фукуока-фон.jpg';
import kumamotoImg from '../../images/img/Кумамото-фон.jpg';
import nagasakiImg from '../../images/img/Нагасаки-фон.jpg';
import oitaImg from '../../images/img/Оита-фон.jpg';
import kagoshimaImg from '../../images/img/Кагосима-фон.jpeg';

const Kyushu = () => {
  return (
    <div className="main-container">
      {/* Герой-секция */}
      <section className="kyushu-hero">
        <div className="hero-background">
          <img src={kyushuBg} className="hero-image" alt="Остров Кюсю" />
        </div>
        <div className="hero-content">
          <h1 className="hero-title">Кюсю</h1>
          <p className="hero-subtitle">Остров огня и горячих источников</p>
          
          <div className="hero-info-grid">
            <div className="hero-info-card">
              <h3>Основные характеристики</h3>
              <p className="hero-text">
                Кюсю (九州) — третий по величине остров Японии, известный своей вулканической активностью, 
                богатой историей и уникальной культурой. Это место зарождения японской цивилизации.
              </p>
              <div className="hero-stats">
                <div className="stat">
                  <span className="stat-number">36 782 км²</span>
                  <span className="stat-label">Площадь</span>
                </div>
                <div className="stat">
                  <span className="stat-number">300 км</span>
                  <span className="stat-label">Длина</span>
                </div>
                <div className="stat">
                  <span className="stat-number">13 млн</span>
                  <span className="stat-label">Население</span>
                </div>
              </div>
            </div>
            
            <div className="hero-info-card">
              <h3>Ключевые города</h3>
              <p className="hero-text">
                На Кюсю расположены важные исторические порты и современные мегаполисы, 
                сочетающие традиции и современность.
              </p>
              <ul className="city-list">
                <li>Фукуока — крупнейший город и экономический центр</li>
                <li>Нагасаки — исторический порт и город мира</li>
                <li>Кумамото — город с великолепным замком</li>
                <li>Кагосима — "Неаполь Востока" у подножия вулкана</li>
                <li>Оита — столица горячих источников</li>
              </ul>
            </div>
            
            <div className="hero-info-card">
              <h3>Префектуры Кюсю</h3>
              <p className="hero-text">
                Остров разделен на 7 префектур, каждая со своей уникальной культурой, 
                кухней и природными достопримечательностями.
              </p>
              <div className="regions-list">
                <span className="region-tag">Фукуока</span>
                <span className="region-tag">Сага</span>
                <span className="region-tag">Нагасаки</span>
                <span className="region-tag">Кумамото</span>
                <span className="region-tag">Оита</span>
                <span className="region-tag">Миядзаки</span>
                <span className="region-tag">Кагосима</span>
              </div>
              <p className="hero-note">
                Включая острова Окинава (часть региона Кюсю)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Особенности */}
      <section className="features-section">
        <div className="title">
          <h1>Особенности Кюсю</h1>
          <div className="line"></div>
        </div>
        
        <div className="features-grid">
          <div className="feature-card">
            <h2>Вулканический ландшафт</h2>
            <p>
              Кюсю расположен в зоне высокой вулканической активности. Здесь находятся знаменитые вулканы: 
              Асо (крупнейший в мире кратер), Сакурадзима (постоянно активный), и Кудзю. 
              Богатая вулканическая почва делает регион плодородным.
            </p>
          </div>
          
          <div className="feature-card">
            <h2>Горячие источники (онсэн)</h2>
            <p>
              Кюсю — лидер Японии по количеству горячих источников. Бепу в префектуре Оита известен 
              как "онсэнная столица" с более чем 2,800 источниками. Юфуин и Куросима также знамениты 
              своими целебными водами.
            </p>
          </div>
          
          <div className="feature-card">
            <h2>Историческое значение</h2>
            <p>
              Кюсю — ворота Японии в мир. Через Нагасаки в страну проникли западные технологии и христианство. 
              Здесь находится древнейшая столица Дайдзафу, а также места первых контактов с европейцами 
              в XVI веке.
            </p>
          </div>
          
          <div className="feature-card">
            <h2>Уникальная кухня</h2>
            <p>
              Регион славится своей гастрономией: тонкоцу рамен из Фукуоки, бася из Нагасаки (спагетти по-японски), 
              курица на гриле из Миядзаки, говядина из Кумамото, и морепродукты со всего региона. 
              Кюсю также известен своими сортами сакэ и сётю.
            </p>
          </div>
        </div>
      </section>

      {/* Префектуры */}
      <section className="regions-section">
        <div className="title">
          <h1>Префектуры Кюсю</h1>
          <div className="line"></div>
          <p className="section-subtitle">
            Каждая префектура предлагает уникальные достопримечательности и культурные особенности
          </p>
        </div>
        
        <div className="regions-grid">
          <div className="region-card">
            <div className="region-image">
              <img src={fukuokaImg} alt="Префектура Фукуока" />
              <div className="region-overlay">
                <h3>Фукуока</h3>
                <p>Крупнейший город Кюсю с современной архитектурой и знаменитыми лапшичными ларьками</p>
              </div>
            </div>
          </div>
          
          <div className="region-card">
            <div className="region-image">
              <img src={nagasakiImg} alt="Префектура Нагасаки" />
              <div className="region-overlay">
                <h3>Нагасаки</h3>
                <p>Исторический порт с уникальным смешением японской и европейской культур</p>
              </div>
            </div>
          </div>
          
          <div className="region-card">
            <div className="region-image">
              <img src={kumamotoImg} alt="Префектура Кумамото" />
              <div className="region-overlay">
                <h3>Кумамото</h3>
                <p>Замок Кумамото и один из крупнейших вулканических кратеров в мире</p>
              </div>
            </div>
          </div>
          
          <div className="region-card">
            <div className="region-image">
              <img src={oitaImg} alt="Префектура Оита" />
              <div className="region-overlay">
                <h3>Оита</h3>
                <p>Столица горячих источников Японии с городом Бепу и его "адом" дзигоку</p>
              </div>
            </div>
          </div>
          
          <div className="region-card">
            <div className="region-image">
              <img src={kagoshimaImg} alt="Префектура Кагосима" />
              <div className="region-overlay">
                <h3>Кагосима</h3>
                <p>Вулкан Сакурадзима, термальные источники и родина самурая Сайго Такамори</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="kyushu-data">
        <div className="data-content">
          <h2>Кюсю в цифрах</h2>
          <div className="data-stats">
            <div className="data-stat">
              <span className="data-stat-number">10%</span>
              <span className="data-stat-label">населения Японии</span>
            </div>
            <div className="data-stat">
              <span className="data-stat-number">30%</span>
              <span className="data-stat-label">горячих источников страны</span>
            </div>
            <div className="data-stat">
              <span className="data-stat-number">25+</span>
              <span className="data-stat-label">действующих вулканов</span>
            </div>
            <div className="data-stat">
              <span className="data-stat-number">400+</span>
              <span className="data-stat-label">лет истории с Европой</span>
            </div>
          </div>
          <p className="data-note">
            Кюсю — это остров контрастов, где древние вулканы соседствуют с современными городами, 
            где японские традиции смешались с европейским влиянием, создавая уникальную культуру, 
            которая продолжает привлекать путешественников со всего мира своими природными чудесами, 
            богатой историей и знаменитым гостеприимством.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Kyushu;