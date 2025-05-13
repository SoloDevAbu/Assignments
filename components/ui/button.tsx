export default function Button({text, selected}: {text: string, selected: boolean}) {
    return (
        <div className="font-semibold">
            <button
                className={`${selected ? "text-white bg-green-700 hover:bg-green-900" : "text-gray-700 border hover:border-2 border-gray-500 "} rounded-4xl px-3 py-1`}
            >
                {text}
            </button>
        </div>
    );
}