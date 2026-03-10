import { useEffect, useState } from "react";
import API from "../api";

function InventoryTable(){

const [items,setItems] = useState([]);
const [name,setName] = useState("");
const [quantity,setQuantity] = useState("");
const [threshold,setThreshold] = useState("");

const fetchItems = async () => {

 const res = await API.get("/items");
 setItems(res.data);

};

useEffect(()=>{

 fetchItems();

},[]);


// ADD ITEM
const addItem = async () => {

 if(!name || !quantity || !threshold){
  alert("Fill all fields");
  return;
 }

 await API.post("/add-item",{
   name,
   quantity: parseInt(quantity),
   threshold: parseInt(threshold)
 });

 setName("");
 setQuantity("");
 setThreshold("");

 fetchItems();

};


// UPDATE STOCK
const updateStock = async(id) => {

 const newQty = prompt("Enter new quantity");

 if(!newQty) return;

 await API.put(`/update-stock/${id}`,{
   quantity: parseInt(newQty)
 });

 fetchItems();

};


// DELETE ITEM
const deleteItem = async(id) => {

 await API.delete(`/delete-item/${id}`);

 fetchItems();

};


// EXPORT REPORTS
const exportCSV = async () => {

 await API.get("/export/csv");

 alert("CSV report generated");

};

const exportJSON = async () => {

 await API.get("/export/json");

 alert("JSON report generated");

};

return(

<div>

<h2>Inventory Management</h2>

{/* LOW STOCK ALERT */}
{items.map(item => (
 item.quantity < item.threshold && (
   <div key={item.id} className="lowstock">
     ⚠ LOW STOCK ALERT: {item.name} (Remaining: {item.quantity})
   </div>
 )
))}


{/* ADD ITEM FORM */}

<h3>Add Item</h3>

<input
placeholder="Item Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<input
placeholder="Quantity"
value={quantity}
onChange={(e)=>setQuantity(e.target.value)}
/>

<input
placeholder="Threshold"
value={threshold}
onChange={(e)=>setThreshold(e.target.value)}
/>

<button onClick={addItem}>
Add Item
</button>


<br/><br/>


{/* REPORT BUTTONS */}

<button className="export-btn" onClick={exportCSV}>
Export CSV
</button>

<button className="export-btn" onClick={exportJSON}>
Export JSON
</button>


<br/><br/>


{/* INVENTORY TABLE */}

<table border="1" cellPadding="10">

<tr>
<th>ID</th>
<th>Name</th>
<th>Quantity</th>
<th>Threshold</th>
<th>Actions</th>
</tr>

{items.map(item => (

<tr key={item.id}>

<td>{item.id}</td>

<td>{item.name}</td>

<td>{item.quantity}</td>

<td>{item.threshold}</td>

<td>

<button
className="update-btn"
onClick={()=>updateStock(item.id)}
>
Update
</button>

<button
className="delete-btn"
onClick={()=>deleteItem(item.id)}
>
Delete
</button>

</td>

</tr>

))}

</table>

</div>

)

}

export default InventoryTable;