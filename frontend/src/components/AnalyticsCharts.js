import { Bar, Pie } from "react-chartjs-2";
import {
Chart as ChartJS,
CategoryScale,
LinearScale,
BarElement,
ArcElement,
Tooltip,
Legend
} from "chart.js";

import { useEffect, useState } from "react";
import API from "../api";

ChartJS.register(
CategoryScale,
LinearScale,
BarElement,
ArcElement,
Tooltip,
Legend
);

function AnalyticsCharts(){

const [items,setItems] = useState([])

const loadItems = async () => {
const res = await API.get("/items")
setItems(res.data)
}

useEffect(()=>{

loadItems()

// 🔥 Auto refresh every 3 seconds
const interval = setInterval(()=>{
loadItems()
},3000)

return () => clearInterval(interval)

},[])

const names = items.map(i=>i.name)
const quantities = items.map(i=>i.quantity)

const lowStock = items.filter(i=>i.quantity < i.threshold).length
const normalStock = items.length - lowStock

const barData = {
labels:names,
datasets:[
{
label:"Stock Quantity",
data:quantities,
backgroundColor:["#ff0033","#3aa0ff"]
}
]
}

const pieData = {
labels:["Low Stock","Healthy Stock"],
datasets:[
{
data:[lowStock,normalStock],
backgroundColor:["#ff0033","#00ff99"]
}
]
}

return(

<div style={{display:"flex",gap:"30px",marginTop:"30px"}}>

<div style={{width:"50%"}}>
<h3>Stock Levels</h3>
<Bar data={barData}/>
</div>

<div style={{width:"40%"}}>
<h3>Inventory Health</h3>
<Pie data={pieData}/>
</div>

</div>

)

}

export default AnalyticsCharts