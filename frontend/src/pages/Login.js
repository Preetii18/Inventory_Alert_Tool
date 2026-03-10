import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../api";
import "../styles/auth.css";

function Login(){

const [username,setUsername]=useState("")
const [password,setPassword]=useState("")

const navigate = useNavigate()

const handleLogin = async () => {

try{

const res = await API.post("/login",{username,password})

localStorage.setItem("token",res.data.access_token)

navigate("/dashboard")

}catch{

alert("Invalid credentials")

}

}

return(

<div className="auth-container">

<div className="auth-box">

<h2>Inventory Login</h2>

<input
placeholder="Username"
onChange={(e)=>setUsername(e.target.value)}
/>

<input
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<button onClick={handleLogin}>Login</button>

<p>
New user? <Link to="/register">Register</Link>
</p>

</div>

</div>

)

}

export default Login