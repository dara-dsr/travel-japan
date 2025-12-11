
import React from 'react';
import './Island.css';

const IslandStats = () => {
  const stats = [
    { id: 1, value: "6852", label: "ВСЕГО ОСТРОВОВ" },
    { id: 2, value: "6848", label: "ОТДАЛЁННЫХ ОСТРОВОВ" },
    { id: 3, value: "416", label: "НАСЕЛЁННЫХ ОСТРОВОВ" },
    { id: 4, value: "6432", label: "НЕОБИТАЕМЫХ" }
  ];

  const mainIslands = [
    { id: 1, name: "ХОНСЮ" },
    { id: 2, name: "ХОККАЙДО" },
    { id: 3, name: "КЮСЮ" },
    { id: 4, name: "СИКОКУ" }
  ];

  return (
    <div className="stats-container">
      <div className="stats-grid">
        {stats.map((stat) => (
          <div key={stat.id} className="stat-card">
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
      
      <div className="main-stats-section">
        <div className="main-stats-title">4 ГЛАВНЫХ ОСТРОВА</div>
        <div className="main-stats-list">
          {mainIslands.map((island) => (
            <div key={island.id} className="stats-item">
              <span className="stats-number">{island.id}.</span>
              <span className="stats-name">{island.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IslandStats;