import React, { useState } from 'react'

const initialState = {
    title: '',
    views: '',
    channel: 'coderDost',
    time: '1 year ago',
    verified: true
}

const AddVideo = ({ addVideo }) => {

    const [video, setVideo] = useState({ initialState })

    function handleSubmit(e) {
        e.preventDefault()
        e.stopPropagation()
        addVideo(video)
        setVideo(initialState)
    }

    function handleChange(e) {
        e.stopPropagation()
        // console.log(e.target.name, e.target.value)
        setVideo({
            ...video,
            [e.target.name]: [e.target.value]
        })
        // console.log(video)
    }

    return (
        <div>
            <form >
                <input type="text" name='title' onChange={handleChange} placeholder='video title' value={video.title} />
                <input type="text" name='views' onChange={handleChange} placeholder='views' value={video.views} />

                <button
                    onClick={handleSubmit}

                >
                    Add Video
                </button>
            </form>
        </div >
    )
}

export default AddVideo
