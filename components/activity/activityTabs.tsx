import React from 'react';
import { ActivityTabType } from '@/utils/types';

interface ActivityTabsProps {
  activeTab: ActivityTabType;
  onTabChange: (tab: ActivityTabType) => void;
}

const ActivityTabs: React.FC<ActivityTabsProps> = ({ activeTab, onTabChange }) => {
  const tabs: ActivityTabType[] = ['Posts', 'Videos', 'Images', 'Reactions'];
  
  return (
    <div className="flex overflow-x-auto hide-scrollbar space-x-1 sm:space-x-2">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-colors ${
            activeTab === tab
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default ActivityTabs;