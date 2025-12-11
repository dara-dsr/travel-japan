import React from 'react';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <div className="not-found-line"></div>
        <h2 className="not-found-subtitle">Страница в разработке</h2>
        <p className="not-found-text">
          Извините, запрашиваемая страница пока не готова.<br />
          Мы активно работаем над её созданием!
        </p>
        <a href="/" className="not-found-button">
          Вернуться на главную
        </a>
      </div>
      <div className="not-found-decoration"></div>
    </div>
  );
};

export default NotFound;