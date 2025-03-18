import React from 'react';
import database from '../database';

interface Equipment {
  id: string;
  name: string;
  category: string;
  imageUrl: string;
  description: string;
  difficulty: string;
  price: string;
  bestFor: string[];
}

export default function Equipment(): JSX.Element {
  return (
    <div className="equipment">
      <div className="equipment-header">
        <h1>Fishing Equipment Guide</h1>
        <p>
          Find the perfect gear for your fishing adventures. From beginner-friendly options to professional equipment,
          we've got everything you need to get started or upgrade your setup.
        </p>
      </div>

      <div className="category-section">
        <h2>Fishing Rods</h2>
        <div className="equipment-grid">
          {database.equipment.rods.map((rod: Equipment) => (
            <div key={rod.id} className="equipment-card">
              <div className="equipment-image">
                <img src={rod.imageUrl} alt={rod.name} />
                <span className={`difficulty-badge ${rod.difficulty.toLowerCase()}`}>
                  {rod.difficulty}
                </span>
                <span className="price-tag">{rod.price}</span>
              </div>
              <div className="equipment-content">
                <h3>{rod.name}</h3>
                <p>{rod.description}</p>
                <div className="best-for">
                  <h4>Best For:</h4>
                  <div className="tags">
                    {rod.bestFor.map((item: string, index: number) => (
                      <span key={index} className="tag">{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="category-section">
        <h2>Fishing Reels</h2>
        <div className="equipment-grid">
          {database.equipment.reels.map((reel: Equipment) => (
            <div key={reel.id} className="equipment-card">
              <div className="equipment-image">
                <img src={reel.imageUrl} alt={reel.name} />
                <span className={`difficulty-badge ${reel.difficulty.toLowerCase()}`}>
                  {reel.difficulty}
                </span>
                <span className="price-tag">{reel.price}</span>
              </div>
              <div className="equipment-content">
                <h3>{reel.name}</h3>
                <p>{reel.description}</p>
                <div className="best-for">
                  <h4>Best For:</h4>
                  <div className="tags">
                    {reel.bestFor.map((item: string, index: number) => (
                      <span key={index} className="tag">{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="category-section">
        <h2>Lures and Baits</h2>
        <div className="equipment-grid">
          {database.equipment.lures.map((lure: Equipment) => (
            <div key={lure.id} className="equipment-card">
              <div className="equipment-image">
                <img src={lure.imageUrl} alt={lure.name} />
                <span className={`difficulty-badge ${lure.difficulty.toLowerCase()}`}>
                  {lure.difficulty}
                </span>
                <span className="price-tag">{lure.price}</span>
              </div>
              <div className="equipment-content">
                <h3>{lure.name}</h3>
                <p>{lure.description}</p>
                <div className="best-for">
                  <h4>Best For:</h4>
                  <div className="tags">
                    {lure.bestFor.map((item: string, index: number) => (
                      <span key={index} className="tag">{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 