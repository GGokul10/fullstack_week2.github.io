import { useEffect, useState } from "react";
import { videos } from "../data/dummyVideos";
import VideoCard from "../components/VideoCard";

export default function Home({ likedVideos, watchLater, setLikedVideos, setWatchLater }) {
  const handleLike = (id) => {
    const updated = { ...likedVideos, [id]: !likedVideos[id] };
    sessionStorage.setItem("likedVideos", JSON.stringify(updated));
    setLikedVideos(updated);
  };

  const handleWatchLater = (id) => {
    const updated = { ...watchLater, [id]: !watchLater[id] };
    sessionStorage.setItem("watchLater", JSON.stringify(updated));
    setWatchLater(updated);
  };

  return (
    <div className="bg-black text-white p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {videos.map(video => (
        <VideoCard
          key={video.id}
          video={video}
          liked={likedVideos[video.id]}
          watchLater={watchLater[video.id]}
          onLike={handleLike}
          onWatchLater={handleWatchLater}
        />
      ))}
    </div>
  );
}
