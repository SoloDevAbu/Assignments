import { ActivityCard } from "@/components/activity/activityCard";
import Button from "@/components/ui/button";

export default function Page() {
  return (
    <div className="flex flex-col items-start gap-4 bg-white px-6 py-4 mx-6 my-4 rounded-xl shadow-sm">
        <h1 className="text-xl font-medium">All activity</h1>
        <div className="flex gap-2 items-center">
            <Button text="Posts" selected={true} />
            <Button text="Videos" selected={false} />
            <Button text="Images" selected={false} />
            <Button text="Reactions" selected={false} />
        </div>
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
    </div>
  )
}