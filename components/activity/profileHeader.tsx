import React from 'react';
import { User } from '@/utils/types';
import Avatar from '@/components/ui/avatar';

interface ProfileHeaderProps {
  user: User;
  isCompact?: boolean;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ user, isCompact = false }) => {
  if (isCompact) {
    return (
      <div className="bg-white border-b border-gray-200 rounded-2xl">
        <div className="relative">
          <div className="h-24 bg-gradient-to-r from-blue-100 to-blue-300 rounded-t-2xl"></div>
          <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-12">
            <Avatar src={user.profilePicture} alt={user.name} size="xl" bordered />
          </div>
        </div>
        <div className="pt-16 pb-4 px-4 text-center">
          <h1 className="text-xl font-bold text-gray-900">{user.name}</h1>
          <p className="text-sm text-gray-600 mt-1 line-clamp-2">{user.bio}</p>

          <div className='border-b border-gray-300 mt-3'/>
          <div className="mt-3 flex justify-between items-center text-sm">
            <span className="text-gray-600 ml-1">Followers</span>
            <span className="font-medium text-gray-900">{user.followers}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      <div className="p-6">
        <div className="flex flex-col sm:flex-row sm:items-center">
          <Avatar src={user.profilePicture} alt={user.name} size="xl" className="mx-auto sm:mx-0" />
          <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
            <h1 className="text-xl font-bold text-gray-900">{user.name}</h1>
            <p className="text-sm text-gray-600 mt-1">{user.bio}</p>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-center sm:justify-start text-sm">
          <div>
            <span className="font-medium text-gray-900">{user.followers}</span>
            <span className="text-gray-600 ml-1">Followers</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;