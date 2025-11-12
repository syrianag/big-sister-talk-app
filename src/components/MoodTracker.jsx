import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

// Register Chart.js components (required for chart.js v4+)
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const moods = [
  { value: 'happy', emoji: '😊', label: 'Happy' },
  { value: 'excited', emoji: '🤩', label: 'Excited' },
  { value: 'calm', emoji: '😌', label: 'Calm' },
  { value: 'grateful', emoji: '🙏', label: 'Grateful' },
  { value: 'tired', emoji: '😴', label: 'Tired' },
  { value: 'sad', emoji: '😢', label: 'Sad' },
  { value: 'anxious', emoji: '😰', label: 'Anxious' },
  { value: 'frustrated', emoji: '😤', label: 'Frustrated' },
];

const moodColors = {
  happy: '#FFB6C1',
  excited: '#FFC0CB',
  calm: '#DDA0DD',
  grateful: '#98D8C8',
  tired: '#F7DC6F',
  sad: '#87CEEB',
  anxious: '#FFA07A',
  frustrated: '#FF6B6B',
};

export default function MoodTracker() {
  const navigate = useNavigate();
  const [entries, setEntries] = useState([]);
  const [selectedMood, setSelectedMood] = useState(null);
  const [note, setNote] = useState('');

  useEffect(() => {
    // load entries from localStorage
    try {
      const savedEntries = localStorage.getItem('moodEntries');
      if (savedEntries) {
        setEntries(JSON.parse(savedEntries));
      }
    } catch (err) {
      console.error('Failed to load mood entries:', err);
      setEntries([]);
    }
  }, []);

  const handleLogMood = () => {
    if (!selectedMood) return;

    const newEntry = {
      date: new Date().toISOString().split('T')[0],
      mood: selectedMood,
      note: note.trim() || undefined,
    };

    try {
      const updatedEntries = [...entries, newEntry];
      localStorage.setItem('moodEntries', JSON.stringify(updatedEntries));
      setEntries(updatedEntries);
      setSelectedMood(null);
      setNote('');
    } catch (err) {
      console.error('Failed to save mood entry:', err);
    }
  };

  const getChartData = () => {
    const last14Days = entries.slice(-14);
    const dates = last14Days.map((e) => {
      const date = new Date(e.date);
      return `${date.getMonth() + 1}/${date.getDate()}`;
    });
    const moodValues = last14Days.map((e) => {
      const moodIndex = moods.findIndex((m) => m.value === e.mood);
      return moodIndex >= 0 ? moodIndex : 0;
    });

    return {
      labels: dates.length > 0 ? dates : ['Today'],
      datasets: [
        {
          label: 'Mood',
          data: moodValues.length > 0 ? moodValues : [0],
          borderColor: '#FFB6C1',
          backgroundColor: 'rgba(255, 182, 193, 0.2)',
          fill: true,
          tension: 0.4,
          pointRadius: 4,
        },
      ],
    };
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        // tooltip styling
        backgroundColor: 'rgba(255, 182, 193, 0.9)',
        titleColor: '#333',
        bodyColor: '#333',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: moods.length - 1,
        ticks: {
          stepSize: 1,
          // value may be numeric or Chart.js tick object; handle defensively
          callback: function (value) {
            const idx = Number(value);
            const m = moods[idx];
            return m ? m.emoji : '';
          },
        },
      },
    },
  };
  const getAdvice = (mood) => {
    const advice = {
      happy: 'Keep spreading that joy! 💕',
      excited: 'Channel that energy into something creative! ✨',
      calm: 'This peaceful feeling is beautiful. Enjoy it! 🌸',
      grateful: 'Gratitude is a superpower! Keep counting your blessings. 🙏',
      tired: 'Rest is important. Take care of yourself! 😴',
      sad: "It's okay to feel sad. You're not alone. 💖",
      anxious: 'Take deep breaths. This feeling will pass. 🌸',
      frustrated: "Step back, take a break. You've got this! 💪",
    };
    return advice[mood] || '';
  };

  return (
    <div className="mood-tracker">
      <div className="mood-header">
        <button className="back-btn" onClick={() => navigate('/')}>← Back</button>
        <h2>😊 Mood Tracker</h2>
      </div>

      <div className="mood-content">
        <div className="mood-selector">
          <h3>How are you feeling today?</h3>
          <div className="mood-grid">
            {moods.map((m) => (
              <button
                key={m.value}
                className={`mood-btn ${selectedMood === m.value ? 'selected' : ''}`}
                style={{
                  backgroundColor: selectedMood === m.value ? moodColors[m.value] : 'rgba(255, 255, 255, 0.7)',
                  border: 'none',
                  padding: '10px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
                onClick={() => setSelectedMood(m.value)}
                type="button"
              >
                <span className="mood-emoji" style={{ fontSize: '20px' }}>{m.emoji}</span>
                <span className="mood-label" style={{ marginTop: '6px' }}>{m.label}</span>
              </button>
            ))}
          </div>

          {selectedMood && (
            <div className="mood-actions" style={{ marginTop: '12px' }}>
              <textarea
                className="mood-note"
                placeholder="Add a note (optional)..."
                value={note}
                onChange={(e) => setNote(e.target.value)}
                rows={3}
                style={{ width: '100%', padding: '8px', borderRadius: '6px' }}
              />
              <div style={{ marginTop: '8px', display: 'flex', gap: '8px', alignItems: 'center' }}>
                <button className="log-mood-btn" onClick={handleLogMood} type="button">
                  Log Mood 💕
                </button>
                <p className="mood-advice" style={{ margin: 0 }}>{getAdvice(selectedMood)}</p>
              </div>
            </div>
          )}
        </div>

        {entries && entries.length > 0 ? (
          <div className="mood-chart" style={{ marginTop: '20px' }}>
            <h3>Your Mood Patterns</h3>
            <div className="chart-container" style={{ height: '280px', width: '100%' }}>
              <Line data={getChartData()} options={chartOptions} />
            </div>
          </div>
        ) : (
          <div className="no-entries" style={{ marginTop: '20px' }}>
            <p>Start tracking your moods to see patterns! 💖</p>
          </div>
        )}
      </div>
    </div>
  );
}