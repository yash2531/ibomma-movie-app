import React from 'react'
import '../Styles/Bug.css'

export const Bug = () => {
  return (
    <div >
      <h2 className='title-bug'>Bug Report</h2>
      <h2 className="faq">FAQ:</h2>
      <br />
      <p >Video is Not Playing/Streaming:</p>
      <br/>
      <ul className='list-p'>
        <li>
          If you are using the video on a website, make sure that it has an
          audio track.
        </li>
        <li>
          Allow cookies 
        </li>
        <li>
          check your browser and disable any plugins 
        </li>
      </ul>
    </div>
  );
}
