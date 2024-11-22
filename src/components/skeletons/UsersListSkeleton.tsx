import { Skeleton } from "../ui/skeleton";

const UsersListSkeleton = () => {
  return Array.from({ length: 4 }).map((_, i) => (
    <div
      key={i}
      className="flex items-center justify-center lg:justify-start gap-3 p-3 rounded-sm animate-pulse"
    >
      <Skeleton className="h-12 w-12 rounded-full bg-zinc-800" />
      <div className="flex-1 lg:block hidden">
        <Skeleton className="h-4 w-24 bg-zinc-800 rounded-md mb-2" />
        <Skeleton className="h-4 w-32 bg-zinc-800 rounded" />
      </div>
    </div>
  ));
};

export default UsersListSkeleton;
