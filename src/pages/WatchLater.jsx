import { videos } from "../data/dummyVideos";
import VideoCard from "../components/VideoCard";

export default function WatchLater({ watchLater, setWatchLater, likedVideos, setLikedVideos }) {
  const handleRemove = (id) => {
    const updated = { ...watchLater, [id]: false };
    sessionStorage.setItem("watchLater", JSON.stringify(updated));
    setWatchLater(updated);
  };

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {videos.filter(v => watchLater[v.id]).map(video => (
        <VideoCard
          key={video.id}
          video={video}
          liked={likedVideos[video.id]}
          watchLater={true}
          onLike={() => {}}
          onWatchLater={handleRemove}
        />
      ))}
    </div>
  );
}
