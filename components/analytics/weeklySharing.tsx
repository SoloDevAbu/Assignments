import note from '@/public/note.png'

export const WeeklySharingCard = () => {
    return (
        <div className="flex flex-col items-start gap-4 bg-white px-6 py-4 rounded-xl shadow-sm">
            <div className="flex flex-col gap-2">
                <h1 className="text-xl font-medium">Weekly sharing tracker</h1>
                <p className="text-sm text-gray-500">Increase you visibility by posting or commenting.We suggest taking <span className="text-black font-medium">3 actions every week</span></p>
            </div>
            <div className="border-b border-gray-300 w-full"></div>
            
            <div className='flex gap-4 justify-center items-center'>
                <img src={note.src} alt="Note" />
                <div>
                    <p className='text-xs text-gray-500'>May 12-May 18</p>
                    <h3 className='text-lg'>0 of 3 <span className='text-gray-700'>actions</span></h3>
                    <p className='text-xs text-gray-500'>No actions yet. Take 3 actions to achieve the weekly sharing goal.</p>
                </div>
            </div>

            <div className="flex gap-4">
                <div className="flex flex-col gap-2 p-2 shadow-sm shadow-gray-300 items-start">
                    <h3 className="text-lg">0 <span className="text-gray-700">Posts</span></h3>
                    <p className="text-xs">Members who post once per week on average see up to 4x more profile views.</p>
                    <button className="text-blue-600 text-sm font-semibold cursor-pointer hover:underline">Start a post</button>
                </div>
                <div className="flex flex-col gap-2 p-2 shadow-sm shadow-gray-300 items-start">
                    <h3 className="text-lg">0 <span className="text-gray-700">Posts</span></h3>
                    <p className="text-xs">Members who post once per week on average see up to 4x more profile views.</p>
                    <button className="text-blue-600 text-sm font-semibold cursor-pointer hover:underline">Start a post</button>
                </div>
            </div>
        </div>
    )
}