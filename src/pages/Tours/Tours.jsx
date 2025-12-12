import React, { useState, useEffect } from 'react';
import './Tours.css';
import fon from '../../images/img/japan-pattern.jpg';

import tour1 from '../../images/tour/Классика.jpg';
import tour2 from '../../images/tour/Путь самурая.jpg';
import tour3 from '../../images/tour/Гастрономическое путешествие.jpg';
import tour4 from '../../images/tour/Природа и онсэны.jpg';
import tour5 from '../../images/tour/Аниме и манга.jpg';
import tour6 from '../../images/tour/Люкс-тур.jpg';

const Tours = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  // Проверка авторизации при загрузке компонента
  useEffect(() => {
    checkAuthStatus();
  }, []);

  // Функция для проверки статуса авторизации
  const checkAuthStatus = () => {
    const token = localStorage.getItem('authToken');
    setIsLoggedIn(!!token);
  };

  // Функция обработки клика на кнопку тура
  const handleTourButtonClick = (tourTitle) => {
    if (!isLoggedIn) {
      // Перенаправление на страницу регистрации/входа
      window.location.href = '/login'; // или '/register' в зависимости от вашей маршрутизации
    } else {
      // Показываем уведомление для авторизованного пользователя
      setShowNotification(true);
      
      // Скрываем уведомление через 3 секунды
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
      
      // Здесь можно добавить логику отправки данных о выбранном туре на сервер
      console.log(`Заявка на тур: ${tourTitle}`);
    }
  };

  // Функция обработки клика на кнопку контактов
  const handleContactButtonClick = () => {
    if (!isLoggedIn) {
      // Перенаправление на страницу регистрации/входа
      window.location.href = '/login'; // или '/register' в зависимости от вашей маршрутизации
    } else {
      // Показываем уведомление для авторизованного пользователя
      setShowNotification(true);
      
      // Скрываем уведомление через 3 секунды
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
      
      // Здесь можно добавить логику отправки заявки на сервер
      console.log('Заявка на подбор тура');
    }
  };

  const tours = [
    // ... (массив tours остается без изменений)
    {
      id: 1,
      title: "Классическая Япония",
      days: 7,
      price: "1500$",
      image: tour1,
      route: "Токио → Кавагоэ → Никко → Киото → Нара → Осака",
      description: "Знакомство с главными достопримечательностями Японии. Идеальный тур для первого посещения страны.",
      highlights: ["Императорский дворец", "Храм Тосёгу", "Золотой павильон", "Парк Нара с оленями"]
    },
    {
      id: 2,
      title: "Путь самурая",
      days: 10,
      price: "2200$",
      image: tour2,
      route: "Токио → Камакура → Хаконэ → Киото → Химэдзи → Хиросима",
      description: "Исторический тур по местам, связанным с самурайской культурой и традициями.",
      highlights: ["Великий Будда Камакуры", "Замок Химэдзи", "Остров Миядзима", "Сад Рицурин"]
    },
    {
      id: 3,
      title: "Гастрономическое путешествие",
      days: 8,
      price: "1800$",
      image: tour3,
      route: "Токио → Йокогама → Нагоя → Киото → Осака → Кобе",
      description: "Тур для гурманов: от уличной еды до высокой кухни кайсэки.",
      highlights: ["Рынок Цукидзи", "Раменный музей", "Дегустация саке", "Кобе говядина"]
    },
    {
      id: 4,
      title: "Природа и онсэны",
      days: 9,
      price: "1900$",
      image: tour4,
      route: "Токио → Хаконэ → Фудзи → Такаяма → Канадзава → Тояма",
      description: "Отдых в горячих источниках и прогулки по самым живописным местам Японии.",
      highlights: ["Гора Фудзи", "Озеро Аси", "Деревня Сиракава-го", "Сад Кэнроку-эн"]
    },
    {
      id: 5,
      title: "Аниме и манга",
      days: 6,
      price: "1200$",
      image: tour5,
      route: "Токио → Акихабара → Накано → Киото → Осака",
      description: "Тур для поклонников японской поп-культуры и современных развлечений.",
      highlights: ["Акихабара", "Студия Гибли", "Район Дотонбори", "Храм Фусими Инари ночью"]
    },
    {
      id: 6,
      title: "Люкс-тур",
      days: 12,
      price: "3500$",
      image: tour6,
      route: "Токио → Хаконэ → Киото → Кансай → Хиросима → Нагасаки",
      description: "Премиум-тур с проживанием в роякканах и эксклюзивными экскурсиями.",
      highlights: ["Рояккан с онсэном", "Частная экскурсия", "Ужин с гейшей", "Вертолетная экскурсия"]
    }
  ];

  return (
    <div className="tour-container">
      {/* Уведомление для авторизованных пользователей */}
      {showNotification && (
        <div className="tour-notification">
          <div className="notification-content">
            <span>Спасибо! Мы свяжемся с вами в ближайшее время.</span>
          </div>
        </div>
      )}

      {/* Герой-секция */}
      <section className="tour-hero">
        <div className="hero-background-tour">
          <img src={fon} className="hero-overlay-tour" alt="Train" />
        </div>
        <div className="hero-content-tour">
          <h1 className="hero-title-tour">Туры по Японии</h1>
          <p className="hero-subtitle-tour">Откройте для себя Страну восходящего солнца</p>
          <div className="hero-stats-tour">
            <div className="stat-tour">
              <span className="stat-number-tour">6+</span>
              <span className="stat-label-tour">Уникальных маршрутов</span>
            </div>
            <div className="stat-tour">
              <span className="stat-number-tour">6-12</span>
              <span className="stat-label-tour">Дней в туре</span>
            </div>
            <div className="stat-tour">
              <span className="stat-number-tour">от 1200$</span>
              <span className="stat-label-tour">Стоимость</span>
            </div>
          </div>
        </div>
      </section>

      {/* Секция с турами */}
      <section className="tours-section">
        <div className="title">
          <h1>Выберите свой тур</h1>
          <div className="line"></div>
          <p className="section-subtitle">
            Каждый тур — это уникальное сочетание культуры, истории и природных красот Японии
          </p>
        </div>
        
        <div className="tours-grid">
          {tours.map(tour => (
            <div key={tour.id} className="tour-card">
              <div className="tour-image">
                <img src={tour.image} alt={tour.title} />
                <div className="tour-badge">
                  <span className="tour-days">{tour.days} дней</span>
                  <span className="tour-price">{tour.price}</span>
                </div>
              </div>
              <div className="tour-content">
                <h3 className="tour-title">{tour.title}</h3>
                <p className="tour-description">{tour.description}</p>
                <div className="tour-route">
                  <h4>Маршрут:</h4>
                  <p>{tour.route}</p>
                </div>
                <div className="tour-highlights">
                  <h4>Основные моменты:</h4>
                  <ul>
                    {tour.highlights.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <button 
                  className="tour-button"
                  onClick={() => handleTourButtonClick(tour.title)}
                >
                  {isLoggedIn ? 'Оставить заявку' : 'Подробнее о туре'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Секция преимуществ */}
      <section className="advantages-section">
        <div className="title">
          <h1>Почему наши туры?</h1>
          <div className="line"></div>
        </div>
        
        <div className="advantages-grid">
          <div className="advantage-card">
            <div className="advantage-icon">🎌</div>
            <h3>Аутентичность</h3>
            <p>Мы показываем настоящую Японию, а не только туристические места</p>
          </div>
          
          <div className="advantage-card">
            <div className="advantage-icon">🗾</div>
            <h3>Гибкость</h3>
            <p>Возможность кастомизации маршрута под ваши интересы</p>
          </div>
          
          <div className="advantage-card">
            <div className="advantage-icon">🏨</div>
            <h3>Проживание</h3>
            <p>Только проверенные отели и традиционные рёканы</p>
          </div>
          
          <div className="advantage-card">
            <div className="advantage-icon">👨‍🏫</div>
            <h3>Гиды</h3>
            <p>Лицензированные русскоязычные гиды-японисты</p>
          </div>
          
          <div className="advantage-card">
            <div className="advantage-icon">🚆</div>
            <h3>Транспорт</h3>
            <p>Проездные на все виды транспорта включены в стоимость</p>
          </div>
          
          <div className="advantage-card">
            <div className="advantage-icon">🍣</div>
            <h3>Питание</h3>
            <p>Дегустации и рестораны с лучшими отзывами</p>
          </div>
        </div>
      </section>

      {/* Секция контактов */}
      <section className="contact-section">
        <div className="contact-content">
          <h2>Готовы к путешествию?</h2>
          <p className="contact-text">
            Оставьте заявку, и мы подберем для вас идеальный тур, 
            учитывая все ваши пожелания и бюджет
          </p>
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-label">Телефон:</span>
              <span className="contact-value">+7(960)589-11-75</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">Email:</span>
              <span className="contact-value">m.cherrycountry.com</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">Часы работы:</span>
              <span className="contact-value">Пн-Пт 9:00-18:00</span>
            </div>
          </div>
          <button 
            className="contact-button"
            onClick={handleContactButtonClick}
          >
            Оставить заявку
          </button>
        </div>
      </section>
    </div>
  )
}

export default Tours;