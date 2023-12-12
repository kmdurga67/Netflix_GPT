import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-[25%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-gray-500 w-screen aspect-video'>
        <h1 className='text-2xl md:text-6xl font-bold'>{title}</h1>
        <p className='hidden md:inline-block py-6 text-lg w-1/4'>{overview}</p>
        <div className='my-4 md:m-0'>
            <button className='bg-white text-black p-4 md:py-4 py-3 px-12 text-xl bg-opacity-50 rounded-lg hover:bg-opacity-90'>
                ▶ Play
            </button>
            <button className='hidden md:inline-block bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg mx-2'>
            More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle