export const CreatorTools = () => {
    return (
        <div className="flex flex-col items-start gap-5 bg-white px-6 py-4 rounded-xl shadow-sm">
            <div className="flex flex-col gap-1">
                <h1 className="text-xl font-medium">Creator tools</h1>
                <p className="text-sm text-gray-700">ICreator mode gives you more ways to engage with your audience by enabling access to select tools. <span className="text-blue-600 cursor-pointer">Learn more</span> about creator tool access.</p>
            </div>
            <div className=" flex flex-col w-full gap-4 text-gray-700 text-sm">
                <div className="flex justify-between items-center w-full">
                    <h3>Tayog Live</h3>
                    <div className="flex gap-2 items-center">
                        <p>i</p>
                        <p>Learn more</p>
                        <p>&gt;</p>
                    </div>
                </div>

                <div className="border-b border-gray-300 w-full"></div>
                
                <div className="flex justify-between items-center w-full">
                    <h3>Newsletters</h3>
                    <div className="flex gap-2 items-center">
                        <p>i</p>
                        <p>Available</p>
                        <p>&gt;</p>
                    </div>
                </div>

                <div className="border-b border-gray-300 w-full"></div>
                
                <div className="flex justify-between items-center w-full">
                    <h3>Follow link</h3>
                    <div className="flex gap-2 items-center">
                        <p>i</p>
                        <p>Available</p>
                        <p>&gt;</p>
                    </div>
                </div>
            </div>
        </div>
    )
}