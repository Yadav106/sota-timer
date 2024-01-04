import React from 'react'
import Timer from './components/Timer'

const App = () => {
  return (
    <div
      className='h-screen w-screen bg-black'
      style={{
        backgroundImage: `url('https://i.pinimg.com/originals/78/78/63/787863a56b90d5f42791890a53b368d7.jpg')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className='flex justify-center h-full pt-[80px]'>
        <Timer />
      </div>
    </div>
  )
}

export default App