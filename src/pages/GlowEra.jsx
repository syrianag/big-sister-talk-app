import { useNavigate } from 'react-router-dom';
import './GlowEra.css';

export default function GlowEra() {
  const navigate = useNavigate();

  const sections = [
    { id: 'emotional', name: 'Emotional', icon: '💖', desc: 'Stress & Awareness' },
    { id: 'physical', name: 'Physical Health', icon: '🌺', desc: 'Wellness Routines' },
    { id: 'careers', name: 'Careers', icon: '💼', desc: 'Resume & Job Prep' },
    { id: 'funtime', name: 'Funtime', icon: '🎨', desc: 'Social & Hobbies' },
  ];

  return (
    <div className="era-page">
      <div className="era-header">
        <h1>✨ The Glow Era</h1>
        <p className="era-subtitle">Ages 17-25 • Independence & Career</p>
      </div>

      <div className="era-content">
        <div className="era-card">
          <h2>✨ Welcome to Your Glow Era!</h2>
          <p>
            This is your time to shine! Navigate independence, build your career, 
            and create the life you've always dreamed of. Let's glow together!
          </p>
        </div>

        {/* Quick Actions */}
        <div className="quick-actions">
          <button className="action-card" onClick={() => navigate('/chatbot')}>
            <span className="action-icon">💬</span>
            <span className="action-title">Big Sister</span>
            <span className="action-desc">Chat with your mentor</span>
          </button>
          <button className="action-card" onClick={() => navigate('/mood')}>
            <span className="action-icon">😊</span>
            <span className="action-title">Mood Tracker</span>
            <span className="action-desc">Track your emotions</span>
          </button>
          <button className="action-card" onClick={() => navigate('/avatar')}>
            <span className="action-icon">👤</span>
            <span className="action-title">Avatar</span>
            <span className="action-desc">Customize your look</span>
          </button>
        </div>

        {/* Content Sections */}
        <div className="content-sections">
          <h2 className="sections-title">Explore Content</h2>
          <div className="sections-grid">
            {sections.map((section) => (
              <button
                key={section.id}
                className="section-card"
                onClick={() => navigate(`/content-${section.id}`)}
              >
                <span className="section-icon">{section.icon}</span>
                <span className="section-name">{section.name}</span>
                <span className="section-desc">{section.desc}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}