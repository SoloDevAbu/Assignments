"use client";
import React, { useState, useEffect } from "react";
import ProfileHeader from "@/components/activity/profileHeader";
import ActivityFeed from "@/components/activity/activitySection";
import ConnectionsSection from "@/components/activity/connectionSection";
import { currentUser, posts, suggestedConnections } from "@/utils/mockData";
import { ActivityTabType } from "@/utils/types";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const ProfilePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ActivityTabType>("Posts");
  const [connections, setConnections] = useState(suggestedConnections);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const handleConnect = (id: string) => {
    setConnections((prev) =>
      prev.map((connection) =>
        connection.id === id
          ? {
              ...connection,
              user: { ...connection.user, connectionStatus: "pending" },
            }
          : connection
      )
    );
  };

  return (
    <div>
      {isMobile ? (
        <div className="space-y-4 mx-6 my-4">
          <ProfileHeader user={currentUser} isCompact={true} />
          <div className="bg-white">
            <ActivityFeed
              posts={posts}
              activeTab={activeTab}
              onTabChange={setActiveTab}
              isCompact={true}
            />
          </div>
          <ConnectionsSection
            connections={connections}
            onConnect={handleConnect}
          />
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mx-10 my-6">
            <div className="lg:col-span-1 sticky top-6" style={{ overflow: 'visible', height: 'auto' }}>
              <ProfileHeader user={currentUser} />
            </div>
          <div className="lg:col-span-2 ">
            <ActivityFeed
              posts={posts}
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />
          </div>
          <div className="lg:col-span-1">
            <ConnectionsSection
              connections={connections}
              onConnect={handleConnect}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
