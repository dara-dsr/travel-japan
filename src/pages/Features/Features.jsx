import React from 'react';
import kylityra from '../../images/Чайная церемония.jpg';
import kylinaria from '../../images/Трационная кулинария.jpg';
import festival from '../../images/Мацури.jpg';
import arhitektyra from '../../images/Храм с сакурами.jpg';
import './Features.css';


const Features = () => {
  return (
    <div className="cultural-features">
      {/* Контейнер заголовка */}
      <div className="cultural-header">
        <h1>Культурные особенности Японии</h1>
        <div className="line"></div>
      </div>

      {/* Контейнер основных разделов */}
      <div className="cultural-sections">
        
        {/* Контейнер Культуры */}
        <div className="cultural-section culture">
          <h2 className="section-title">Культура</h2>
          <div className="section-content">
            <img 
              src={kylityra} alt="Чайная церемония" className="feature-image"/>
            <ul className="feature-list">
              <li className="feature-item">
                <h3>Традиционные искусства</h3>
                <p>Икебана (искусство аранжировки цветов), чайная церемония, каллиграфия, оригами и бонсай — все эти практики отражают японскую эстетику ваби-саби.</p>
              </li>
              <li className="feature-item">
                <h3>Почтение и этикет</h3>
                <p>Японское общество уделяет большое внимание вежливости, уважению к старшим и соблюдению социальных норм. Поклоны являются важной частью общения.</p>
              </li>
              <li className="feature-item">
                <h3>Гармония с природой</h3>
                <p>Японская культура глубоко связана с природой, что проявляется в сезонных праздниках, садоводстве и архитектуре.</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Контейнер Кулинарии */}
        <div className="cultural-section cuisine">
          <h2 className="section-title">Кулинария</h2>
          <div className="section-content">
            <img 
              src={kylinaria} alt="Традиционные суши" className="feature-image" />
            <ul className="feature-list">
              <li className="feature-item">
                <h3>Традиционная кухня</h3>
                <p>Японская кухня известна своими свежими ингредиентами, минимальной обработкой и сезонным подходом. Суши, сашими, рамэн и темпура — лишь несколько примеров.</p>
              </li>
              <li className="feature-item">
                <h3>Презентация блюд</h3>
                <p>В Японии большое внимание уделяется эстетике подачи блюд. Каждый элемент имеет свое место, а сезонность отражается в украшениях.</p>
              </li>
              <li className="feature-item">
                <h3>Региональные особенности</h3>
                <p>Каждый регион Японии имеет свои уникальные блюда и кулинарные традиции, отражающие местные ингредиенты и историю.</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Контейнер Фестивалей */}
        <div className="cultural-section festivals">
          <h2 className="section-title">Фестивали</h2>
          <div className="section-content">
            <img 
              src={festival} alt="Традиционный мацури" className="feature-image"/>
            <ul className="feature-list">
              <li className="feature-item">
                <h3>Мацури</h3>
                <p>Традиционные японские фестивали, посвященные богам, временам года или историческим событиям. Включают парады, танцы и уличную еду.</p>
              </li>
              <li className="feature-item">
                <h3>Ханами</h3>
                <p>Фестиваль любования цветением сакуры весной. Люди собираются в парках для пикников под цветущими деревьями.</p>
              </li>
              <li className="feature-item">
                <h3>Гион Мацури в Киото</h3>
                <p>Один из самых известных фестивалей Японии, проводящийся в июле. Известен своими огромными парадными платформами.</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Контейнер Архитектуры */}
        <div className="cultural-section architecture">
          <h2 className="section-title">Архитектура</h2>
          <div className="section-content">
            <img 
              src={arhitektyra} alt="Традиционный японский храм"  className="feature-image"/>
            <ul className="feature-list">
              <li className="feature-item">
                <h3>Традиционные постройки</h3>
                <p>Деревянные храмы, замки и традиционные дома с раздвижными дверями (сёдзи), татами и минималистичным дизайном.</p>
              </li>
              <li className="feature-item">
                <h3>Современная архитектура</h3>
                <p>Инновационные небоскребы Токио, работы таких архитекторов, как Кенго Кума и Тадао Андо, сочетающие традиции с современными технологиями.</p>
              </li>
              <li className="feature-item">
                <h3>Сады и ландшафтный дизайн</h3>
                <p>Японские сады — произведения искусства, созданные для созерцания и медитации. Камни, вода и растения расположены с глубоким смыслом.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Контейнер цитаты */}
      <div className="cultural-quote">
        <p className="quote-text">
          "Японская культура — это тонкое равновесие между традицией и инновацией, 
          где каждое действие наполнено смыслом и красотой."
        </p>
        <p className="quote-author">— Японская мудрость</p>
      </div>
    </div>
  )
}

export default Features;