import React, { useState, useEffect } from 'react';
import './Resources.css';

const Resources = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Load dark mode preference from localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
      setDarkMode(true);
      document.body.classList.add('dark-mode');
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode);
    
    if (newMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  };

  // Resource categories
  const categories = [
    { id: 'all', name: 'All Resources', icon: '📚' },
    { id: 'menstrual', name: 'Menstrual Products', icon: '🩸' },
    { id: 'health', name: 'Health & Wellness', icon: '💗' },
    { id: 'education', name: 'Education', icon: '📖' },
    { id: 'support', name: 'Support Groups', icon: '🤝' },
    { id: 'apps', name: 'Helpful Apps', icon: '📱' },
  ];

  // Resources data
  const resources = [
    // Menstrual Products
    {
      id: 1,
      category: 'menstrual',
      title: 'Period Products Retailers',
      description: 'Find affordable and sustainable menstrual products',
      links: [
        { name: 'Target - Period Care', url: 'https://www.target.com/c/feminine-care/-/N-5xte0', description: 'Wide selection of pads, tampons, and cups' },
        { name: 'CVS - Feminine Care', url: 'https://www.cvs.com/shop/health-medicine/feminine-care', description: 'Pharmacy with various brands and options' },
        { name: 'Walmart - Feminine Care', url: 'https://www.walmart.com/browse/personal-care/feminine-care/1005862_1001540_1007616', description: 'Budget-friendly period products' },
        { name: 'THINX Period Underwear', url: 'https://www.shethinx.com/', description: 'Reusable period underwear' },
        { name: 'DivaCup', url: 'https://divacup.com/', description: 'Reusable menstrual cups' },
      ],
      icon: '🛍️'
    },
    {
      id: 2,
      category: 'menstrual',
      title: 'Free Period Products Programs',
      description: 'Organizations providing free menstrual products',
      links: [
        { name: 'The Period Project', url: 'https://www.theperiodproject.org/', description: 'Free products for those in need' },
        { name: 'I Support the Girls', url: 'https://isupportthegirls.org/', description: 'Distributes hygiene products to shelters' },
        { name: 'Alliance for Period Supplies', url: 'https://www.allianceforperiodsupplies.org/', description: 'National organization providing period products' },
      ],
      icon: '🎁'
    },
    // Health & Wellness
    {
      id: 3,
      category: 'health',
      title: 'Period Tracking & Health',
      description: 'Understanding your menstrual cycle and health',
      links: [
        { name: 'Planned Parenthood - Menstruation Info', url: 'https://www.plannedparenthood.org/learn/health-and-wellness/menstruation', description: 'Comprehensive period education' },
        { name: 'Mayo Clinic - Menstrual Cycle', url: 'https://www.mayoclinic.org/healthy-lifestyle/womens-health/in-depth/menstrual-cycle/art-20047186', description: 'Medical information about periods' },
        { name: 'Teen Health - Period Guide', url: 'https://kidshealth.org/en/teens/menstruation.html', description: 'Teen-friendly period information' },
      ],
      icon: '💊'
    },
    {
      id: 4,
      category: 'health',
      title: 'Mental Health Resources',
      description: 'Support for emotional wellbeing during your cycle',
      links: [
        { name: 'Crisis Text Line', url: 'https://www.crisistextline.org/', description: 'Text HOME to 741741 for support' },
        { name: 'Teen Line', url: 'https://teenlineonline.org/', description: 'Call 800-852-8336 or text TEEN to 839863' },
        { name: 'National Alliance on Mental Illness', url: 'https://www.nami.org/Your-Journey/Teens-Young-Adults', description: 'Mental health support and education' },
      ],
      icon: '🧠'
    },
    // Education
    {
      id: 5,
      category: 'education',
      title: 'Period Education Videos',
      description: 'Visual guides to understanding menstruation',
      links: [
        { name: 'Crash Course - Reproductive System', url: 'https://www.youtube.com/watch?v=RFDatCchpus', description: 'Educational video about reproduction' },
        { name: 'Ted-Ed - Menstruation', url: 'https://ed.ted.com/search?qs=menstruation', description: 'Animated educational videos' },
        { name: 'Amaze.org', url: 'https://amaze.org/', description: 'Age-appropriate sex education videos' },
      ],
      icon: '🎥'
    },
    {
      id: 6,
      category: 'education',
      title: 'Books & Articles',
      description: 'Reading materials about puberty and periods',
      links: [
        { name: 'The Care and Keeping of You', url: 'https://www.americangirl.com/care-keeping-of-you', description: 'American Girl body book for girls' },
        { name: 'Period Power by Maisie Hill', url: 'https://www.maisiehill.com/period-power', description: 'Understanding your cycle' },
        { name: 'Girlology', url: 'https://www.girlology.com/', description: 'Resource for girls and parents' },
      ],
      icon: '📚'
    },
    // Support Groups
    {
      id: 7,
      category: 'support',
      title: 'Online Communities',
      description: 'Connect with others who understand',
      links: [
        { name: 'r/Periods on Reddit', url: 'https://www.reddit.com/r/Periods/', description: 'Supportive community for period questions' },
        { name: 'Girls Health', url: 'https://www.girlshealth.gov/', description: 'Government health site for girls' },
        { name: 'Scarleteen', url: 'https://www.scarleteen.com/', description: 'Sex ed for young people' },
      ],
      icon: '💬'
    },
    // Apps
    {
      id: 8,
      category: 'apps',
      title: 'Period Tracking Apps',
      description: 'Apps to help track your menstrual cycle',
      links: [
        { name: 'Clue', url: 'https://helloclue.com/', description: 'Science-based period tracking' },
        { name: 'Flo', url: 'https://flo.health/', description: 'Period and ovulation tracker' },
        { name: 'Spot On by Planned Parenthood', url: 'https://www.plannedparenthood.org/get-care/spot-on-period-tracker', description: 'Free, private period tracker' },
      ],
      icon: '📲'
    },
    {
      id: 9,
      category: 'apps',
      title: 'Wellness Apps',
      description: 'Apps for overall health and wellbeing',
      links: [
        { name: 'Calm', url: 'https://www.calm.com/', description: 'Meditation and relaxation' },
        { name: 'Headspace', url: 'https://www.headspace.com/', description: 'Mindfulness and meditation' },
        { name: 'Sanvello', url: 'https://www.sanvello.com/', description: 'Mental health support' },
      ],
      icon: '🧘‍♀️'
    },
  ];

  // Filter resources based on category and search
  const filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="resources-container">
      {/* Header */}
      <div className="resources-header">
        <h1>
          <span className="header-icon">📚</span>
          Resources & Settings
        </h1>
        <p className="resources-subtitle">
          Find helpful resources and customize your experience
        </p>
      </div>

      {/* Settings Section */}
      <div className="settings-section">
        <h2>
          <span className="section-icon">⚙️</span>
          Settings
        </h2>
        
        <div className="setting-card">
          <div className="setting-info">
            <div className="setting-icon">{darkMode ? '🌙' : '☀️'}</div>
            <div className="setting-details">
              <h3>Theme Mode</h3>
              <p>Switch between light and dark mode for comfortable viewing</p>
            </div>
          </div>
          <button 
            className={`theme-toggle ${darkMode ? 'dark' : 'light'}`}
            onClick={toggleDarkMode}
          >
            <div className="toggle-slider"></div>
          </button>
        </div>

        {/* Placeholder for future settings */}
        <div className="setting-card coming-soon">
          <div className="setting-info">
            <div className="setting-icon">🔔</div>
            <div className="setting-details">
              <h3>Notifications</h3>
              <p>Coming soon: Set reminders for period tracking and self-care</p>
            </div>
          </div>
          <span className="badge">Coming Soon</span>
        </div>

        <div className="setting-card coming-soon">
          <div className="setting-info">
            <div className="setting-icon">🌐</div>
            <div className="setting-details">
              <h3>Language</h3>
              <p>Coming soon: Choose your preferred language</p>
            </div>
          </div>
          <span className="badge">Coming Soon</span>
        </div>
      </div>

      {/* Resources Section */}
      <div className="resources-section">
        <h2>
          <span className="section-icon">🔗</span>
          Helpful Resources
        </h2>

        {/* Search Bar */}
        <div className="search-container">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search resources..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        {/* Category Filter */}
        <div className="category-filter">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`category-btn ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              <span className="category-icon">{cat.icon}</span>
              <span className="category-name">{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Resource Cards */}
        <div className="resources-grid">
          {filteredResources.map(resource => (
            <div key={resource.id} className="resource-card">
              <div className="resource-header">
                <span className="resource-icon">{resource.icon}</span>
                <h3>{resource.title}</h3>
              </div>
              <p className="resource-description">{resource.description}</p>
              <div className="resource-links">
                {resource.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resource-link"
                  >
                    <div className="link-content">
                      <span className="link-name">{link.name}</span>
                      <span className="link-description">{link.description}</span>
                    </div>
                    <span className="link-arrow">→</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {filteredResources.length === 0 && (
          <div className="no-results">
            <span className="no-results-icon">😕</span>
            <p>No resources found matching your search.</p>
            <button 
              className="clear-search-btn"
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* Emergency Resources */}
      <div className="emergency-section">
        <h2>
          <span className="section-icon">🆘</span>
          Emergency Resources
        </h2>
        <div className="emergency-card">
          <p className="emergency-text">
            If you're in crisis or need immediate help, please reach out:
          </p>
          <div className="emergency-contacts">
            <div className="emergency-item">
              <span className="emergency-icon">📞</span>
              <div>
                <strong>Crisis Text Line:</strong> Text HOME to 741741
              </div>
            </div>
            <div className="emergency-item">
              <span className="emergency-icon">📞</span>
              <div>
                <strong>National Suicide Prevention Lifeline:</strong> 988
              </div>
            </div>
            <div className="emergency-item">
              <span className="emergency-icon">📞</span>
              <div>
                <strong>Teen Line:</strong> Call 800-852-8336 or text TEEN to 839863
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;