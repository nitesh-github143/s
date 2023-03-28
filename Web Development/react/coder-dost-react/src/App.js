import './App.css';
import videosDB from './Components/data/data';
import AddVideo from './Components/AddVideo';
import { useState } from 'react';
import VideoList from './Components/VideoList';

function App() {

  const [videos, setVideos] = useState(videosDB)

  function addVideos(video) {
    setVideos([...videos,
    { id: videos.length + 1, ...video }
    ])
  }

  return (
    <div className="app" onClick={() => console.log('app')}>
      <AddVideo addVideo={addVideos}></AddVideo>
      <VideoList videos={videos}></VideoList>
    </div >
  );
}

export default App;
