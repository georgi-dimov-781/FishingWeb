import React from 'react';
import database from '../database';
import '../styles/components/_fishing-events.scss';

const FishingEvents: React.FC = () => {
  const events = database.fishingEvents;

  return (
    <div className="fishing-events-sidebar">
      <h3>Upcoming Events</h3>
      <div className="events-list">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <img src={event.imageUrl} alt={event.title} className="event-image" />
            <div className="event-content">
              <h4>{event.title}</h4>
              <p className="event-date">{new Date(event.date).toLocaleDateString()}</p>
              <p className="event-location">{event.location}</p>
              <p className="event-description">{event.description}</p>
              <div className="event-details">
                <span className="entry-fee">{event.entryFee}</span>
                <span className="participants">
                  {event.currentParticipants}/{event.maxParticipants} participants
                </span>
              </div>
              <button className="register-btn">Register Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FishingEvents; 