import React,{useState} from "react";
import Tweet from "./tweet";

function App(){
const [users, setUsers] = useState([
{name:'Ed', message: "hello"},
{name:'bigg', message: "bigg me"},
{name:'nigga', message: "sup!"},

]);
  return(
    <div className="App">
      {users.map(user =>(
        <Tweet name={user.name} message={user.message}/>
      ))}
    </div>
  )
}

export default App;