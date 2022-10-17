import React from "react";

const Video = ({ videoSrc }) => {
  return (
    <video controls width="100%" height="553px" autoPlay loop muted >
      <source src={videoSrc} type="video/mp4" />
      Sorry, your browser doesn't support embedded videos.
    </video>
  );
};

export default Video;
