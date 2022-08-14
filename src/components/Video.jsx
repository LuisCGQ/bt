import React from 'react'
import "../styles/Video.css"


const Video = ()=> {
    return (
      <div className="video container d-flex align-items-center section">
          <iframe
            title='video_player'
            className='video_player'
            src="https://players.brightcove.net/6314453161001/default_default/index.html?videoId=6310879893112"
            allowfullscreen=""
            allow="encrypted-media"
            width="544"
            height="306" //16:9 Aspect Ratio
          ></iframe>
          <div className="video__info">
              <h3>Why buy with us?</h3>
              <p className='video__text'>Our low prices and excellent service have allowed us to become leaders in leaders in the automotive industry, we inspire trust, security and Confidence in everything we do.</p>
          </div>
      </div>
    );
}

export default Video