import './intro.scss';
import {init} from 'ityped'
import { useEffect, useRef } from 'react';

function Intro() {
  const textRef = useRef();

  useEffect(() =>{
  init(textRef.current, {
    showCursor: true,
    backDelay: 1500,
    backSpeed: 60,
    showCursor:true,
    strings: ["React JS", "JavaScript"],
  });
  },[])

  return (
    <div className='intro' id='intro'>
      <div className='left'>
        <div className='imgContainer'>
          <img src='assets/vikas.jpg' alt='img' />
        </div>
      </div>
      <div className='right'>
        <div className='wrapper'>
          <h2>Hi there, I'm</h2>
          <h1>Vikas Hirave</h1>
          <h3><span ref={textRef}>Frontend </span> Developer</h3>
        </div>
        <a href='#portfolio'>
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}

export default Intro;
