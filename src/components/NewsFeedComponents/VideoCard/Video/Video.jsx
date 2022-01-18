import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import "./Video.scss";
import { ReactComponent as Pause } from "assets/pause.svg";
import { ReactComponent as Play } from "assets/play.svg";

const Video = (props) => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef();

  const videoHandler = (control) => {
    if (control === "play") {
      videoRef.current.play();
      setPlaying(true);
    } else if (control === "pause") {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

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
    </div>
  );
};

Video.propTypes = {
  src: PropTypes.node,
  id: PropTypes.node,
};

export default Video;
