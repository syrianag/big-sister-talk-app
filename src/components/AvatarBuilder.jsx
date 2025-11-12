import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const defaultAvatar = {
  hairStyle: 'long',
  hairColor: '#FFB6C1',
  outfit: 'dress',
  outfitColor: '#FFC0CB',
  skinTone: '#FDBCB4',
};

export default function AvatarBuilder() {
  const navigate = useNavigate();
  const [avatar, setAvatar] = useState(defaultAvatar);

  // Load avatar from localStorage on mount
  useEffect(() => {
    const savedAvatar = localStorage.getItem('avatar');
    if (savedAvatar) {
      try {
        setAvatar(JSON.parse(savedAvatar));
      } catch (error) {
        console.error('Error loading avatar:', error);
      }
    }
  }, []);

  const updateAvatar = (key, value) => {
    const newAvatar = { ...avatar, [key]: value };
    setAvatar(newAvatar);
    // Save to localStorage
    localStorage.setItem('avatar', JSON.stringify(newAvatar));
  };

  const renderAvatar = () => {
    return (
      <div className="avatar-preview">
        <div className="avatar-face" style={{ backgroundColor: avatar.skinTone }}>
          <div className="avatar-eyes">
            <div className="eye"></div>
            <div className="eye"></div>
          </div>
          <div className="avatar-smile"></div>
        </div>
        <div 
          className={`avatar-hair ${avatar.hairStyle}`}
          style={{ backgroundColor: avatar.hairColor }}
        ></div>
        <div 
          className={`avatar-outfit ${avatar.outfit}`}
          style={{ backgroundColor: avatar.outfitColor }}
        ></div>
      </div>
    );
  };

  return (
    <div className="avatar-builder">
      <div className="avatar-header">
        <button className="back-btn" onClick={() => navigate('/')}>← Back</button>
        <h2>👤 Avatar Builder</h2>
      </div>

      <div className="avatar-content">
        <div className="avatar-display">
          {renderAvatar()}
        </div>

        <div className="avatar-controls">
          <div className="control-group">
            <label>Hair Style</label>
            <div className="option-buttons">
              {['long', 'short', 'curly', 'wavy'].map((style) => (
                <button
                  key={style}
                  className={`option-btn ${avatar.hairStyle === style ? 'active' : ''}`}
                  onClick={() => updateAvatar('hairStyle', style)}
                >
                  {style}
                </button>
              ))}
            </div>
          </div>

          <div className="control-group">
            <label>Hair Color</label>
            <div className="color-options">
              {['#FFB6C1', '#FFC0CB', '#DDA0DD', '#98D8C8', '#F7DC6F', '#FFA07A'].map((color) => (
                <button
                  key={color}
                  className="color-btn"
                  style={{ backgroundColor: color }}
                  onClick={() => updateAvatar('hairColor', color)}
                  aria-label={`Hair color ${color}`}
                />
              ))}
            </div>
            <input
              type="color"
              value={avatar.hairColor}
              onChange={(e) => updateAvatar('hairColor', e.target.value)}
              className="color-picker"
            />
          </div>

          <div className="control-group">
            <label>Outfit</label>
            <div className="option-buttons">
              {['dress', 'shirt', 'jacket', 'sweater'].map((outfit) => (
                <button
                  key={outfit}
                  className={`option-btn ${avatar.outfit === outfit ? 'active' : ''}`}
                  onClick={() => updateAvatar('outfit', outfit)}
                >
                  {outfit}
                </button>
              ))}
            </div>
          </div>

          <div className="control-group">
            <label>Outfit Color</label>
            <div className="color-options">
              {['#FFC0CB', '#FFB6C1', '#DDA0DD', '#98D8C8', '#F7DC6F', '#FFA07A'].map((color) => (
                <button
                  key={color}
                  className="color-btn"
                  style={{ backgroundColor: color }}
                  onClick={() => updateAvatar('outfitColor', color)}
                  aria-label={`Outfit color ${color}`}
                />
              ))}
            </div>
            <input
              type="color"
              value={avatar.outfitColor}
              onChange={(e) => updateAvatar('outfitColor', e.target.value)}
              className="color-picker"
            />
          </div>

          <div className="control-group">
            <label>Skin Tone</label>
            <div className="color-options">
              {['#FDBCB4', '#F1C27D', '#E0AC69', '#C68642', '#8D5524'].map((color) => (
                <button
                  key={color}
                  className="color-btn"
                  style={{ backgroundColor: color }}
                  onClick={() => updateAvatar('skinTone', color)}
                  aria-label={`Skin tone ${color}`}
                />
              ))}
            </div>
            <input
              type="color"
              value={avatar.skinTone}
              onChange={(e) => updateAvatar('skinTone', e.target.value)}
              className="color-picker"
            />
          </div>
        </div>
      </div>
    </div>
  );
}