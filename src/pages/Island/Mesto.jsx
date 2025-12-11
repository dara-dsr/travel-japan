import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './Island.css';

import shibuya from '../../images/Сибуя.jpg';
import akihabara from '../../images/Акихабара.jpg'; 
import yokohama from '../../images/Йокогама.jpg';
import hitsujiyama from '../../images/Парк Хицудзияма.jpg';
import tohoku from '../../images/Тохоку.jpg';
import kamakura from '../../images/Камакура.jpg';
import mount from '../../images/Гора Фудзи.jpg';
import osaka from '../../images/Осака.jpg';
import okinawa from '../../images/Окинава.jpg';

const places = [
    {
      id: 1,
      name: 'Сибуя',
      image: shibuya,
      path: '/shibuya',
      description: 'Знаменитый перекресток и центр молодежной культуры'
    },
    {
      id: 2,
      name: 'Акихабара',
      image: akihabara,
      path: '/akihabara',
      description: 'Электронный город и центр аниме-культуры'
    },
    {
      id: 3,
      name: 'Йокогама',
      image: yokohama,
      path: '/yokohama',
      description: 'Крупный портовый город с современной архитектурой'
    },
    {
      id: 4,
      name: 'Парк Хицудзияма',
      image: hitsujiyama,
      path: '/hitsujiyama-park',
      description: 'Известный парк с цветущими флоксами'
    },
    {
      id: 5,
      name: 'Тохоку',
      image: tohoku,
      path: '/tohoku',
      description: 'Северный регион с красивой природой'
    },
    {
      id: 6,
      name: 'Камакура',
      image: kamakura,
      path: '/kamakura',
      description: 'Исторический город с Великим Буддой'
    },
    {
      id: 7,
      name: 'Гора Фудзи',
      image: mount,
      path: '/mount-fuji',
      description: 'Священная гора и символ Японии'
    },
    {
      id: 8,
      name: 'Осака',
      image: osaka,
      path: '/osaka',
      description: 'Город кухни и развлечений'
    },
    {
      id: 9,
      name: 'Окинава',
      image: okinawa,
      path: '/okinawa',
      description: 'Тропические острова с уникальной культурой'
    }
]

const Mesto = () => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8;
      if (direction === 'left') {
        scrollRef.current.scrollLeft -= scrollAmount;
      } else {
        scrollRef.current.scrollLeft += scrollAmount;
      }
    }
  };

  return (
    <section id="places" className="places-section">
      <div className="section-header"> 
        <h1 className="places-title">Популярные места</h1> 
        <div className="line"></div>
      </div>

      <div className="carousel-container">
        {/* Стрелки */}
        <button
          onClick={() => scroll("left")}
          className="carousel-btn carousel-btn-left"
          aria-label="Предыдущий слайд"
        >
          <svg
            width="24" 
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <button
          onClick={() => scroll("right")}
          className="carousel-btn carousel-btn-right"
          aria-label="Следующий слайд"
        >
          <svg
            width="24" 
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

        {/* Лента карточек */}
        <div
          ref={scrollRef}
          className="carousel-track"
        >
          {places.map((place, index) => (
            <motion.div
              key={place.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -3 }}
              className="carousel-card"
              onClick={() => navigate(place.path)}
            >
              <img
                src={place.image}
                alt={place.name}
                className="card-image"
                loading="lazy"
              />

              <div className="card-overlay" />

              <div className="card-content">
                <h3 className="card-title">
                  <span className="card-title-accent">{place.name}</span>
                </h3>
                <p className="card-description">
                  {place.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="carousel-dots">
          {places.map((place) => (
            <button
              key={place.id}
              onClick={() => navigate(place.path)}
              className="carousel-dot"
              aria-label={`Перейти к ${place.name}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mesto;
