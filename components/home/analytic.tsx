import { Icons } from "@/utils/icons";
import { useRouter } from "next/navigation";

export default function Analytics() {
    const router = useRouter();
    return (
        <div className="flex flex-col items-start gap-4 bg-white px-6 py-4 rounded-xl shadow-sm">
            <div >
                <h1 className="text-xl font-semibold">Analytics</h1>
                <div className="flex gap-2">
                    <Icons.EYE size={18}/>
                    <p className="text-sm text-gray-600">Private to you</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex gap-2">
                    <Icons.USERS />
                    <div className="">
                        <h3 className="font-semibold text-gray-700">29 profile views</h3>
                        <p className="text-sm">Discover who's viewed your profile</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <Icons.ACTIVITY />
                    <div className="">
                        <h3 className="font-semibold text-gray-700">29 profile views</h3>
                        <p className="text-sm">Discover who's viewed your profile</p>
                        <p className="text-sm text-gray-500">Past 7 days</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <Icons.SEARCH />
                    <div className="">
                        <h3 className="font-semibold text-gray-700">29 profile views</h3>
                        <p className="text-sm">Discover who's viewed your profile</p>
                    </div>
                </div>
            </div>

            <div className="border-b border-gray-300 w-full"/>

            <button 
            onClick={() => router.push('/dashboard')}
            className="flex gap-2 justify-center items-center w-full font-semibold text-gray-700 cursor-pointer hover:underline"
            >
                <h1>Show all analytics</h1>
                <Icons.ARROW_RIGHT />
            </button>
        </div>
    )
}