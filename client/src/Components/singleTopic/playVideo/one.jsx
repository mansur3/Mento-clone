
// import React from 'react'
// import ReactPlayer from 'react-player/lazy'

const Video = ({oneVideo}) => {
    return (
        <video  style={{ width : "100%", height: "850px", borderRadius: "10px"}}  autoPlay controls>
                    <source src = {oneVideo} type = "video/mp4" />
                    <source src="movie.ogg" type="video/ogg" />
        </video>
        // <ReactPlayer url={oneVideo} />
    )
}


export {Video};