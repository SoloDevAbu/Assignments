"use client";

import { Icons } from "@/utils/icons";
import ActivityTabs from "../activity/activityTabs";
import { ActivityTabType } from "@/utils/types";
import ActivityCard from "../activity/activityCard";
import { posts } from "@/utils/mockData";
import { useRouter } from "next/navigation";

interface ActivityProps {
  activeTab: ActivityTabType;
  onTabChange: (tab: ActivityTabType) => void;
}

export default function Activity({ activeTab, onTabChange }: ActivityProps) {
    const router = useRouter();
  return (
    <div className="flex flex-col items-start gap-4 bg-white px-6 py-4 rounded-xl shadow-sm">
      <div className="w-full">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold">Activity</h1>
          <Icons.EDIT className="cursor-pointer" />
        </div>
        <div className="flex gap-2">
          <p className="text-sm text-blue-600 hover:underline cursor-pointer">
            45 followers
          </p>
        </div>
        <button className="border border-blue-600 hover:border-2 px-4 py-1 rounded-full text-blue-600 my-4 font-semibold">
          Create a post
        </button>
      </div>
      <ActivityTabs activeTab={activeTab} onTabChange={onTabChange} />

      <div className="border-b border-gray-300 w-full" />

      <div className="relative flex gap-4 overflow-x-auto overflow-y-hidden w-full">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div
              key={post.id}
              className="min-w-[300px] max-w-[400px] py-4 flex-shrink-0"
            >
              <ActivityCard post={post} />
            </div>
          ))
        ) : (
          <div className="py-8 text-center w-full">
            <p className="text-gray-500">
              No {activeTab.toLowerCase()} to display
            </p>
          </div>
        )}
      </div>

      <div className="border-b border-gray-300 w-full" />

      <button 
        className="flex gap-2 justify-center items-center w-full font-semibold text-gray-700 cursor-pointer hover:underline"
        onClick={() => router.push('/activity')}
        >
        <h1>Show all posts</h1>
        <Icons.ARROW_RIGHT />
      </button>
    </div>
  );
}
