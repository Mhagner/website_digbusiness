import React from "react";

import "../styles/video.css";

const VideoBackground = ({ video }) => {
  return (
    <div class="bg-video">
      <video class="bg-video__content" autoPlay muted loop>
        <source src={video} type="video/mp4" />
        <source src={video} type="video/webm" />
        Seu browser não suporta o video
      </video>
    </div>
  );
};

export default VideoBackground;
