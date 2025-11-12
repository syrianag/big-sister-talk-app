import { useNavigate } from 'react-router-dom';

const sectionNames = {
  emotional: 'Emotional',
  physical: 'Physical Health',
  funtime: 'Funtime',
  knowledge: 'Knowledge',
  careers: 'Careers',
};

const sectionIcons = {
  emotional: '💖',
  physical: '🌺',
  funtime: '🎨',
  knowledge: '📚',
  careers: '💼',
};

export default function ContentSection({ section }) {
  const navigate = useNavigate();

  const getContent = (ageCategory, section) => {
    // Content data structure
    const contentData = {
      bloom: {
        emotional: [
          {
            title: 'Understanding Your Feelings',
            description: 'Your emotions might feel like a rollercoaster right now, and that\'s completely normal!',
            tips: [
              'Keep a feelings journal',
              'Talk to a trusted adult',
              'Practice deep breathing when upset',
            ],
            activities: [
              'Draw your emotions',
              'Make a mood board',
              'Listen to music that matches your mood',
            ],
          },
        ],
        physical: [
          {
            title: 'Your Changing Body',
            description: 'Puberty brings many changes, and every body develops at its own pace.',
            tips: [
              'Get plenty of sleep (8-10 hours)',
              'Stay active with activities you enjoy',
              'Eat nutritious foods',
            ],
          },
        ],
        funtime: [
          {
            title: 'Creative Expression',
            description: 'Have fun and express yourself!',
            activities: [
              'Try journaling or creative writing',
              'Arts and crafts projects',
              'Dance to your favorite music',
            ],
          },
        ],
        knowledge: [
          {
            title: 'Learning About Periods',
            description: 'Understanding menstruation helps you feel more confident.',
            tips: [
              'Periods are a normal part of growing up',
              'Talk to a parent or school nurse',
              'Learn about different period products',
            ],
          },
        ],
        careers: [
          {
            title: 'Exploring Interests',
            description: 'Now is a great time to discover what you love!',
            activities: [
              'Try different hobbies',
              'Join school clubs',
              'Shadow someone with a job you find interesting',
            ],
          },
        ],
      },
      glow: {
        emotional: [
          {
            title: 'Mental Health Matters',
            description: 'Taking care of your mental health is just as important as physical health.',
            tips: [
              'Practice mindfulness and meditation',
              'Set healthy boundaries',
              'Seek support when needed',
            ],
          },
        ],
        physical: [
          {
            title: 'Period Health & Wellness',
            description: 'Managing your cycle and overall health with confidence.',
            tips: [
              'Track your cycle',
              'Exercise regularly',
              'Stay hydrated',
            ],
          },
        ],
        funtime: [
          {
            title: 'Self-Care Activities',
            description: 'Make time for things that bring you joy!',
            activities: [
              'Spa day at home',
              'Try new recipes',
              'Photography or videography',
            ],
          },
        ],
        knowledge: [
          {
            title: 'Health Education',
            description: 'Expand your knowledge about reproductive health.',
            tips: [
              'Understand your cycle phases',
              'Learn about hormones',
              'Research reliable health sources',
            ],
          },
        ],
        careers: [
          {
            title: 'Career Planning',
            description: 'Start thinking about your future path.',
            activities: [
              'Research careers of interest',
              'Volunteer in your community',
              'Develop leadership skills',
            ],
          },
        ],
      },
    };

    const ageCategory = localStorage.getItem('ageCategory') || 'bloom';
    return contentData[ageCategory]?.[section] || [];
  };

  const ageCategory = localStorage.getItem('ageCategory');

  if (!ageCategory) {
    return (
      <div className="content-section">
        <button className="back-btn" onClick={() => navigate('/')}>← Back</button>
        <p>Please select your age category first!</p>
      </div>
    );
  }

  const content = getContent(ageCategory, section);

  return (
    <div className="content-section">
      <div className="content-header">
        <button className="back-btn" onClick={() => navigate('/')}>← Back</button>
        <h2>
          <span className="section-icon-large">{sectionIcons[section]}</span>
          {sectionNames[section]}
        </h2>
      </div>

      <div className="content-items">
        {content.map((item, idx) => (
          <div key={idx} className="content-card">
            <h3 className="content-title">{item.title}</h3>
            <p className="content-description">{item.description}</p>

            {item.tips && item.tips.length > 0 && (
              <div className="content-tips">
                <h4>💡 Tips:</h4>
                <ul>
                  {item.tips.map((tip, tipIdx) => (
                    <li key={tipIdx}>{tip}</li>
                  ))}
                </ul>
              </div>
            )}

            {item.activities && item.activities.length > 0 && (
              <div className="content-activities">
                <h4>✨ Activities:</h4>
                <ul>
                  {item.activities.map((activity, actIdx) => (
                    <li key={actIdx}>{activity}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}