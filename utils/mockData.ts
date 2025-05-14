import { User, Post, Connection } from './types';
import profileImage from '@/public/profile.jpg';
import imageData from '@/public/image.png';

export const currentUser: User = {
  id: '1',
  name: 'Abu Bakkar Siddique',
  profilePicture: profileImage.src,
  bio: 'Full-Stack Developer in Progress | Building Scalable APIs with Node.js, Express.js, and MongoDB Focused on creating impactful projects',
  followers: 23,
};

export const posts: Post[] = [
  {
    id: '1',
    author: currentUser,
    content: 'Made 9 more PRs to Onlook (YC W25)\nWaiting for the review and merge them successfully Kiet Ho',
    timestamp: '5d',
    image: imageData.src, 
    likes: 5,
    comments: 2,
    impressions: 125,
    mentions: [
      {
        id: '3',
        name: 'Kiet Ho',
        profilePicture: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        bio: 'Software Engineer',
        followers: 120,
      }
    ]
  },
  {
    id: '2',
    author: currentUser,
    content: 'Just completed a new project using React and Node.js. Check it out on my GitHub!',
    timestamp: '1w',
    likes: 12,
    comments: 4,
    impressions: 250,
  },
];

export const suggestedConnections: Connection[] = [
  {
    id: '1',
    user: {
      id: '2',
      name: 'Ankit Kumar Ray',
      bio: 'Software Developer || Full Stack Developer (MERN + Python)',
      profilePicture: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      followers: 156,
    },
    school: 'your school',
  },
  {
    id: '2',
    user: {
      id: '3',
      name: 'Anshuman Singh',
      bio: 'Integrated MSc in CS (2nd year)',
      profilePicture: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      followers: 89,
    },
    school: 'your school',
  },
  {
    id: '3',
    user: {
      id: '4',
      name: 'Sarthak Dey',
      bio: 'Student at Assam (Central) University',
      profilePicture: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      followers: 65,
    },
    school: 'your school',
  },
  {
    id: '4',
    user: {
      id: '5',
      name: 'SARKAR ARJUMAN AHMED',
      bio: 'Attending Dibrugarh University',
      profilePicture: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      followers: 42,
    },
    school: 'your school',
  },
];