import { LucideIcon } from "lucide-react";

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

export interface Analytics {
  postImpressions: {
    total: number;
    title: string,
    growth: number;
    description: Date;
    icon: any
  };
  followers: {
    total: number;
    title: string,
    growth: number;
    description: Date;
    icon: any
  };
  profileViews: {
    total: number;
    title: string,
    growth: number;
    description: Date;
    icon: any
  };
  searchAppearances: {
    total: number;
    title: string,
    growth: number;
    description: Date;
    icon: any
  };
}

export interface CreatorTool {
  id: string;
  name: string;
  status: 'available' | 'coming_soon' | 'learn_more';
  info?: string;
}

export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface WithCompact {
  isCompact?: boolean;
}

export type ActivityTabType = 'Posts' | 'Videos' | 'Images' | 'Reactions';

export interface AnalyticsCardProps extends BaseComponentProps {
  total: number;
  title: string;
  growth: number;
  description: string;
  icon?: LucideIcon;
}