const responses = {
  greeting: [
    "Hey there! 💕 I'm so glad you're here. How are you feeling today?",
    "Hi beautiful! 🌸 What's on your mind? I'm here to listen.",
    "Hello! ✨ I'm your Big Sister and I'm here for you. What would you like to talk about?",
  ],
  encouragement: [
    "You're doing amazing, sweetie! Remember, every small step counts. 💪",
    "I believe in you! You're stronger than you know. 🌟",
    "You've got this! Take it one day at a time. 💖",
  ],
  stress: [
    "It's okay to feel overwhelmed sometimes. Let's take some deep breaths together. 🌸",
    "Stress is temporary, but your strength is permanent. You'll get through this! 💕",
    "Remember to take breaks and be kind to yourself. Self-care isn't selfish! ✨",
  ],
  friendship: [
    "Good friendships take time and effort, but you deserve people who lift you up! 💫",
    "It's okay to outgrow friendships. You're growing, and that's beautiful! 🌸",
    "The best friendships are built on mutual respect and understanding. 💕",
  ],
  confidence: [
    "You are enough, exactly as you are. Your uniqueness is your superpower! ✨",
    "Confidence comes from within. You have everything you need already! 💪",
    "You're beautiful, inside and out. Don't let anyone tell you otherwise! 🌟",
  ],
  career: [
    "Your career journey is unique to you. Trust the process and keep learning! 💼",
    "Networking is about building genuine connections, not just collecting contacts. 🌸",
    "It's okay to not have everything figured out. Most people don't! You're doing great! ✨",
  ],
  default: [
    "I'm here for you, always. What else would you like to talk about? 💕",
    "That's a great question! Remember, you're not alone in this. 🌸",
    "I'm listening. Tell me more about how you're feeling. ✨",
  ],
};

export const getChatbotResponse = (message, ageCategory) => {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
    return getRandomResponse('greeting');
  }
  
  if (lowerMessage.includes('stress') || lowerMessage.includes('anxious') || lowerMessage.includes('worried')) {
    return getRandomResponse('stress');
  }
  
  if (lowerMessage.includes('friend') || lowerMessage.includes('friendship')) {
    return getRandomResponse('friendship');
  }
  
  if (lowerMessage.includes('confident') || lowerMessage.includes('confidence') || lowerMessage.includes('self-esteem')) {
    return getRandomResponse('confidence');
  }
  
  if (lowerMessage.includes('career') || lowerMessage.includes('job') || lowerMessage.includes('work') || lowerMessage.includes('resume')) {
    return getRandomResponse('career');
  }
  
  if (lowerMessage.includes('encourage') || lowerMessage.includes('motivate') || lowerMessage.includes('help')) {
    return getRandomResponse('encouragement');
  }
  
  return getRandomResponse('default');
};

const getRandomResponse = (key) => {
  const responseList = responses[key] || responses.default;
  return responseList[Math.floor(Math.random() * responseList.length)];
};