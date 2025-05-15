import { Icons } from "@/utils/icons"
import { Button } from "../ui/button/Button"
import { IconButton } from "../ui/button/IconButton"

const tools = [
  {
    name: "Tayog Live",
    status: "learn_more" as const,
    icon: Icons.INFO,
  },
  {
    name: "Newsletters",
    status: "available" as const,
    icon: Icons.CHECKED,
  },
  {
    name: "Follow link",
    status: "available" as const,
    icon: Icons.CHECKED,
  },
];

export const CreatorTools = () => {
  return (
    <div className="flex flex-col items-start gap-5 bg-white px-6 py-4 rounded-xl shadow-sm">
      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-medium">Creator tools</h1>
        <p className="text-sm text-gray-700">
          Creator mode gives you more ways to engage with your audience by enabling access to select tools.{" "}
          <Button
            variant="secondary"
            size="sm"
            className="text-blue-600 hover:text-blue-700 p-0"
          >
            Learn more
          </Button>{" "}
          about creator tool access.
        </p>
      </div>
      
      <div className="flex flex-col w-full gap-4 text-gray-700 text-sm divide-y divide-gray-200">
        {tools.map((tool) => (
          <div key={tool.name} className="flex justify-between items-center w-full pt-4 first:pt-0">
            <h3>{tool.name}</h3>
            <div className="flex gap-2 items-center">
              {tool.status === "available" ? (
                <>
                  <tool.icon className="h-5 w-5 text-green-600" />
                  <span>Available</span>
                </>
              ) : (
                <>
                  <tool.icon className="h-5 w-5 text-gray-400" />
                  <span>Learn more</span>
                </>
              )}
              <IconButton
                icon={<Icons.ARROW_RIGHT className="h-4 w-4" />}
                aria-label={`Go to ${tool.name}`}
              >
                <Icons.ARROW_RIGHT className="h-4 w-4" />
              </IconButton>
            </div>
          </div>
        ))}      </div>
    </div>
  )
}