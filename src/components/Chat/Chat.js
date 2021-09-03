import React, { useState } from 'react'
import './Chat.css'
import { Avatar, IconButton } from '@material-ui/core';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';

function Chat() {
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([])

    const sendMessage = (e) => {
        e.preventDefault()
        const currentDate = new Date();
        let currentTime = currentDate.toLocaleTimeString('en-US', { hour: "numeric", minute: "numeric"});

        let messagesArr = [...messages]
        messagesArr.push({
            message: input,
            name: 'Shyam',
            timeStamp: currentTime,
            received: false
        })

        setMessages(messagesArr)

        console.log(messages)

        setInput('')
    }
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar/>
                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at...</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchIcon/>
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                {messages.map((el, i) => {
                    return (<p key={i} className={`chat__message ${!el.received && "chat__receiver"}`}>
                        <span className="chat__name">{messages.name}</span>
                        {el.message}
                        <span className="chat__timestamp">{el.timeStamp}</span>
                    </p>)
                })}
            </div>
            <div className="chat__footer">
                <InsertEmoticonIcon/>
                <form>
                    <input type="text" value={input} onChange={e => setInput(e.target.value)} placeholder="Type a message"/>
                    <button type="submit" onClick={sendMessage}>Send a message</button>
                </form>
                <MicIcon/>
            </div>
        </div>
    )
}
export default Chat
