import { useState, useCallback } from 'react';
import { Post } from '@/utils/types';

interface UsePostInteraction {
  isLiked: boolean;
  likesCount: number;
  handleLike: () => void;
}

export const usePostInteraction = (post: Post): UsePostInteraction => {
  const [isLiked, setIsLiked] = useState(post.isLiked || false);
  const [likesCount, setLikesCount] = useState(post.likes);

  const handleLike = useCallback(() => {
    try {
      setIsLiked((prev) => {
        const newLikeState = !prev;
        setLikesCount((prevCount) => prevCount + (newLikeState ? 1 : -1));
        return newLikeState;
      });
      // Here you would typically make an API call to update the like status
    } catch (error) {
      console.error('Failed to update like status:', error);
      // Revert the optimistic update
      setIsLiked((prev) => !prev);
      setLikesCount((prevCount) => prevCount + (isLiked ? 1 : -1));
    }
  }, []);

  return {
    isLiked,
    likesCount,
    handleLike,
  };
};
