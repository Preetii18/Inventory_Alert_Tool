import Sidebar from "../components/Sidebar"
import Topbar from "../components/Topbar"
import Cards from "../components/Cards"
import InventoryTable from "../components/InventoryTable"
import "../styles/dashboard.css"
import AnalyticsCharts from "../components/AnalyticsCharts"

function Dashboard(){

return(

<div className="dashboard">

<Sidebar/>

<div className="main">

<Topbar/>

<Cards/>

<InventoryTable/>

<AnalyticsCharts/>

</div>

</div>

)

}

export default Dashboard