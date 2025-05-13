import profileImage from "@/public/profile.jpg";
import { Icons } from "@/utils/icons";
import Image from "next/image";
import imageContent from '@/public/image.png'

export const ActivityCard = () => {
  return (
    <div className="flex flex-col py-2 rounded-2xl shadow-sm shadow-gray-400 gap-2">
      <div className="px-4 py-2 gap-2">
        <div className="flex items-center gap-2">
          <div className="">
            <Image
              className="rounded-full"
              src={profileImage}
              alt="Profile"
              height={48}
              width={48}
            />
          </div>
          <div className="">
            <h1>Abu Bakkar Siddique</h1>
            <p className="text-xs text-gray-500">Description of the profile...</p>
            <div className="flex gap-1 text-xs text-gray-500">
              <p>5d</p>
              <Icons.EARTH size={16}/>
            </div>
          </div>
        </div>
        <div className="text-sm">
          <p>
            Made 9 more PRs to Onlook (YC W25) Waiting for the review and merge
            them successfully Kiet Ho
          </p>
        </div>
      </div>
      <Image
        className="w-full aspect-video"
        src={imageContent}
        alt="Content"
      />
      <div className="border-b border-gray-300" />

      <div className="py-2 mx-12 flex justify-between">
        <Icons.LIKE size={16}/>
        <Icons.COMMENT size={16}/>
        <Icons.REPOST size={16}/>
        <Icons.SEND size={16}/>
      </div>

      <div className="flex justify-between mx-8">
        <div className="flex gap-2">
            <Icons.ACTIVITY />
            <p>125 impressions</p>
        </div>
        <div className="hover:cursor-pointer hover:underline">
            <h2 className="text-blue-600 font-semibold">View analytics</h2>
        </div>
      </div>
    </div>
  );
};
