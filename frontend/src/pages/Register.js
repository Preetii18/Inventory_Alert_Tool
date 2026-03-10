import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

function Register() {

const [username,setUsername] = useState("");
const [password,setPassword] = useState("");

const navigate = useNavigate();

const handleRegister = async () => {

 try {

  const res = await API.post("/register",{
    username: username,
    password: password
  });

  alert(res.data.message);

  navigate("/");   // redirect to login

 } catch(error){

  console.log(error);

  if(error.response){
    alert(error.response.data.detail);
  } else {
    alert("Registration failed");
  }

 }

};

return(

<div>

<h2>Register</h2>

<input
placeholder="Username"
value={username}
onChange={(e)=>setUsername(e.target.value)}
/>

<input
placeholder="Password"
type="password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<button onClick={handleRegister}>Register</button>

</div>

)

}

export default Register;