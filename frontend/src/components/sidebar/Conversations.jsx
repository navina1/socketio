import React from 'react'
import Conversation from './Conversation'
import useGetConversation from '../../hooks/useGetConversation'
import { getRandomEmoji } from '../../utils/emojis';

function Conversations() {
  const {loading,conversations}=useGetConversation();
  console.log("conversations", conversations);
  return (
    <div className='py-2 flex flex-col overflow-auto'>
      
       {conversations?.map((conversation)=>(
          <Conversation
              key={conversation._id}
              conversation={conversation}
              emoji={getRandomEmoji()}
          />
       ))}
        {loading ? <span className='loading loading-spinner'></span>:null}
    </div>
  )
}

export default Conversations