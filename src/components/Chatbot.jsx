import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Chatbot() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    {
      text: "Hey there! 💕 I'm your Big Sister and I'm here for you. What would you like to talk about?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const getChatbotResponse = (userInput, ageCategory) => {
    // Simple chatbot logic
    const responses = {
      hello: "Hi there! 💕 How are you feeling today?",
      period: "I'm here to help! Periods are a normal part of growing up. What questions do you have?",
      scared: "It's totally normal to feel scared or nervous. You're not alone, and I'm here for you! 💖",
      pain: "Period cramps can be uncomfortable. Try a heating pad, gentle exercise, or ask a trusted adult about pain relief options.",
      default: "I hear you! 💕 Remember, you're amazing and you've got this. What else would you like to talk about?",
    };

    const lowerInput = userInput.toLowerCase();
    
    if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
      return responses.hello;
    } else if (lowerInput.includes('period') || lowerInput.includes('menstruation')) {
      return responses.period;
    } else if (lowerInput.includes('scared') || lowerInput.includes('nervous') || lowerInput.includes('afraid')) {
      return responses.scared;
    } else if (lowerInput.includes('pain') || lowerInput.includes('cramp') || lowerInput.includes('hurt')) {
      return responses.pain;
    }
    
    return responses.default;
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = {
      text: input,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const currentInput = input;
    setInput('');

    // Simulate bot thinking
    setTimeout(() => {
      const ageCategory = localStorage.getItem('ageCategory') || 'bloom';
      const botResponse = getChatbotResponse(currentInput, ageCategory);
      const botMessage = {
        text: botResponse,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        <button className="back-btn" onClick={() => navigate('/')}>← Back</button>
        <h2>💬 Big Sister Chat</h2>
      </div>
      
      <div className="chat-messages">
        {messages.map((msg, idx) => (
          <div key={idx} className={`message ${msg.sender}`}>
            <div className="message-bubble">
              {msg.sender === 'bot' && <span className="bot-avatar">🌸</span>}
              <p>{msg.text}</p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="chat-input-container">
        <input
          type="text"
          className="chat-input"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button className="send-btn" onClick={handleSend}>
          Send 💕
        </button>
      </div>
    </div>
  );
}