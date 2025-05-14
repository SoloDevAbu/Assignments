'use client'

import Activity from "@/components/home/activity";
import Analytics from "@/components/home/analytic";
import { ActivityTabType } from "@/utils/types";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState<ActivityTabType>("Posts");
  return (
    <div className="flex flex-col gap-4 mx-8 my-6 md:max-w-3/5 md:mx-16">
      <Analytics />
      <Activity activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}
