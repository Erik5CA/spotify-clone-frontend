import { ClockIcon } from "lucide-react";
import { Skeleton } from "../ui/skeleton";

const AlbumPageSkeleton = () => {
  return (
    <div className="h-full rounded-md bg-zinc-900">
      <div className="w-full flex flex-col">
        <div className="flex p-6 gap-6 pb-8 w-full">
          <Skeleton className="w-60 h-60 bg-zinc-700/50 rounded-md object-cover" />
          <div className="flex flex-col justify-end w-[calc(100%-240px)]">
            <Skeleton className="h-4 bg-zinc-700/50 rounded-md w-3/4 mb-2" />
            <Skeleton className="h-4 bg-zinc-700/50 rounded-md w-1/2" />
          </div>
        </div>
        <div className="bg-black/20 backdrop-blur-sm">
          <div className="grid grid-cols-[16px_4fr_2fr_1fr] gap-4 px-10 py-2 text-sm text-zinc-400 border-b border-white/5">
            <div>#</div>
            <div>Title</div>
            <div>Released Date</div>
            <div>
              <ClockIcon className="h-4 w-4 text-zinc-400" />
            </div>
          </div>

          {/* Songs */}
          <div className="px-6">
            <div className="space-y-2 py-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="grid grid-cols-[16px_4fr_2fr_1fr] gap-4 px-4 py-2 text-sm text-zinc-400 rounded-md group"
                >
                  <div className="flex items-center justify-center">
                    <Skeleton className="h-4 w-4 bg-zinc-700/50 rounded-md" />
                  </div>

                  <div className="flex items-center gap-3">
                    <Skeleton className="size-10 bg-zinc-700/50 rounded-md" />

                    <div>
                      <div className="font-medium text-white">
                        <Skeleton className="h-3 w-24 bg-zinc-700/50 rounded-md mb-1" />
                      </div>
                      <div>
                        <Skeleton className="h-2 w-24 bg-zinc-700/50 rounded-md" />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Skeleton className="h-4 w-24 bg-zinc-700/50 rounded-md" />
                  </div>

                  <div className="flex items-center">
                    <Skeleton className="w-24 h-4 bg-zinc-700/50 rounded-md" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumPageSkeleton;
