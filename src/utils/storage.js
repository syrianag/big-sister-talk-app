const STORAGE_KEY = 'big-sister-talk-data';

export const getStoredData = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    return JSON.parse(stored);
  }
  return {
    ageCategory: null,
    avatar: null,
    moodEntries: [],
  };
};

export const saveStoredData = (data) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

export const saveAgeCategory = (category) => {
  const data = getStoredData();
  data.ageCategory = category;
  saveStoredData(data);
};

export const saveAvatar = (avatar) => {
  const data = getStoredData();
  data.avatar = avatar;
  saveStoredData(data);
};

export const saveMoodEntry = (entry) => {
  const data = getStoredData();
  data.moodEntries.push(entry);
  saveStoredData(data);
};

export const getMoodEntries = () => {
  const data = getStoredData();
  return data.moodEntries || [];
};