import { useNavigate } from 'react-router-dom';
import './Home.css';

export default function Home() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">🌸 Welcome to Big Sister Talk 🌸</h1>
          <p className="hero-subtitle">
            Your safe space for growth, support, and empowerment
          </p>
        </div>
      </section>

      {/* Navigation Cards Section */}
      <section className="navigation-section">
        <h2 className="section-title">Explore Your Journey</h2>
        
        <div className="nav-cards-grid">
          {/* Bloom Era Card */}
          <div 
            className="nav-card bloom-card"
            onClick={() => handleNavigate('/bloom-era')}
          >
            <div className="card-icon">💕</div>
            <h3 className="card-title">The Bloom Era</h3>
            <p className="card-age">Ages 12-16</p>
            <p className="card-description">
              Discover yourself, build confidence, and embrace your journey 
              of self-growth and empowerment.
            </p>
            <ul className="card-features">
              <li>💖 Emotional Wellness</li>
              <li>🌺 Body Positivity</li>
              <li>🎨 Creative Expression</li>
              <li>📚 Online Safety</li>
            </ul>
            <button className="card-button bloom-button">
              Enter Bloom Era →
            </button>
          </div>

          {/* Glow Era Card */}
          <div 
            className="nav-card glow-card"
            onClick={() => handleNavigate('/glow-era')}
          >
            <div className="card-icon">✨</div>
            <h3 className="card-title">The Glow Era</h3>
            <p className="card-age">Ages 17-25</p>
            <p className="card-description">
              Navigate independence, build your career, and shine as you 
              create the life you've always dreamed of.
            </p>
            <ul className="card-features">
              <li>💖 Mental Wellness</li>
              <li>🌺 Self-Care Routines</li>
              <li>💼 Career Development</li>
              <li>🎨 Social Connections</li>
            </ul>
            <button className="card-button glow-button">
              Enter Glow Era →
            </button>
          </div>

          {/* Resources Card */}
          <div 
            className="nav-card resources-card"
            onClick={() => handleNavigate('/resources')}
          >
            <div className="card-icon">📚</div>
            <h3 className="card-title">Resources</h3>
            <p className="card-age">For Everyone</p>
            <p className="card-description">
              Access helpful tools, crisis support, educational materials, 
              and wellness resources for your journey.
            </p>
            <ul className="card-features">
              <li>🆘 Crisis Support</li>
              <li>💡 Educational Tools</li>
              <li>🌟 Wellness Resources</li>
              <li>📖 Learning Materials</li>
            </ul>
            <button className="card-button resources-button">
              View Resources →
            </button>
          </div>
        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="quick-actions-section">
        <h2 className="section-title">Quick Actions</h2>
        <div className="quick-actions-grid">
          <button 
            className="quick-action-btn"
            onClick={() => handleNavigate('/chatbot')}
          >
            <span className="action-icon">💬</span>
            <span className="action-text">Chat with Big Sister</span>
          </button>
          <button 
            className="quick-action-btn"
            onClick={() => handleNavigate('/mood')}
          >
            <span className="action-icon">😊</span>
            <span className="action-text">Track Your Mood</span>
          </button>
          <button 
            className="quick-action-btn"
            onClick={() => handleNavigate('/avatar')}
          >
            <span className="action-icon">👤</span>
            <span className="action-text">Customize Avatar</span>
          </button>
          <button 
            className="quick-action-btn"
            onClick={() => handleNavigate('/resources')}
          >
            <span className="action-icon">⚙️</span>
            <span className="action-text">Resources</span>
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="about-home-section">
        <div className="about-content">
          <h2>💝 About Big Sister Talk</h2>
          <p>
            Big Sister Talk is your personal companion for navigating life's journey. 
            Whether you're in your Bloom Era discovering yourself or in your Glow Era 
            building your future, we're here to support you with guidance, resources, 
            and a safe space to grow. Join thousands of young women on their journey 
            to empowerment and self-discovery.
          </p>
        </div>
      </section>
    </div>
  );
}