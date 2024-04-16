import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";


export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: recieverId } = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, recieverId] },
        });
        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, recieverId],
            })
        }
        const newMessage = new Message({
            senderId,
            recieverId,
            message,
        })
        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }
        //SOCKETIO FUNCTIONALITY 







        await Promise.all([conversation.save(), newMessage.save()]);
        res.status(201).json(newMessage);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Internal server error" })
    }
}

export const getMessage = async (req, res) => {
    try {
        const { id: userToChatID } = req.params;
        const senderId = req.user._id;

        const conversations = await Conversation.findOne({
            participants: { $all: [senderId, userToChatID] }
        }).populate("messages");
        if (!conversations){
            console.log("no convooooo")
            return res.status(200).json([]);
        } 
        const messages=conversations.messages;
        res.status(200).json(messages);

    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Internal server error" })
    }
}