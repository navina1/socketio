import React from 'react'
import {useAuthContext} from "../../context/AuthContextProvider.jsx";
import useConversation from '../../zustand/useConversation.js';
import { extractTime } from '../../utils/extractTime.js';

function Message({message}) {
    const {authUser}=useAuthContext();
    const {selectedConversation}=useConversation();
    const fromMe=message.senderId==authUser._id;
    const chatClassName=fromMe ? 'chat-end' : 'chat-start';
    const profilePic=fromMe ? authUser?.profilePicture : selectedConversation?.profilePicture;
    const bubbleBgColor=fromMe ? 'bg-blue-500' :'';
    const newTime=extractTime(message.createdAt);
    const shakeClass=message?.shouldShake ? "shake" : "";
    return (
        <div className={`chat ${chatClassName}`}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS chat bubble component" src={profilePic} />
                </div>
            </div>
            <div className="chat-header">
                <time className="text-xs opacity-50">{newTime}</time>
            </div>
            <div className={`chat-bubble ${bubbleBgColor} ${shakeClass}`}>{message.message}</div>
            <div className="chat-footer opacity-50">
                Delivered
            </div>
        </div>
    )
}

export default Message