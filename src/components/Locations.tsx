import React, { useState } from 'react';
import database from '../database';

interface Location {
  id: string;
  name: string;
  imageUrl: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  description: string;
  fishSpecies: string[];
  bestSeasons: string[];
  difficulty: string;
  regulations: string;
  tips: string;
}

interface Filters {
  species: string;
  season: string;
  difficulty: string;
}

export default function Locations() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [filters, setFilters] = useState<Filters>({
    species: 'all',
    season: 'all',
    difficulty: 'all'
  });

  const filteredLocations = database.locations.filter(location => {
    const matchesSpecies = filters.species === 'all' || location.fishSpecies.includes(filters.species);
    const matchesSeason = filters.season === 'all' || location.bestSeasons.includes(filters.season);
    const matchesDifficulty = filters.difficulty === 'all' || location.difficulty === filters.difficulty;
    return matchesSpecies && matchesSeason && matchesDifficulty;
  });

  const uniqueSpecies = Array.from(new Set(database.locations.flatMap(loc => loc.fishSpecies)));
  const uniqueSeasons = Array.from(new Set(database.locations.flatMap(loc => loc.bestSeasons)));
  const uniqueDifficulties = Array.from(new Set(database.locations.map(loc => loc.difficulty)));

  return (
    <div className="locations-page">
      <h1>Fishing Locations</h1>
      <p className="locations-intro">
        Discover the best fishing spots in your area. Each location includes details about available species, 
        best seasons, and difficulty level to help you plan your next fishing trip.
      </p>

      <div className="locations-filters">
        <select
          value={filters.species}
          onChange={(e) => setFilters({ ...filters, species: e.target.value })}
        >
          <option value="all">All Species</option>
          {uniqueSpecies.map(species => (
            <option key={species} value={species}>{species}</option>
          ))}
        </select>

        <select
          value={filters.season}
          onChange={(e) => setFilters({ ...filters, season: e.target.value })}
        >
          <option value="all">All Seasons</option>
          {uniqueSeasons.map(season => (
            <option key={season} value={season}>{season}</option>
          ))}
        </select>

        <select
          value={filters.difficulty}
          onChange={(e) => setFilters({ ...filters, difficulty: e.target.value })}
        >
          <option value="all">All Difficulties</option>
          {uniqueDifficulties.map(difficulty => (
            <option key={difficulty} value={difficulty}>{difficulty}</option>
          ))}
        </select>
      </div>

      <div className="locations-container">
        <div className="locations-list">
          {filteredLocations.map(location => (
            <div
              key={location.id}
              className={`location-card ${selectedLocation?.id === location.id ? 'selected' : ''}`}
              onClick={() => setSelectedLocation(location)}
            >
              <div className="location-image">
                <img src={location.imageUrl} alt={location.name} />
                <span className={`difficulty-badge ${location.difficulty.toLowerCase()}`}>
                  {location.difficulty}
                </span>
              </div>
              <div className="location-info">
                <h3>{location.name}</h3>
                <p>{location.description}</p>
                <div className="location-tags">
                  {location.bestSeasons.map((season, index) => (
                    <span key={index} className="tag">{season}</span>
                  ))}
                  {location.fishSpecies.map((species, index) => (
                    <span key={index} className="tag">{species}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedLocation && (
          <div className="location-details">
            <div className="location-details-header">
              <h2>{selectedLocation.name}</h2>
              <button 
                className="close-button"
                onClick={() => setSelectedLocation(null)}
              >
                ×
              </button>
            </div>
            
            <div className="location-details-content">
              <img src={selectedLocation.imageUrl} alt={selectedLocation.name} />
              
              <div className="location-details-info">
                <div className="info-section">
                  <h3>Description</h3>
                  <p>{selectedLocation.description}</p>
                </div>

                <div className="info-section">
                  <h3>Available Species</h3>
                  <div className="tags">
                    {selectedLocation.fishSpecies.map((species, index) => (
                      <span key={index} className="tag">{species}</span>
                    ))}
                  </div>
                </div>

                <div className="info-section">
                  <h3>Best Seasons</h3>
                  <div className="tags">
                    {selectedLocation.bestSeasons.map((season, index) => (
                      <span key={index} className="tag">{season}</span>
                    ))}
                  </div>
                </div>

                <div className="info-section">
                  <h3>Difficulty Level</h3>
                  <span className={`tag ${selectedLocation.difficulty.toLowerCase()}`}>
                    {selectedLocation.difficulty}
                  </span>
                </div>

                <div className="info-section">
                  <h3>Regulations</h3>
                  <p>{selectedLocation.regulations}</p>
                </div>

                <div className="info-section">
                  <h3>Pro Tips</h3>
                  <p>{selectedLocation.tips}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 