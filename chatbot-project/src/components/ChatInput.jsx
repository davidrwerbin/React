import {useState} from 'react'
import { chatbot } from 'supersimpledev'
import './ChatInput.css'

export function ChatInput({chatMessages, setChatMessages}){
    //We will use State when we want to save Data that changes over time
    //set --> updater function
    const [inputText, setInputText] = useState('');
    //event is an object ({ , ,}) that contains details about what is happening in the prop onChange below

    function saveInputText(event){
    setInputText(event.target.value);
    }

    function sendMessage() { 
        // ... = Spread Operator (copy)
        //Ya entiendo pq coño lo utiliza: al copiarlo, activa de vuelta el state con todos los mssgs,
        const newChatMessages = [
            ...chatMessages, {
        message: inputText,
        sender: 'user',
        id: crypto.randomUUID()
        }]

        setChatMessages(newChatMessages)
        
        const response = chatbot.getResponse(inputText);

        setChatMessages([
            ...newChatMessages, {
        message: response,
        sender: 'robot',
        id: crypto.randomUUID()
        }])

        setInputText('');
    }

    return(
    <div className = "chat-input-container">
        <input 
        placeholder = "Send a message to ChatBot" 
        size = "30"
        onChange  = {saveInputText}
        value = {inputText}
        className= "chat-input"
        />
        <button
        onClick = {sendMessage}
        className = "send-button"
        >Send</button>
    </div>
    )
    
}
