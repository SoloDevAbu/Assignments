export interface User {
  id: string;
  name: string;
  profilePicture: string;
  bio: string;
  followers: number;
  connectionStatus?: 'connected' | 'pending' | null;
}

export interface Post {
  id: string;
  author: User;
  content: string;
  timestamp: string;
  image?: string;
  likes: number;
  comments: number;
  isLiked?: boolean;
  mentions?: User[];
  impressions: number;
}

export interface Connection {
  id: string;
  user: User;
  mutualConnections?: number;
  school?: string;
  company?: string;
}

export type ActivityTabType = 'Posts' | 'Videos' | 'Images' | 'Reactions';