// User types
export interface User {
  id: string;
  email: string;
  username: string;
  avatar?: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserCredentials {
  email: string;
  password: string;
}

// Fishing Spot types
export interface FishingSpot {
  id: string;
  name: string;
  description: string;
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  fishTypes: string[];
  bestSeason: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  amenities: string[];
  images: string[];
  rating: number;
  reviews: Review[];
  createdAt: string;
  updatedAt: string;
}

// Review types
export interface Review {
  id: string;
  userId: string;
  spotId: string;
  rating: number;
  comment: string;
  images?: string[];
  createdAt: string;
  updatedAt: string;
}

// Gear types
export interface Gear {
  id: string;
  name: string;
  type: 'rod' | 'reel' | 'line' | 'hook' | 'bait' | 'other';
  brand: string;
  description: string;
  specifications: Record<string, string>;
  price: number;
  images: string[];
  rating: number;
  reviews: GearReview[];
  createdAt: string;
  updatedAt: string;
}

export interface GearReview {
  id: string;
  userId: string;
  gearId: string;
  rating: number;
  comment: string;
  createdAt: string;
  updatedAt: string;
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

// Pagination types
export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// Filter types
export interface SpotFilters {
  fishTypes?: string[];
  difficulty?: string[];
  bestSeason?: string[];
  amenities?: string[];
  rating?: number;
  location?: {
    lat: number;
    lng: number;
    radius: number; // in kilometers
  };
}

export interface GearFilters {
  type?: string[];
  brand?: string[];
  minPrice?: number;
  maxPrice?: number;
  rating?: number;
} 