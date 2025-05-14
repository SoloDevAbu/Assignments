import React from 'react';
import { Connection } from '@/utils/types';
import ConnectionCard from './connectionCard';

interface ConnectionsSectionProps {
  connections: Connection[];
  onConnect: (id: string) => void;
}

const ConnectionsSection: React.FC<ConnectionsSectionProps> = ({ connections, onConnect }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      <div className="p-4 border-b border-gray-200">
        <h2 className="font-medium text-base text-gray-900">People you may know</h2>
        <p className="text-xs text-gray-500 mt-1">From your school</p>
      </div>
      <div className="p-4">
        <div className="divide-y divide-gray-100">
          {connections.map((connection) => (
            <ConnectionCard 
              key={connection.id} 
              connection={connection} 
              onConnect={onConnect} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConnectionsSection;