import FeauturedSection from "@/components/FeauturedSection";
import SectionGrid from "@/components/SectionGrid";
import Topbar from "@/components/Topbar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useMusicStore } from "@/stores/useMusicStore";
import { useEffect } from "react";

const HomePage = () => {
  const {
    fetchMadeForYouSongs,
    fetchTrendingSongs,
    fetchFeauturedSongs,
    madeForYouSongs,
    trendingSongs,
    isLoading,
  } = useMusicStore();

  useEffect(() => {
    fetchMadeForYouSongs();
    fetchTrendingSongs();
    fetchFeauturedSongs();
  }, [fetchMadeForYouSongs, fetchTrendingSongs, fetchFeauturedSongs]);

  return (
    <main className="h-full bg-gradient-to-b from-zinc-800 to-zinc-900 overflow-hidden rounded-md">
      <Topbar />
      <ScrollArea className="h-[calc(100vh-180px)]">
        <div className="p-4 sm:p-6">
          <h1 className="text-2xl sm:text-3xl font-bold mb-6">
            Good Afternoon
          </h1>
          <FeauturedSection />

          <div className="space-y-2">
            <SectionGrid
              title="Made For You"
              songs={madeForYouSongs}
              isLoading={isLoading}
            />
            <SectionGrid
              title="Trending"
              songs={trendingSongs}
              isLoading={isLoading}
            />
          </div>
        </div>
      </ScrollArea>
    </main>
  );
};

export default HomePage;
