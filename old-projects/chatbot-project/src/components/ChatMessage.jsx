import RobotProfileImage from '../assets/robot.png'
import UserProfileImage from '../assets/human.png'
import './ChatMessage.css'

export function ChatMessage({message, sender}){
    //const message = props.message;
    //const sender = props.sender;
    // const {message, sender} = props;
    /*
    if(sender === "robot"){
        return(
        <div>
            {message}
            <img src = "Images/robot.png" width = "50"></img>
        </div>
        );
    }
    return(
        <div>
        {message}
            <img src = "Images/human.png" width = "50"></img>
        </div>
    )
    */
    return(
        <div className = {
        sender ==="user" 
            ? "chat-message-user"
            :"chat-message-robot"
        }>
        {sender === 'robot' && (
            <img src = {RobotProfileImage}                    className = "chat-message-profile"
            />
        )}
        <div className = "chat-message-text">
            {message}
        </div>
        {sender === 'user' && (
            <img src = {UserProfileImage}
            className = "chat-message-profile"
            />
        )}
        </div>
    )
}