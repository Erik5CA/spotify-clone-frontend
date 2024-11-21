import { statsData } from "@/constants";
import { useMusicStore } from "@/stores/useMusicStore";
import StatsCard from "./StatsCard";

const DashboardStats = () => {
  const { stats } = useMusicStore();
  const totalValues = [
    stats.totalSongs.toString(),
    stats.totalAlbums.toString(),
    stats.totalArtists.toString(),
    stats.totalUsers.toString(),
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {statsData.map((stat, index) => (
        <StatsCard
          key={stat.label}
          icon={stat.icon}
          label={stat.label}
          value={totalValues[index]}
          bgColor={stat.bgColor}
          iconColor={stat.iconColor}
        />
      ))}
    </div>
  );
};

export default DashboardStats;
