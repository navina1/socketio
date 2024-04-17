import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messageContainer/MessageContainer'

function Home() {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-clip-padding
        bg-teal-800 backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <Sidebar/>
            <MessageContainer/>
    </div>
  )
}

export default Home