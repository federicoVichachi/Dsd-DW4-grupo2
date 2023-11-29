import { useState, useEffect } from "react"
import io from "socket.io-client"
import "./chat.css"

const socket = io("/")

function Chat() {

    const [message, setMessage] = useState("")
    const [messages, setMessages] = useState([])

    const handleSubmit = e => {
        e.preventDefault()
        const newMessage = {
            body: message,
            from: "Yo"
        }
        setMessages([...messages, newMessage])
        socket.emit("message", message)
    }

    useEffect(() => {
        socket.on("message", receiveMessage)
        return() => {
            socket.off("message", receiveMessage)
        }
    }, [])

    const receiveMessage = message => setMessages(state => [...state, message])

    return(
        <>
            <div id="chat">
                <ul>
                    {
                        messages.map((message, i) => (
                            <li key={i}>{message.from}: {message.body}</li> 
                        ))
                    }
                </ul>
            </div>
            <form id="chat-form" onSubmit={handleSubmit}>
                <input type="text" placeholder="Escribe un mensaje..." onChange={e => setMessage(e.target.value)} />
                <button>Enviar</button>
            </form>
        </>
    )
}

export default Chat