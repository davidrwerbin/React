//modules:
import { useState } from 'react'
import { ChatInput } from './components/ChatInput'
import ChatMessages from './components/ChatMessages'
import './App.css'
        
function App(){
  //1. create the data 2. convert to html
/*
  return(
      <>
          <ChatInput/>
          <ChatMessage 
            message = "hola robot" 
            sender="user"
          />
          <ChatMessage 
            message = "hello human" 
            sender = "robot"
          />
          <ChatMessage 
            message = "do you wanna be my friend?" 
            sender="user"
          />
          <ChatMessage
            message = "Sure!" 
            sender = "robot"
          />
      </>
  );
  */

  //current data:
  //const chatMessages = array[0];
  //updater FUNCTION:
  //const setChatMessages = array[1];
  //Array deconstructuring
  //const [chatMessages, setChatMessages] = array;
  //In React, you should never change the data dire ctly. You always create a copy

  const [chatMessages, setChatMessages] = useState([{
    message: 'hola robot',              
    sender: 'user',
    id: 'id1'
  },  {
    message: 'hello human',
    sender: 'robot',
    id: 'id2'
  }, {
    message: 'do you wanna be my friend?',
    sender: 'user',
    id: 'id3'
  }, {
    message: 'Sure!',
    sender: 'robot',
    id: 'id4' 
  }])

  return(
    <div className = "app-container">
      <ChatMessages
        chatMessages = {chatMessages}
      />
      <ChatInput
        chatMessages = {chatMessages}
        setChatMessages = {setChatMessages} 
      />
    </div>
  );
}
     
export default App
