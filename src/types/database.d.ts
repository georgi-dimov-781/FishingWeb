export interface Location {
  id: string;
  name: string;
  imageUrl: string;
  coordinates: { lat: number; lng: number };
  description: string;
  fishSpecies: string[];
  bestSeasons: string[];
  difficulty: string;
  regulations: string;
  tips: string;
}

export interface EquipmentItem {
  id: string;
  name: string;
  category: string;
  imageUrl: string;
  description: string;
  difficulty: string;
  price: string;
  bestFor: string[];
}

export interface Technique {
  id: string;
  name: string;
  imageUrl: string;
  difficulty: string;
  description: string;
  steps: string[];
  bestFor: string[];
}

export interface CommunityPost {
  id: string;
  author: string;
  title: string;
  content: string;
  date: string;
  likes: number;
  imageUrl: string;
  comments: {
    user: string;
    text: string;
    date: string;
  }[];
}

export interface Database {
  locations: Location[];
  equipment: {
    rods: EquipmentItem[];
    reels: EquipmentItem[];
    lures: EquipmentItem[];
  };
  techniques: Technique[];
  communityPosts: CommunityPost[];
}

declare const database: Database;
export default database; 