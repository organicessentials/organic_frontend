import React from "react";

const Video = () => {
  return (
    <div className="video_section">
      <div className="video_col">
        <div className="vid_frmae">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/zmCQG_8riUI?si=P8v3MvJsPRwq7oQL"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="vid_contain">
          <h2>Effective Stress Relief</h2>
          <span>
            Rhodiola Rosea Extract 500 has become an essential part of my daily
            routine. I've noticed a significant reduction in stress and an
            improvement in my overall mood. The capsules are easy to swallow,
            and I appreciate the natural ingredients. I highly recommend this
            product to anyone looking for a reliable stress-relief supplement.
          </span>
        </div>
      </div>
      <div className="video_col">
        <div className="vid_frmae">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/2fTosLHjqtI?si=xrXLDWjW9iE3jzLG"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="vid_contain">
          <h2>Great Stress Buster</h2>
          <span>
            Ashwagandha KSM-66 500mg has been a game-changer for me. It has
            significantly helped in reducing stress and promoting a sense of
            calmness. I've noticed improved sleep quality and enhanced focus
            during the day. The 500mg dosage is perfect, and I highly recommend
            it for anyone dealing with stress and anxiety.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Video;
