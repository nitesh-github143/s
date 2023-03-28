import React from 'react'
import Video from './Video';
import Playbutton from './Playbutton';

const VideoList = ({ videos }) => {
    return (
        <>
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
        </>
    )
}

export default VideoList
