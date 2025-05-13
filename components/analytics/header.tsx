import Image from "next/image"
import profileImage from '@/public/profile.jpg'

export const AnalyticsHeader = () => {
    return (
        <div className="flex items-start gap-4 bg-white px-6 py-4 rounded-xl shadow-sm">
            <div>
                <Image 
                className="rounded-full"
                src={profileImage} 
                alt="logo" 
                width={48} 
                height={48} 
                />
            </div>
            <div>
                <h1 className="text-xl font-medium">Analytics & Tools</h1>
                <p className="text-gray-500 font-extralight">Thursday, May 14</p>
            </div>
        </div>
    )
}