import React from "react"

const Video = ({ videoSrcURL, videoTitle}) => (
  <div className=" embed-responsive embed-responsive-16by9">
    <iframe
      className=""
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </div>
)
export default Video