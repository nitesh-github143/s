import './App.css';
import Video from './Components/Video';
import videosDB from './Components/data/data';
import Playbutton from './Components/Playbutton';
import { useState } from 'react';

function App() {

  const [videos, setVideos] = useState(videosDB)

  return (
    <div className="app" onClick={() => console.log('app')}>
      <div>
        <button onClick={(e) => {
          e.stopPropagation();
          setVideos([...videos, (
            {
              id: videos.length + 1,
              title: 'Demo Js',
              views: '10K',
              channel: 'coderDost',
              time: '1 year ago',
              verified: true
            }
          )])
        }}>Add Video</button>
      </div>
      {
        videos.map(({ id, title, views, channel, time, verified }) =>
          <Video key={id}
            id={id}
            title={title}
            views={views}
            channel={channel}
            time={time}
            verified={verified}
          >

            <Playbutton
              onPlay={() => console.log('playing', title)}
              onPause={() => console.log('paused', title)}>
              {title}
            </Playbutton>

          </Video>
        )
      }

    </div >
  );
}

export default App;
