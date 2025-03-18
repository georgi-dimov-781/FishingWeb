import React, { useState } from 'react';
import database from '../database';

interface Comment {
  user: string;
  text: string;
  date: string;
}

interface Post {
  id: string;
  author: string;
  title: string;
  content: string;
  date: string;
  likes: number;
  imageUrl: string;
  comments: Comment[];
}

interface NewPost {
  title: string;
  content: string;
  imageUrl: string;
}

export default function Community(): JSX.Element {
  const [newComment, setNewComment] = useState<string>('');
  const [activePost, setActivePost] = useState<string | null>(null);
  const [newPost, setNewPost] = useState<NewPost>({
    title: '',
    content: '',
    imageUrl: ''
  });
  const [showNewPostForm, setShowNewPostForm] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<'date' | 'likes'>('date');
  const [posts, setPosts] = useState<Post[]>(database.communityPosts);

  const handleCommentSubmit = (postId: string) => {
    setPosts(prevPosts => prevPosts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          comments: [...post.comments, {
            user: 'CurrentUser', // In a real app, this would come from auth
            text: newComment,
            date: new Date().toISOString().split('T')[0]
          }]
        };
      }
      return post;
    }));
    setNewComment('');
    setActivePost(null);
  };

  const handleNewPostSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newPostData: Post = {
      id: `post${posts.length + 1}`,
      author: 'CurrentUser', // In a real app, this would come from auth
      title: newPost.title,
      content: newPost.content,
      date: new Date().toISOString().split('T')[0],
      likes: 0,
      imageUrl: newPost.imageUrl,
      comments: []
    };
    setPosts(prevPosts => [newPostData, ...prevPosts]);
    setNewPost({ title: '', content: '', imageUrl: '' });
    setShowNewPostForm(false);
  };

  const handleLike = (postId: string) => {
    setPosts(prevPosts => prevPosts.map(post => {
      if (post.id === postId) {
        return { ...post, likes: post.likes + 1 };
      }
      return post;
    }));
  };

  const sortedPosts = [...posts].sort((a, b) => {
    if (sortBy === 'date') {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    return b.likes - a.likes;
  });

  return (
    <div className="community">
      <div className="community-header">
        <h1>Fishing Community</h1>
        <p className="community-intro">
          Share your fishing experiences, ask questions, and connect with fellow anglers.
        </p>
        <div className="community-actions">
          <button 
            className="new-post-button"
            onClick={() => setShowNewPostForm(!showNewPostForm)}
          >
            {showNewPostForm ? 'Cancel Post' : 'Create New Post'}
          </button>
          <select 
            className="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'date' | 'likes')}
          >
            <option value="date">Sort by Date</option>
            <option value="likes">Sort by Likes</option>
          </select>
        </div>
      </div>

      {showNewPostForm && (
        <div className="new-post-form">
          <h2>Create a New Post</h2>
          <form onSubmit={handleNewPostSubmit}>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                value={newPost.title}
                onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="content">Content</label>
              <textarea
                id="content"
                value={newPost.content}
                onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="imageUrl">Image URL (optional)</label>
              <input
                type="text"
                id="imageUrl"
                value={newPost.imageUrl}
                onChange={(e) => setNewPost({ ...newPost, imageUrl: e.target.value })}
              />
            </div>
            <button type="submit" className="submit-button">Post</button>
          </form>
        </div>
      )}

      <div className="posts-grid">
        {sortedPosts.map(post => (
          <div key={post.id} className="post-card">
            {post.imageUrl && (
              <div className="post-image">
                <img src={post.imageUrl} alt={post.title} />
              </div>
            )}
            <div className="post-content">
              <div className="post-header">
                <h3>{post.title}</h3>
                <div className="post-meta">
                  Posted by {post.author} on {post.date}
                </div>
              </div>
              <p className="post-text">{post.content}</p>
              <div className="post-stats">
                <button 
                  className="like-button"
                  onClick={() => handleLike(post.id)}
                >
                  ❤️ {post.likes}
                </button>
                <span className="comments">{post.comments.length} comments</span>
              </div>

              <div className="comments-section">
                {post.comments.map((comment, index) => (
                  <div key={index} className="comment">
                    <div className="comment-header">
                      <strong>{comment.user}</strong>
                      <span className="comment-date">{comment.date}</span>
                    </div>
                    <p>{comment.text}</p>
                  </div>
                ))}
              </div>

              {activePost === post.id ? (
                <div className="comment-form">
                  <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Write a comment..."
                  />
                  <div className="comment-form-actions">
                    <button 
                      className="cancel-button"
                      onClick={() => {
                        setActivePost(null);
                        setNewComment('');
                      }}
                    >
                      Cancel
                    </button>
                    <button 
                      className="submit-button"
                      onClick={() => handleCommentSubmit(post.id)}
                      disabled={!newComment.trim()}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              ) : (
                <button 
                  className="comment-button"
                  onClick={() => setActivePost(post.id)}
                >
                  Add a comment
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
