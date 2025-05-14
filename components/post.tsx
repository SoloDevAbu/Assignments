import React, { useState } from 'react';
import { Post as PostType } from '@/utils/types';
import Avatar from './ui/avatar'
import { MessageSquare, Repeat, Send, MoreHorizontal, ThumbsUp } from 'lucide-react';

interface PostProps {
  post: PostType;
}

const Post: React.FC<PostProps> = ({ post }) => {
  const [isLiked, setIsLiked] = useState(post.isLiked || false);
  const [likesCount, setLikesCount] = useState(post.likes);

  const handleLike = () => {
    if (isLiked) {
      setLikesCount(prev => prev - 1);
    } else {
      setLikesCount(prev => prev + 1);
    }
    setIsLiked(!isLiked);
  };

  const formatContent = (content: string) => {
    // Split by newlines and join with <br> tags
    const lines = content.split('\n');
    return lines.map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index < lines.length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div className="flex items-start">
            <Avatar src={post.author.profilePicture} alt={post.author.name} size="md" />
            <div className="ml-3">
              <div className="flex items-center">
                <h3 className="font-medium text-gray-900">{post.author.name}</h3>
                <span className="mx-1 text-gray-400">•</span>
                <span className="text-xs text-gray-500">{post.timestamp}</span>
              </div>
              <p className="text-xs text-gray-500 line-clamp-1">{post.author.bio}</p>
            </div>
          </div>
          <button className="text-gray-400 hover:text-gray-500">
            <MoreHorizontal size={20} />
          </button>
        </div>
        
        <div className="mt-3 text-sm text-gray-700">
          <p>{formatContent(post.content)}</p>
        </div>
        
        {post.image && (
          <div className="mt-3 -mx-4 -mb-4">
            <img src={post.image} alt="Post" className="w-full" />
          </div>
        )}
      </div>
      
      <div className="flex border-t border-gray-100">
        <button 
          onClick={handleLike}
          className={`flex items-center justify-center flex-1 py-2 text-sm font-medium ${
            isLiked ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          <ThumbsUp size={18} className={isLiked ? 'fill-blue-600' : ''} />
          <span className="ml-2">Like</span>
        </button>
        
        <button className="flex items-center justify-center flex-1 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">
          <MessageSquare size={18} />
          <span className="ml-2">Comment</span>
        </button>
        
        <button className="flex items-center justify-center flex-1 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">
          <Repeat size={18} />
          <span className="ml-2">Repost</span>
        </button>
        
        <button className="flex items-center justify-center flex-1 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">
          <Send size={18} />
          <span className="ml-2">Send</span>
        </button>
      </div>
    </div>
  );
};

export default Post;