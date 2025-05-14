import profileImage from "@/public/profile.jpg";
import { Icons } from "@/utils/icons";
import Image from "next/image";
import imageContent from '@/public/image.png'
import { Post as PostType } from '@/utils/types';
import { useState } from "react";

interface PostProps {
  post: PostType
}

const ActivityCard: React.FC<PostProps> = ({ post }) => {
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

  return (
    <div className="flex flex-col py-2 rounded-2xl shadow-sm shadow-gray-400 gap-2">
      <div className="flex flex-col px-4 py-2 gap-2">
        <div className="flex items-center gap-2">
          <div className="">
            <Image
              className="rounded-full"
              src={profileImage}
              alt="Profile"
              height={48}
              width={48}
            />
          </div>
          <div className="">
            <h1>{post.author.name}</h1>
            <p className="text-xs text-gray-500">{post.author.bio}</p>
            <div className="flex gap-1 text-xs text-gray-500">
              <p>{post.timestamp}</p>
              <Icons.EARTH size={16} />
            </div>
          </div>
        </div>
        <div className="text-sm">
          <p>{post.content}</p>
        </div>
      </div>
      {post.image && (
          <div className='my-2'>
            <img src={post.image} alt="Post" className="" />
          </div>
      )}
      <div className="border-b border-gray-300" />

      {/* <div className="py-2 mx-12 flex justify-between">
        <Icons.LIKE size={16}/>
        <Icons.COMMENT size={16}/>
        <Icons.REPOST size={16}/>
        <Icons.SEND size={16}/>
      </div> */}

      <div className="flex border-t border-gray-100">
        <button 
          onClick={handleLike}
          className={`flex items-center justify-center flex-1 py-2 text-sm font-medium ${
            isLiked ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          <Icons.LIKE  size={18} className={isLiked ? 'fill-blue-600' : ''} />
          <span className="ml-2">Like</span>
        </button>
        
        <button className="flex items-center justify-center flex-1 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">
          <Icons.COMMENT size={18} />
          <span className="ml-2">Comment</span>
        </button>
        
        <button className="flex items-center justify-center flex-1 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">
          <Icons.REPOST size={18} />
          <span className="ml-2">Repost</span>
        </button>
        
        <button className="flex items-center justify-center flex-1 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">
          <Icons.SEND size={18} />
          <span className="ml-2">Send</span>
        </button>
      </div>

      <div className="flex justify-between mx-8">
        <div className="flex gap-2">
            <Icons.ACTIVITY />
            <p>{post.impressions}</p>
        </div>
        <div className="hover:cursor-pointer hover:underline">
            <h2 className="text-blue-600 font-semibold">View analytics</h2>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;