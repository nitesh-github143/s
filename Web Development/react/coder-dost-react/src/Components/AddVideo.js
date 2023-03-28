import React, { useEffect, useState } from 'react'

const initialState = {
    title: '',
    views: '',
    channel: 'coderDost',
    time: '1 year ago',
    verified: true
}

const AddVideo = ({ addVideo, editableVideo, updateVideo }) => {

    const [video, setVideo] = useState({ initialState })

    function handleSubmit(e) {
        e.preventDefault()
        if (editableVideo) {
            updateVideo(video)
        } else {
            addVideo(video)
        }
        e.stopPropagation()

        setVideo(initialState)
    }

    function handleChange(e) {
        e.stopPropagation()
        setVideo({
            ...video,
            [e.target.name]: [e.target.value]
        })
    }

    useEffect(() => {
        if (editableVideo) {
            setVideo(editableVideo)
        }
    }, [editableVideo])

    return (
        <div>
            <form >
                <input type="text" name='title' onChange={handleChange} placeholder='video title' value={video.title} />
                <input type="text" name='views' onChange={handleChange} placeholder='views' value={video.views} />

                <button
                    onClick={handleSubmit}
                >
                    {editableVideo ? 'Edit' : 'Add'} Video
                </button>
            </form>
        </div >
    )
}

export default AddVideo
