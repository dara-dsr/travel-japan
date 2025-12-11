import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext'; 
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const { login, demoLogin } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
    notificationsEnabled: true 
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      if (!formData.email || !formData.password) {
        throw new Error('Заполните все поля');
      }

      if (formData.password.length < 6) {
        throw new Error('Пароль должен быть не менее 6 символов');
      }
      const userData = {
        id: Date.now(),
        username: formData.email.split('@')[0],
        email: formData.email,
        createdAt: new Date().toISOString(),
        memberSince: new Date().getFullYear().toString(),
        accountType: 'Стандарт',
        avatar: '/images/default-avatar.png',
        notificationsEnabled: formData.notificationsEnabled,
      };

      const token = 'auth-token-' + Date.now();
      
      login(userData, token);
      
      localStorage.setItem('notificationsEnabled', formData.notificationsEnabled);
      
      alert("Вход выполнен успешно! Вы будете получать оповещения о новых событиях на почту.");
      navigate('/account');
      
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDemoLogin = () => {
    demoLogin();
    alert("Демо-вход выполнен успешно!");
    navigate('/account');
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleNotificationsToggle = (e) => {
    setFormData(prev => ({
      ...prev,
      notificationsEnabled: e.target.checked
    }));
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <h1>Вход</h1>
        <div className="header-line"></div>
      </div>

      {error && (
        <div className="error-message" style={{color: 'red', marginBottom: '20px'}}>
          {error}
        </div>
      )}

      <div className="login-form-wrapper">
        <div className="login-form-container">
          <form onSubmit={handleSubmit} className="login-form" noValidate>
            <div className="input-group">
              <label htmlFor="email">EMAIL</label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Введите ваш email"
                required
                autoComplete="email"
                disabled={isLoading}
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">PASSWORD</label>
              <input
                id="password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Введите ваш пароль"
                required
                autoComplete="current-password"
                minLength="6"
                disabled={isLoading}
              />
            </div>

            <div className="login-options">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  disabled={isLoading}
                />
                <span>Запомнить меня</span>
              </label>
            </div>

            <button 
              type="submit" 
              className="login-button"
              disabled={isLoading}
            >
              {isLoading ? 'Вход...' : 'Войти'}
            </button>

            {/* Кнопка для демо-входа */}
            <button 
              type="button" 
              className="demo-login-button"
              onClick={handleDemoLogin}
              style={{
                background: '#6c5ce7',
                color: 'white',
                border: 'none',
                padding: '12px 20px',
                borderRadius: '10px',
                marginTop: '15px',
                width: '100%',
                cursor: 'pointer'
              }}
            >
              Демо-вход (без регистрации)
            </button>
          </form>

          <div className="signup-promo">
            <p>Ещё нет аккаунта?</p>
            <button 
              onClick={() => navigate('/registration')}
              className="signup-link"
              disabled={isLoading}
            >
              Зарегистрироваться
            </button>
          </div>

          <div className="notification-section">
            <div className="notification-icon">🔔</div>
            <div className="notification-text">
              <h4>Оповещения по почте</h4>
              <p>Включите уведомления, чтобы получать информацию о новых событиях</p>
              <label className="toggle-switch">
                <input 
                  type="checkbox" 
                  checked={formData.notificationsEnabled}
                  onChange={handleNotificationsToggle}
                  disabled={isLoading}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>
          </div>
        </div>

        <div className="login-illustration">
          <div className="illustration-content">
            <h3>Будьте в курсе событий</h3>
            <p>
              После входа вы сможете настроить получение уведомлений 
              о важных событиях на вашу почту
            </p>
            <div className="illustration-icon">📧</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;