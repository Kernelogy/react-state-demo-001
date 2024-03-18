import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { ChatRoom } from './ChatRoom';
import { Signup } from './Signup'


function App() {
  // const [roomId, setRoomId] = useState("general") // default state[roomId] value

  // const handleChange = (roomId) => {
  //   // alert("Welcome to " + roomId)
  //   setRoomId(roomId)
  // }

  return (
    <div className="App">
      {/* <h1>A Simple Chat App</h1>
      Select your room to chat 
      <select onChange={ 
        (event) => handleChange(event.target.value) 
      }>
        <option value="general">General</option>
        <option value="music">Music</option>
        <option value="cinema">Cinema</option>
      </select>
    <br></br>
    <ChatRoom chatId={roomId} /> */}
      <Signup />
    </div> 
  );
}

export default App;
