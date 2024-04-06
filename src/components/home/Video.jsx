import React, { useRef, useState } from "react";
import video from "../../assets/videos/vid.mp4";
import playIcon from "../../assets/icons/play.svg";

const Video = () => {
  const vid = useRef();
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    vid.current.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    vid.current.pause();
    setIsPlaying(false);
  };

  return (
    <>
      <h1 className="video-title">Watch Our Memorable Trips</h1>
      <div className="video-wrapper">
        <video ref={vid} width="1580px">
          <source src={video} type="video/mp4" />
        </video>
        <div
          onClick={isPlaying ? handlePause : handlePlay}
          className={isPlaying ? "overlay-active" : "overlay"}
        ></div>
        {!isPlaying ? (
          <div className="video-btn" onClick={handlePlay}>
            <img src={playIcon} alt="play icon" />
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Video;
