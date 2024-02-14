import React, { useState } from "react";
import styles from "./Track.module.css";

function Track(props) {
  const [isPlaying, setIsPlaying] = useState(false);

  function renderAction() {
    if (props.isRemoval) {
      return (
        <button className={styles["Track-action"]} onClick={passTrackToRemove}>
          -
        </button>
      );
    } else {
      return (
        <button className={styles["Track-action"]} onClick={passTrack}>
          +
        </button>
      );
    }
  }

  function passTrack() {
    props.onAdd(props.track);
  }

  function passTrackToRemove() {
    props.onRemove(props.track);
  }

  function playPreview() {
    setIsPlaying(true);
    setTimeout(() => setIsPlaying(false), 5000); // Stop playing after 5 seconds
  }

  return (
    <div className={styles.Track}>
      <div className={styles["Track-information"]}>
        <h3>{props.track.name}</h3>
        <button onClick={playPreview}>Play Preview</button>
        <p>
          {props.track.artist} | {props.track.album}
        </p>
      </div>
      {renderAction()}
      {isPlaying && (
        <audio controls autoPlay src={props.track.preview_url} />
      )}
    </div>
  );
}

export default Track;