import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-[25%] px-24 absolute text-white bg-gradient-to-r from-gray-500 w-screen aspect-video'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div className=''>
            <button className='bg-white text-black p-4 px-12 text-xl bg-opacity-50 rounded-lg hover:bg-opacity-90'>
                ▶ Play
            </button>
            <button className='bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg mx-2'>
            More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle