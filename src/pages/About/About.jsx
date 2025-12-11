import React from 'react';
import './About.css';

const About = () => {
  return (
      <div className="about-us-page">
      {/* Заголовок страницы */}
      <div className="about-header">
        <h1>О нас</h1>
        <div className="line"></div>
      </div>

      {/* Основной контент */}
      <div className="about-content">
        {/* История */}
        <div className="about-section story">
          <h2 className="section-title">Наша история</h2>
          <div className="section-content">
            <div className="story-text">
              <p>
                Наша история началась с глубокого увлечения культурой Японии, её богатыми традициями и 
                современными достижениями. Основатели проекта, будучи ценителями японского искусства, 
                кулинарии и философии, решили создать пространство, где каждый может прикоснуться к этой 
                удивительной культуре.
              </p>
              <p>
                Начав с небольших мастер-классов по оригами и чайных церемоний, мы постепенно расширяли 
                деятельность, добавляя кулинарные воркшопы, языковые курсы и культурные мероприятия. 
                Сегодня мы — команда энтузиастов, объединённых любовью к Японии и желанием делиться 
                её красотой с другими.
              </p>
            </div>
          </div>
        </div>

        {/* Расположение */}
        <div className="about-section location">
          <h2 className="section-title">Где мы находимся</h2>
          <div className="section-content">
            <div className="location-info">
              <div className="address-card">
                <div className="address-icon">📍</div>
                <div className="address-details">
                  <h3>Владивосток</h3>
                  <p>ул. Японская, д. 25</p>
                  <p>Приморский край, Россия</p>
                  <p className="address-note">Рядом с Японским культурным центром</p>
                </div>
              </div>
              <div className="map-placeholder">
                <div className="map-overlay">
                  <p>Карта местоположения</p>
                  <p>Владивосток, ул. Японская, 25</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Контакты */}
        <div className="about-section contact">
          <h2 className="section-title">Свяжитесь с нами</h2>
          <div className="section-content">
            <div className="contact-grid">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div className="contact-details">
                  <h3>Электронная почта</h3>
                  <p>m.cherrycountry.com</p>
                  <p className="contact-sub">Для общих вопросов</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div className="contact-details">
                  <h3>Телефон</h3>
                  <p>+7(902)055-39-90</p>
                  <p className="contact-sub">Пн-Пт с 10:00 до 19:00</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">💬</div>
                <div className="contact-details">
                  <h3>Социальные сети</h3>
                  <p>@cherrycountry</p>
                  <p className="contact-sub">Telegram, Instagram, VK</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">🏢</div>
                <div className="contact-details">
                  <h3>Посетите нас</h3>
                  <p>Пн-Сб: 11:00-20:00</p>
                  <p className="contact-sub">Воскресенье: 12:00-18:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Миссия */}
        <div className="about-section mission">
          <h2 className="section-title">Наша миссия</h2>
          <div className="section-content">
            <div className="mission-text">
              <p>
                Мы стремимся стать мостом между культурами России и Японии, создавая пространство для 
                культурного обмена, обучения и вдохновения. Наша цель — не просто рассказывать о японской 
                культуре, но и позволять людям испытать её на себе через мастер-классы, мероприятия и 
                личное общение.
              </p>
              <div className="mission-quote">
                <p className="quote-text">
                  "Культура — это не знание, а чувство. Мы помогаем людям почувствовать Японию."
                </p>
                <p className="quote-author">— Основатели проекта</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
