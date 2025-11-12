export type AgeCategory = '12-16' | '17-25';

export type Mood = 'happy' | 'sad' | 'anxious' | 'excited' | 'calm' | 'frustrated' | 'grateful' | 'tired';

export interface MoodEntry {
  date: string;
  mood: Mood;
  note?: string;
}

export interface Avatar {
  hairStyle: string;
  hairColor: string;
  outfit: string;
  outfitColor: string;
  skinTone: string;
}

export interface UserData {
  ageCategory: AgeCategory | null;
  avatar: Avatar | null;
  moodEntries: MoodEntry[];
}

export type ContentSection = 'emotional' | 'physical' | 'funtime' | 'knowledge' | 'careers';

