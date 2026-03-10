import { useNavigate } from "react-router-dom"
import "../styles/dashboard.css"

function Topbar(){

const navigate = useNavigate()

const logout = () => {

localStorage.removeItem("token")

navigate("/")

}

return(

<div className="topbar">

<h2>Dashboard</h2>

<button onClick={logout}>
Logout
</button>

</div>

)

}

export default Topbar