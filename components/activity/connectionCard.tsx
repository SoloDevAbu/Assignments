import React from 'react';
import { Connection } from '@/utils/types';
import Avatar from '../ui/avatar';
import { Icons } from '@/utils/icons';

interface ConnectionCardProps {
  connection: Connection;
  onConnect: (id: string) => void;
}

const ConnectionCard: React.FC<ConnectionCardProps> = ({ connection, onConnect }) => {
  const { user, school } = connection;
  
  return (
    <div className="flex items-start space-x-3 py-3">
      <Avatar src={user.profilePicture} alt={user.name} size="md" />
      <div className="flex-1 min-w-0">
        <h3 className="font-medium text-gray-900 text-sm">{user.name}</h3>
        <p className="text-xs text-gray-500 line-clamp-2 mt-0.5">{user.bio}</p>
        {school && (
          <p className="text-xs text-gray-500 mt-1">
            From {school}
          </p>
        )}
        <button
          className='flex w-1/3 items-center justify-center rounded-3xl border border-gray-500 bg-white px-4 py-2 font-medium gap-1 cursor-pointer'
          onClick={() => onConnect}
        >
          <Icons.USERS size={18}/>
          Connect
        </button>
      </div>
    </div>
  );
};

export default ConnectionCard;