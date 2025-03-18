import React, { useState } from 'react';
import database from '../database';

interface Technique {
  id: string;
  name: string;
  imageUrl: string;
  difficulty: string;
  description: string;
  steps: string[];
  bestFor: string[];
  tips: string[];
}

export default function Techniques() {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedTechnique, setSelectedTechnique] = useState<Technique | null>(null);

  const filteredTechniques = database.techniques.filter(technique => {
    const matchesDifficulty = selectedDifficulty === 'all' || technique.difficulty === selectedDifficulty;
    const matchesSearch = technique.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         technique.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDifficulty && matchesSearch;
  });

  return (
    <div className="techniques">
      <div className="techniques-header">
        <h1>Master Your Fishing Techniques</h1>
        <p className="techniques-intro">
          Whether you're just starting out or looking to expand your skills, these proven fishing techniques will help you become a more successful angler.
        </p>
        
        <div className="techniques-filters">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search techniques..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
          >
            <option value="all">All Difficulties</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>
      </div>

      <div className="techniques-grid">
        {filteredTechniques.map(technique => (
          <div 
            key={technique.id} 
            className={`technique-card ${selectedTechnique?.id === technique.id ? 'selected' : ''}`}
            onClick={() => setSelectedTechnique(technique)}
          >
            <div className="technique-image">
              <img src={technique.imageUrl} alt={technique.name} />
              <span className={`difficulty-badge ${technique.difficulty.toLowerCase()}`}>
                {technique.difficulty}
              </span>
            </div>
            <div className="technique-content">
              <h3>{technique.name}</h3>
              <p>{technique.description}</p>
              
              <div className="best-for">
                <h4>Best For:</h4>
                <div className="tags">
                  {technique.bestFor.map((item, index) => (
                    <span key={index} className="tag">{item}</span>
                  ))}
                </div>
              </div>

              {selectedTechnique?.id === technique.id && (
                <div className="technique-details">
                  <div className="steps">
                    <h4>Step-by-Step Guide:</h4>
                    <ol>
                      {technique.steps.map((step, index) => (
                        <li key={index}>{step}</li>
                      ))}
                    </ol>
                  </div>

                  {technique.tips && (
                    <div className="tips">
                      <h4>Pro Tips:</h4>
                      <ul>
                        {technique.tips.map((tip, index) => (
                          <li key={index}>{tip}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
