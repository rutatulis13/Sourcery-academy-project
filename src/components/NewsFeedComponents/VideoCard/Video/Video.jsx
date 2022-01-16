import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import "./Video.scss";
import { ReactComponent as Pause } from "assets/pause.svg";
import { ReactComponent as Play } from "assets/play.svg";

const Video = (props) => {
  const [playing, setPlaying] = useState(false);
  // const [videoTime, setVideoTime] = useState(0);
  // const [currentTime, setCurrentTime] = useState(0);
  // const [progress, setProgress] = useState(0);
  const videoRef = useRef();
  //   const progressBar = useRef();

  // window.setInterval(function () {
  //   setCurrentTime(videoRef.current?.currentTime);
  //   setProgress((videoRef.current?.currentTime / videoTime) * 100);
  // }, 1000);

  const videoHandler = (control) => {
    if (control === "play") {
      videoRef.current.play();
      setPlaying(true);
      // var video = document.getElementById("video");
      // // setVideoTime(video.duration);
    } else if (control === "pause") {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  //   window.onload = function () {
  //     progress_bar.onClick = function (e) {
  //       video.currentTime =
  //         (e.offsetX / progress_bar.offsetWidth) * video.duration;
  //     };
  //   };

  //   const onClick = (e) => {
  //     var progress_bar = document.getElementById("progress_bar");
  //     var video = document.getElementById("video");
  //     videoRef.current.currentTime =
  //     setCurrentTime(
  //       (video.currentTime =
  //         (e.offsetX / progress_bar.offsetWidth) * video.duration)
  //     );
  //   };

  return (
    <div className="video">
      <video ref={videoRef} src={props.src} id="video">
        <track default kind="captions" />
      </video>
      {playing ? (
        <div className="video__button">
          <button onClick={() => videoHandler("pause")}>
            <Pause className="pause" alt="" />
          </button>
        </div>
      ) : (
        <div className="video__button">
          <button onClick={() => videoHandler("play")}>
            <Play className="play" alt="" />
          </button>
        </div>
      )}
      {/* <div className="video__time-controls">
        <div className="video__time-controls__control">
          {Math.floor(currentTime / 60) +
            ":" +
            ("0" + Math.floor(currentTime % 60)).slice(-2)}
        </div>
        <div className="video__time-controls__progressbar">
          <div
            style={{ width: `${progress}%` }}
            className="video__time-controls__progressbar__time"
          ></div>
        </div>
        <div className="video__time-controls__control">
          {Math.floor(videoTime / 60) +
            ":" +
            ("0" + Math.floor(videoTime % 60)).slice(-2)}
        </div>
      </div> */}
    </div>
  );
};

Video.propTypes = {
  src: PropTypes.node,
  id: PropTypes.node,
};

export default Video;
