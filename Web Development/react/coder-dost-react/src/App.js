import './App.css';
import videosDB from './Components/data/data';
import AddVideo from './Components/AddVideo';
import { useState } from 'react';
import VideoList from './Components/VideoList';

function App() {

  const [videos, setVideos] = useState(videosDB)
  const [editableVideo, setEditableVideo] = useState(null)

  function addVideos(video) {
    setVideos([...videos,
    { id: videos.length + 1, ...video }
    ])
  }
  function deleteVideo(id) {
    setVideos(videos.filter(video => video.id !== id))
  }
  function editVideo(id) {
    setEditableVideo(videos.find(video => video.id === id))
  }

  function updateVideo(video) {
    const index = videos.findIndex(v => v.id === video.id)
    const newVideo = [...videos]
    newVideo.splice(index, 1, video)
    setVideos(newVideo)
  }
  return (
    <div className="app" onClick={() => console.log('app')}>
      <AddVideo addVideo={addVideos} editableVideo={editableVideo} updateVideo={updateVideo}></AddVideo>
      <VideoList videos={videos} deleteVideo={deleteVideo} editVideo={editVideo}></VideoList>
    </div >
  );
}

export default App;
