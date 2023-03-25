import './Recording.css';
import video from "../assets/video.mov"

const Recording = () => {
  return (
    <video controls width="1080" className='video'>
        <source src={video} type="video/mp4"></source>
    </video>
  );
}

export default Recording;
