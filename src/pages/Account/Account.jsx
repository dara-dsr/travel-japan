import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthContext"; 
import "./Account.css";

const Account = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user, logout, updateUser } = useAuth(); 
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    username: user?.username || "",
    email: user?.email || "",
  });
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [notificationsEnabled, setNotificationsEnabled] = useState(
    localStorage.getItem('notificationsEnabled') === 'true' || false
  );

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);

    if (isEditing) {
      setFormData({
        username: user?.username || "",
        email: user?.email || "",
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    updateUser(formData);
    alert("Изменения сохранены!");
    setIsEditing(false);
  };

  const handleChangePassword = () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert("Новые пароли не совпадают!");
      return;
    }
    
    if (passwordData.newPassword.length < 6) {
      alert("Новый пароль должен быть не менее 6 символов!");
      return;
    }
    
    alert("Пароль успешно изменен!");
    setPasswordData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  const handleNotificationsToggle = () => {
    const newValue = !notificationsEnabled;
    setNotificationsEnabled(newValue);
    localStorage.setItem('notificationsEnabled', newValue);
    alert(newValue ? "Уведомления включены" : "Уведомления выключены");
  };

  if (!isAuthenticated) {
    return (
      <div className="account-container">
        <div className="account-hero">
          <div className="hero-background">
          </div>
          <div className="hero-content">
            <h1 className="hero-title">Мой Аккаунт</h1>
            <p className="hero-subtitle">Для доступа к личному кабинету требуется авторизация</p>
            <div className="auth-required-section">
              <div className="auth-card">
                <p className="auth-text">Войдите в систему, чтобы получить доступ к вашему профилю и настройкам.</p>
                <div className="auth-buttons">
                  <button 
                    onClick={() => navigate("/login")}
                    className="auth-btn primary"
                  >
                    Войти
                  </button>
                  <button 
                    onClick={() => navigate("/registration")}
                    className="auth-btn secondary"
                  >
                    Регистрация
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="account-container">
      {/* Герой-секция */}
      <div className="account-hero">
        <div className="hero-background">
        </div>
        <div className="hero-content">
          <h1 className="hero-title">Мой Аккаунт</h1>
          <p className="hero-subtitle">Добро пожаловать в личный кабинет, {user?.username || "Пользователь"}!</p>
          
          <div className="account-stats">
            <div className="stat-card">
              <div className="stat-number">1</div>
              <div className="stat-label">Активный аккаунт</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{user?.memberSince || "2024"}</div>
              <div className="stat-label">Год регистрации</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{user?.accountType || "Стандарт"}</div>
              <div className="stat-label">Тип аккаунта</div>
            </div>
          </div>
        </div>
      </div>

      {/* Секция профиля */}
      <div className="profile-section">
        <div className="section-title">
          <h2>Профиль пользователя</h2>
          <div className="line"></div>
        </div>

        <div className="profile-content">
          <div className="profile-card">
            <div className="card-header">
              <h3>Личная информация</h3>
              <button 
                onClick={handleEditToggle}
                className="edit-btn"
              >
                {isEditing ? "Отменить" : "Редактировать"}
              </button>
            </div>
            
            <div className="profile-info">
              <div className="info-row">
                <span className="info-label">Имя пользователя:</span>
                {isEditing ? (
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    className="edit-input"
                  />
                ) : (
                  <span className="info-value">{user?.username || "Не указано"}</span>
                )}
              </div>
              
              <div className="info-row">
                <span className="info-label">Электронная почта:</span>
                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="edit-input"
                  />
                ) : (
                  <span className="info-value">{user?.email || "Не указано"}</span>
                )}
              </div>
              
              <div className="info-row">
                <span className="info-label">Дата регистрации:</span>
                <span className="info-value">
                  {user?.createdAt ? new Date(user.createdAt).toLocaleDateString('ru-RU') : "Не указано"}
                </span>
              </div>
              
              <div className="info-row">
                <span className="info-label">Статус аккаунта:</span>
                <span className="info-value status-active">Активен</span>
              </div>
            </div>

            {isEditing && (
              <div className="edit-actions">
                <button onClick={handleSave} className="save-btn">
                  Сохранить изменения
                </button>
              </div>
            )}
          </div>

          <div className="profile-card">
            <div className="card-header">
              <h3>Настройки безопасности</h3>
            </div>
            
            <div className="security-options">
              <div className="security-section">
                <h4 style={{ marginBottom: '15px', color: '#4e1e7e' }}>Смена пароля</h4>
                <input
                  type="password"
                  name="currentPassword"
                  value={passwordData.currentPassword}
                  onChange={handlePasswordChange}
                  placeholder="Текущий пароль"
                  className="edit-input"
                  style={{ marginBottom: '10px', width: '100%' }}
                />
                <input
                  type="password"
                  name="newPassword"
                  value={passwordData.newPassword}
                  onChange={handlePasswordChange}
                  placeholder="Новый пароль"
                  className="edit-input"
                  style={{ marginBottom: '10px', width: '100%' }}
                />
                <input
                  type="password"
                  name="confirmPassword"
                  value={passwordData.confirmPassword}
                  onChange={handlePasswordChange}
                  placeholder="Подтвердите новый пароль"
                  className="edit-input"
                  style={{ marginBottom: '15px', width: '100%' }}
                />
                <button onClick={handleChangePassword} className="save-btn" style={{ width: '100%' }}>
                  Сменить пароль
                </button>
              </div>
              
              <button className="security-btn" onClick={handleNotificationsToggle}>
                <span className="btn-text">
                  Уведомления по почте: {notificationsEnabled ? 'Включены' : 'Выключены'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Секция действий */}
      <div className="actions-section">
        <div className="logout-section">
          <p className="logout-text">
            Завершите сеанс, если вы закончили работу с аккаунтом.
          </p>
          <button onClick={handleLogout} className="logout-btn">
            Выйти из аккаунта
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;