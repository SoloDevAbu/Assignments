import Avatar from "@/components/ui/avatar";
import { useRouter } from "next/navigation";
import profile from "@/public/profile.jpg";
import { Icons } from "@/utils/icons";

export default function ShareModal() {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  const showEmoji = () => {

  }

  const handlePost = () => {
    
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="flex flex-col bg-white p-6 rounded-2xl shadow-md w-[90%] max-w-lg relative gap-4">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <Avatar src={profile.src} alt="Profile" size={"lg"} />
            <div>
              <div className="flex gap-1 items-center">
                <h1 className="text-xl font-semibold text-gray-700">
                  Abu Bakkar Siddique
                </h1>
                <Icons.EYE />
              </div>
              <p className="text-sm text-gray-600">Post to Anyone</p>
            </div>
          </div>
          <button className="cursor-pointer" onClick={handleClose}>
            <Icons.CLOSE />
          </button>
        </div>

        <div>
          <textarea
            placeholder="What do you want to talk about?"
            rows={5}
            className="outline-none text-lg w-full resize-none"
          ></textarea>{" "}
        </div>
        <div className="text-gray-700">
          <button
            className="cursor-pointer"
            onClick={showEmoji}
          >
            <Icons.EMOJI_SMILE />
          </button>
        </div>

        <div className="flex gap-8 font-bold text-gray-700 items-center">
          <button>
            <Icons.VIDEO />
          </button>
          <button>
            <Icons.IMAGE />
          </button>
          <button>
            <Icons.CALENDAR />
          </button>
          <button>
            <Icons.PLUS />
          </button>
        </div>

        <div className="flex w-full justify-end">
          <button
            className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-full"
            onClick={handlePost}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
