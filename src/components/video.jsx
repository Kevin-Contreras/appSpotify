import React from 'react';
import '../App.css'
const YouTubeVideo = (props) => {
  return (
    <div   className='sticky' >
      <iframe
       className='video'
        src={props.clickVideo}
        allow="autoplay"
        title="YouTube Video"
      ></iframe>
    </div>
  );
};

export default YouTubeVideo;