import { getStoredData } from './storage';

export const getContent = (ageCategory, section) => {
  if (ageCategory === '12-16') {
    return getTeenContent(section);
  } else {
    return getYoungAdultContent(section);
  }
};

const getTeenContent = (section) => {
  switch (section) {
    case 'emotional':
      return [
        {
          title: 'Managing Your Feelings',
          description: 'It\'s completely normal to experience a wide range of emotions. Here\'s how to navigate them.',
          tips: [
            'Take deep breaths when you feel overwhelmed',
            'Write in a journal to express your feelings',
            'Talk to someone you trust - a friend, family member, or counselor',
            'Remember that feelings are temporary and valid',
            'Practice self-compassion - be kind to yourself'
          ],
          activities: [
            'Create a feelings chart and track your emotions',
            'Write a letter to your future self',
            'Practice gratitude by listing 3 things you\'re thankful for each day'
          ]
        },
        {
          title: 'Building Confidence',
          description: 'Confidence grows with practice and self-acceptance.',
          tips: [
            'Celebrate your small wins',
            'Focus on your strengths and talents',
            'Surround yourself with positive people',
            'Set realistic goals and work towards them',
            'Practice positive self-talk'
          ],
          activities: [
            'Create a "strengths" list and add to it weekly',
            'Try something new that scares you (safely!)',
            'Write down compliments you receive'
          ]
        },
        {
          title: 'Navigating Friendships',
          description: 'Healthy friendships are built on respect, trust, and mutual support.',
          tips: [
            'Be yourself - authentic friendships are the best',
            'Set boundaries and respect others\' boundaries',
            'Communicate openly and honestly',
            'It\'s okay to outgrow friendships',
            'Quality over quantity - a few good friends is enough'
          ],
          activities: [
            'Write a thank-you note to a friend',
            'Plan a fun activity with friends',
            'Reflect on what you value in friendships'
          ]
        }
      ];
    
    case 'physical':
      return [
        {
          title: 'Healthy Habits',
          description: 'Taking care of your body helps you feel your best.',
          tips: [
            'Drink plenty of water throughout the day',
            'Get 8-10 hours of sleep each night',
            'Move your body in ways that feel good',
            'Eat balanced meals with fruits and vegetables',
            'Take breaks from screens'
          ],
          activities: [
            'Create a daily routine that includes movement',
            'Try a new healthy recipe',
            'Go for a walk in nature'
          ]
        },
        {
          title: 'Body Positivity',
          description: 'Your body is amazing and unique - embrace it!',
          tips: [
            'Focus on what your body can do, not how it looks',
            'Unfollow accounts that make you feel bad about yourself',
            'Practice self-care and self-love',
            'Remember that all bodies are beautiful',
            'Surround yourself with body-positive messages'
          ],
          activities: [
            'Write a love letter to your body',
            'Create a body-positive playlist',
            'Practice positive affirmations in the mirror'
          ]
        }
      ];
    
    case 'funtime':
      return [
        {
          title: 'Creative Hobbies',
          description: 'Express yourself through creative activities!',
          tips: [
            'Try drawing, painting, or digital art',
            'Write stories, poetry, or songs',
            'Learn a musical instrument',
            'Try photography or videography',
            'Experiment with different creative mediums'
          ],
          activities: [
            'Start a creative journal',
            'Join an art club or online community',
            'Create something for a friend'
          ]
        },
        {
          title: 'Fun Challenges',
          description: 'Challenge yourself and have fun!',
          tips: [
            'Try a 30-day challenge (reading, drawing, etc.)',
            'Learn a new skill online',
            'Start a hobby with friends',
            'Join a club or group activity',
            'Explore your interests without pressure'
          ],
          activities: [
            'Create a challenge tracker',
            'Share your progress with friends',
            'Celebrate your achievements'
          ]
        }
      ];
    
    case 'knowledge':
      return [
        {
          title: 'Online Safety',
          description: 'Stay safe while exploring the digital world.',
          tips: [
            'Never share personal information online',
            'Use strong, unique passwords',
            'Be careful about what you post - it\'s permanent',
            'Don\'t meet strangers from the internet alone',
            'Tell a trusted adult if something makes you uncomfortable'
          ],
          activities: [
            'Review your privacy settings on social media',
            'Learn about digital citizenship',
            'Create a safety checklist'
          ]
        },
        {
          title: 'Fun Learning Tips',
          description: 'Learning can be fun and exciting!',
          tips: [
            'Find study methods that work for you',
            'Take breaks during study sessions',
            'Use apps and games to make learning fun',
            'Study with friends when possible',
            'Ask questions - curiosity is a superpower!'
          ],
          activities: [
            'Create a study schedule that works for you',
            'Try the Pomodoro technique (25 min study, 5 min break)',
            'Teach someone else what you learned'
          ]
        }
      ];
    
    default:
      return [];
  }
};

const getYoungAdultContent = (section) => {
  switch (section) {
    case 'emotional':
      return [
        {
          title: 'Stress Management',
          description: 'Learn healthy ways to manage stress and maintain balance.',
          tips: [
            'Practice mindfulness and meditation',
            'Set boundaries in all areas of your life',
            'Learn to say no without guilt',
            'Create a self-care routine',
            'Seek professional help when needed'
          ],
          activities: [
            'Start a meditation practice (try apps like Headspace or Calm)',
            'Create a stress-relief toolkit',
            'Practice deep breathing exercises daily'
          ]
        },
        {
          title: 'Emotional Awareness',
          description: 'Understanding your emotions helps you navigate life better.',
          tips: [
            'Practice emotional intelligence',
            'Identify your triggers and patterns',
            'Express emotions in healthy ways',
            'Don\'t suppress your feelings',
            'Seek therapy or counseling if needed'
          ],
          activities: [
            'Keep an emotion journal',
            'Practice identifying emotions in yourself and others',
            'Learn about emotional regulation techniques'
          ]
        }
      ];
    
    case 'physical':
      return [
        {
          title: 'Wellness Routines',
          description: 'Build sustainable wellness habits for long-term health.',
          tips: [
            'Create a morning and evening routine',
            'Prioritize sleep (7-9 hours)',
            'Find exercise you enjoy',
            'Eat mindfully and nourish your body',
            'Schedule regular health check-ups'
          ],
          activities: [
            'Design your ideal wellness routine',
            'Try different types of exercise to find what you love',
            'Meal prep for the week'
          ]
        },
        {
          title: 'Healthy Living',
          description: 'Small changes lead to big results.',
          tips: [
            'Stay hydrated - carry a water bottle',
            'Limit processed foods',
            'Practice portion control',
            'Get outside and enjoy nature',
            'Listen to your body\'s needs'
          ],
          activities: [
            'Track your water intake',
            'Try meal planning',
            'Go for a nature walk weekly'
          ]
        }
      ];
    
    case 'careers':
      return [
        {
          title: 'Resume Tips',
          description: 'Create a resume that stands out.',
          tips: [
            'Tailor your resume to each job application',
            'Use action verbs to describe your experience',
            'Keep it concise (1-2 pages)',
            'Include relevant keywords from job descriptions',
            'Proofread carefully - no typos!'
          ],
          activities: [
            'Update your resume with recent experience',
            'Get feedback from mentors or career counselors',
            'Create different versions for different industries'
          ]
        },
        {
          title: 'Job Preparation',
          description: 'Prepare yourself for career success.',
          tips: [
            'Research companies before interviews',
            'Practice common interview questions',
            'Prepare thoughtful questions to ask',
            'Follow up after interviews',
            'Build your professional network'
          ],
          activities: [
            'Create a LinkedIn profile',
            'Practice mock interviews',
            'Attend networking events or career fairs'
          ]
        },
        {
          title: 'Networking Guidance',
          description: 'Build meaningful professional connections.',
          tips: [
            'Be genuine and authentic',
            'Offer value before asking for help',
            'Follow up after meeting someone',
            'Join professional groups or associations',
            'Maintain relationships over time'
          ],
          activities: [
            'Reach out to someone in your desired field',
            'Join a professional organization',
            'Attend a networking event'
          ]
        }
      ];
    
    case 'funtime':
      return [
        {
          title: 'Social Ideas',
          description: 'Maintain a healthy social life while adulting.',
          tips: [
            'Schedule regular friend dates',
            'Try new activities with friends',
            'Join clubs or groups with similar interests',
            'Host small gatherings',
            'Explore your city or town'
          ],
          activities: [
            'Plan a monthly friend activity',
            'Try a new restaurant or cafe',
            'Join a book club or hobby group'
          ]
        },
        {
          title: 'Hobbies & Interests',
          description: 'Keep your passions alive!',
          tips: [
            'Make time for hobbies regularly',
            'Try new hobbies without pressure',
            'Combine hobbies with socializing',
            'Don\'t monetize everything - some things are just for fun',
            'Explore creative outlets'
          ],
          activities: [
            'Start a new hobby this month',
            'Join a class or workshop',
            'Dedicate time weekly to your interests'
          ]
        },
        {
          title: 'Burnout Prevention',
          description: 'Prevent burnout by prioritizing rest and fun.',
          tips: [
            'Schedule downtime in your calendar',
            'Learn to disconnect from work',
            'Take regular breaks throughout the day',
            'Prioritize activities that recharge you',
            'Set boundaries around your time'
          ],
          activities: [
            'Create a self-care schedule',
            'Plan a day of complete rest',
            'Identify activities that energize you'
          ]
        }
      ];
    
    default:
      return [];
  }
};