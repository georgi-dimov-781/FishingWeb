import React from 'react';
import database from '../database';
import '../styles/components/_success-stories.scss';

const SuccessStories: React.FC = () => {
  const stories = database.successStories;

  return (
    <div className="success-stories">
      <h2>Featured Catches</h2>
      <div className="stories-grid">
        {stories.map((story) => (
          <div key={story.id} className="story-card">
            <div className="story-image-container">
              <img src={story.imageUrl} alt={story.title} className="story-image" />
              <div className="story-overlay">
                <span className="fish-weight">{story.weight}</span>
              </div>
            </div>
            <div className="story-content">
              <h3>{story.title}</h3>
              <div className="story-meta">
                <span className="author">By {story.author}</span>
                <span className="date">{new Date(story.date).toLocaleDateString()}</span>
                <span className="location">{story.location}</span>
              </div>
              <p className="fish-species">{story.fishSpecies}</p>
              <p className="story-text">{story.content}</p>
              <div className="story-actions">
                <button className="like-btn">
                  <span className="like-count">{story.likes}</span> Likes
                </button>
                <button className="comment-btn">Comments</button>
              </div>
              <div className="comments-section">
                {story.comments.map((comment, index) => (
                  <div key={index} className="comment">
                    <span className="comment-user">{comment.user}</span>
                    <p className="comment-text">{comment.text}</p>
                    <span className="comment-date">{new Date(comment.date).toLocaleDateString()}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessStories; 