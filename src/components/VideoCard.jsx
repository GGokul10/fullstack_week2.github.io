import { useState } from "react";

export default function VideoCard({ video, liked, watchLater, onLike, onWatchLater }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="bg-black p-3 rounded shadow-md hover:shadow-lg transition text-white"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="w-full max-w-[320px] aspect-video rounded overflow-hidden">
        {hovered ? (
          <iframe
            src={`${video.videoUrl}?autoplay=1&mute=1&controls=0&modestbranding=1`}
            title={video.title}
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="w-full h-full"
          />
        ) : (
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      <div className="mt-2">
        <h3 className="text-md font-semibold">{video.title}</h3>
        <p className="text-sm text-gray-400">{video.channel}</p>
        <p className="text-sm text-gray-500">
          {video.views} • {video.time}
        </p>
      </div>

      <div className="flex justify-between mt-2 text-sm">
        <button onClick={() => onLike(video.id)}>
          {liked ? '❤️' : '🤍'} Like
        </button>
        <button onClick={() => onWatchLater(video.id)}>
          {watchLater ? '➖' : '➕'} Watch Later
        </button>
      </div>
    </div>
  );
}
