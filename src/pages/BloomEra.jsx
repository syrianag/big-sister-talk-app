import { useNavigate } from 'react-router-dom';

export default function BloomEra() {
  const navigate = useNavigate();

  const sections = [
    { id: 'emotional', name: 'Emotional', icon: '💖', desc: 'Feelings & Confidence' },
    { id: 'physical', name: 'Physical', icon: '🌺', desc: 'Health & Body Positivity' },
    { id: 'funtime', name: 'Funtime', icon: '🎨', desc: 'Creative Hobbies & Games' },
    { id: 'knowledge', name: 'Knowledge', icon: '📚', desc: 'Online Safety & Learning' },
  ];

  return (
    <div className="era-page">
      <div className="era-header">
        <h1>💕 The Bloom Era</h1>
        <p className="era-subtitle">Ages 12-16 • Self-growth & Confidence</p>
      </div>

      <div className="era-content">
        <div className="era-card">
          <h2>🌸 Welcome to Your Bloom Era!</h2>
          <p>
            This is your time to discover who you are, build confidence, and grow into 
            the amazing person you're meant to be. We're here to support you every step 
            of the way!
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