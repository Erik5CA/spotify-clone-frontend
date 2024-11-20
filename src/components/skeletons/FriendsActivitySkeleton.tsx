import { UserIcon } from "lucide-react";
import { Skeleton } from "../ui/skeleton";

const FriendsActivitySkeleton = () => {
  return (
    <div className="h-full bg-zinc-900 rounded-md flex flex-col">
      <div className="p-4 flex justify-between items-center border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <UserIcon className="size-5 shrink-0" />
          <h2 className="font-semibold">What Friends Are Playing</h2>
        </div>
      </div>

      <div className="flex-1">
        <div className="space-y-4 p-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i}>
              <div className="flex items-start gap-3">
                <div className="relative">
                  <Skeleton className="size-10 bg-zinc-700 rounded-full" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <Skeleton className="h-3 w-20 bg-zinc-700 shrink-0" />
                  </div>
                  <div className="mt-1">
                    <Skeleton className="mt-1 h-2 bg-zinc-700 w-24 shrink-0" />
                    <Skeleton className="mt-1 h-2 bg-zinc-700 w-20 shrink-0" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FriendsActivitySkeleton;
