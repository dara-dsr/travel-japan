import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext'; 
import './Registration.css';

function Registration() {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      if (formData.password !== formData.confirmPassword) {
        throw new Error("Пароли не совпадают!");
      }
      
      if (!formData.agreeTerms) {
        throw new Error("Вы должны согласиться с условиями обслуживания!");
      }

      if (formData.password.length < 6) {
        throw new Error("Пароль должен быть не менее 6 символов");
      }

      const userData = {
        id: Date.now(),
        username: formData.email.split('@')[0],
        email: formData.email,
        createdAt: new Date().toISOString(),
        memberSince: new Date().getFullYear().toString(),
        accountType: 'Стандарт',
        avatar: '/images/default-avatar.png',
      };

      const token = 'auth-token-' + Date.now();
      
      register(userData, token);
      
      alert("Регистрация успешна! Вы будете получать оповещения о новых событиях на почту.");
      navigate('/account');
      
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="registration-container">
      <div className="registration-header">
        <h1>Регистрация</h1>
        <div className="header-line"></div>
      </div>

      {error && (
        <div className="error-message" style={{color: 'red', marginBottom: '20px'}}>
          {error}
        </div>
      )}

      <div className="registration-form-wrapper">
        <div className="registration-left">
          <h2>Welcome</h2>
          <p className="registration-subtitle">
            Fill the form to become part of team
          </p>
          
          <form onSubmit={handleSubmit} className="registration-form">
            <div className="input-group">
              <label>E-mail</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Введите email"
                required
                disabled={isLoading}
              />
            </div>

            <div className="input-group">
              <label>Пароль</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Введите пароль"
                required
                minLength="6"
                disabled={isLoading}
              />
            </div>

            <div className="input-group">
              <label>Подтвердите пароль</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Повторите пароль"
                required
                minLength="6"
                disabled={isLoading}
              />
            </div>

            <div className="checkbox-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                />
                <span>Я соглашаюсь с условиями обслуживания</span>
              </label>
            </div>

            <button 
              type="submit" 
              className="registration-button"
              disabled={isLoading}
            >
              {isLoading ? 'Регистрация...' : 'Зарегистрироваться'}
            </button>
          </form>

          <div className="notification-info">
            <p>✓ Вы будете получать оповещения о новых событиях на почту</p>
          </div>
        </div>

        <div className="registration-divider">
          <div className="line"></div>
          <span>или</span>
          <div className="line"></div>
        </div>

        <div className="registration-right">
          <h3>Уже есть аккаунт?</h3>
          <button 
            onClick={() => navigate('/login')}
            className="login-link"
            disabled={isLoading}
          >
            Войти
          </button>
        </div>
      </div>
    </div>
  );
}

export default Registration;