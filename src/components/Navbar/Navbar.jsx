import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext'; 
import './Navbar.css';
import logo from '../../images/logo.png';
import searchIcon from '../../images/lyna.png';
import authIcon from '../../images/user.png';
import accountIcon from '../../images/account-icon.png'; 

const Navbar = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isDesktop, setIsDesktop] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef(null);
  const searchRef = useRef(null);
  
  const { isAuthenticated, logout, user } = useAuth();

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };
    
    handleResize(); 
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
    if (isSearchVisible) {
      setSearchQuery('');
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      setIsSearchVisible(false);
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsSearchVisible(false);
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      closeMenu();
      setSearchQuery('');
      setIsSearchVisible(false);
    }
  };

  const handleAuthClick = () => {
    navigate('/login');
    closeMenu();
  };

  const handleAccountClick = () => {
    navigate('/account');
    closeMenu();
  };

  const handleLogout = () => {
    logout();
    navigate('/');
    closeMenu();
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMenuOpen && 
          menuRef.current && 
          !menuRef.current.contains(e.target) && 
          !e.target.closest('.menu-toggle')) {
        closeMenu();
      }
      
      if (isSearchVisible && 
          searchRef.current && 
          !searchRef.current.contains(e.target) && 
          !e.target.closest('.search-button')) {
        setIsSearchVisible(false);
        setSearchQuery('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen, isSearchVisible]);

  return (
    <div>
      <nav className="navbar glass">
        <Link to="/" className="logo-container">
          <img
            className="img2"
            src={logo}
            alt="Логотип Cherry Country"
          />
          <h1 className="logo">Cherry <br /> Country</h1>
        </Link>

        <button 
          className="menu-toggle" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>

        <div 
          ref={menuRef}
          className={`nav-links ${isMenuOpen ? 'nav-open' : ''}`}>
          <Link to="/" className="cir_border" onClick={closeMenu}>Главная</Link>
          <Link to="/islands" className="cir_border" onClick={closeMenu}>Острова</Link>
          <Link to="/features" className="cir_border" onClick={closeMenu}>Особенности</Link>
          <Link to="/tours" className="cir_border" onClick={closeMenu}>Туры</Link>
          <Link to="/about" className="cir_border" onClick={closeMenu}>О проекте</Link>
          
          {!isDesktop && (
            <>
              {isAuthenticated ? (
                <>
                  <button 
                    className="account-button" 
                    onClick={handleAccountClick}>
                    <img src={accountIcon || authIcon} alt="Аккаунт" />Мой аккаунт
                  </button>
                  <button 
                    className="logout-button" 
                    onClick={handleLogout}
                    style={{
                      background: 'transparent',
                      border: '1px solid #ff6b6b',
                      color: '#ff6b6b',
                      padding: '10px',
                      borderRadius: '5px',
                      marginTop: '10px'
                    }}>
                    Выйти
                  </button>
                </>
              ) : (
                <button 
                  className="auth-button" 
                  onClick={handleAuthClick}>
                  <img src={accountIcon} alt="Вход" className="auth-icon" />Войти / Регистрация
                </button>
              )}
            </>
          )}
        </div>

        <div className="right-section">
          <div className="search-container" ref={searchRef}>
            <button 
              className="search-button" 
              onClick={toggleSearch}
              aria-label={isSearchVisible ? "Скрыть поиск" : "Показать поиск"}>
              <img src={searchIcon} alt="Поиск" />
            </button>
            <div className={`search-input ${isSearchVisible ? 'visible' : ''}`}>
              <input 
                type="text" 
                placeholder="Поиск..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearch}
                autoFocus={isSearchVisible}
              />
            </div>
          </div>

          {isDesktop && (
            <div className="desktop-only">
              {isAuthenticated ? (
                <div className="auth-info" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '14px', color: '#4e1e7e' }}>
                    {user?.username || 'Пользователь'}
                  </span>
                  <button 
                    className="account-button" 
                    onClick={handleAccountClick}
                    aria-label="Мой аккаунт"
                    title="Мой аккаунт">
                    <img src={accountIcon || authIcon} alt="Аккаунт" />
                  </button>
                  <button 
                    onClick={handleLogout}
                    className="logout-btn-small"
                    style={{
                      background: 'transparent',
                      border: '1px solid #ff6b6b',
                      color: '#ff6b6b',
                      padding: '5px 10px',
                      borderRadius: '5px',
                      fontSize: '12px'
                    }}>
                    Выйти
                  </button>
                </div>
              ) : (
                <button className="auth-button" onClick={handleAuthClick}>
                  <img src={accountIcon} alt="Вход" className="auth-icon" />Войти
                </button>
              )}
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;