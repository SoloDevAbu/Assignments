import React from 'react';
import { Post as PostType, ActivityTabType } from '@/utils/types';
import Post from '../post';
import ActivityCard from './activityCard';
import ActivityTabs from './activityTabs';

interface ActivityFeedProps {
  posts: PostType[];
  activeTab: ActivityTabType;
  onTabChange: (tab: ActivityTabType) => void;
  isCompact?: boolean;
}

const ActivityFeed: React.FC<ActivityFeedProps> = ({
  posts,
  activeTab,
  onTabChange,
  isCompact = false,
}) => {
  return (
    <div className={`bg-white ${!isCompact && 'border border-gray-200 rounded-lg overflow-hidden'} ${isCompact ? 'px-4' : 'p-8'} py-4`}>
      <div className={`${isCompact ? 'px-4' : 'p-4'} border-b border-gray-200`}>
        <h2 className="font-medium text-xl text-gray-900">All activity</h2>
        <div className="my-3">
          <ActivityTabs activeTab={activeTab} onTabChange={onTabChange} />
        </div>
      </div>
      <div className={`divide-y divide-gray-100 `}>
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id} className="py-4">
              {/* <Post post={post} /> */}
              <ActivityCard post={post} />
            </div>
          ))
        ) : (
          <div className="py-8 text-center">
            <p className="text-gray-500">No {activeTab.toLowerCase()} to display</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ActivityFeed;