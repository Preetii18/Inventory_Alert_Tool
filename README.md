<!DOCTYPE html>
<html>
<head>
<title>Automated Inventory Alert & Reporting Tool</title>
<style>
body{
font-family:Arial;
background:#0f0f0f;
color:white;
padding:40px;
line-height:1.6;
}

h1,h2{
color:#3aa0ff;
}

code{
background:#1a1a1a;
padding:4px 8px;
border-radius:5px;
color:#00ff88;
}

pre{
background:#1a1a1a;
padding:15px;
border-radius:8px;
overflow:auto;
}

table{
border-collapse:collapse;
width:100%;
margin-top:10px;
}

th,td{
border:1px solid #444;
padding:10px;
text-align:left;
}

th{
background:#3aa0ff;
color:black;
}

</style>
</head>

<body>

<h1>Automated Inventory Alert & Reporting Tool</h1>

<h2>Project Overview</h2>
<p>
The <b>Automated Inventory Alert & Reporting Tool</b> is a full-stack web application that helps monitor stock levels and generate inventory reports.
The system alerts users when stock falls below a defined threshold and provides graphical analytics of inventory data.
</p>

<p>
<b>Backend:</b> FastAPI<br>
<b>Frontend:</b> React<br>
<b>Database:</b> SQLite
</p>

<h2>Features</h2>
<ul>
<li>User Registration and Login</li>
<li>Inventory Management (Add, Update, Delete)</li>
<li>Low Stock Alerts</li>
<li>Dashboard with Charts</li>
<li>Export Reports (CSV / JSON)</li>
<li>Modern Dashboard UI</li>
</ul>

<h2>System Architecture</h2>
<pre>
React Frontend
      ↓
FastAPI Backend
      ↓
SQLite Database
</pre>

<h2>Team Members</h2>

<table>
<tr>
<th>Name</th>
<th>Contribution</th>
</tr>

<tr>
<td>Preeti</td>
<td>Database Design</td>
</tr>

<tr>
<td>Swagat</td>
<td>FastAPI Backend & Charts</td>
</tr>

<tr>
<td>KrishnaPriya</td>
<td>Login / Register System</td>
</tr>

<tr>
<td>Abhi</td>
<td>Frontend UI Design</td>
</tr>

<tr>
<td>Anish & Sarthak</td>
<td>Documentation, ER Diagram, Use Case Diagram</td>
</tr>

</table>

<h2>Project Folder Structure</h2>

<pre>
inventory-alert-system

backend
 ├ main.py
 ├ database.py
 ├ models.py
 ├ schemas.py
 ├ auth.py
 ├ reports.py
 ├ requirements.txt

frontend
 ├ src
 ├ package.json

diagrams
 ├ ER_diagram.png
 ├ Use_case_diagram.png
</pre>

<p>
<b>Note:</b> The <b>node_modules</b> folder is not included in the repository because it is very large.
Users must install dependencies manually.
</p>

<h2>How to Run the Project</h2>

<h3>1. Backend Setup (FastAPI)</h3>

<p>Navigate to backend folder:</p>

<pre><code>cd backend</code></pre>

<p>Install dependencies:</p>

<pre><code>pip install -r requirements.txt</code></pre>

<p>Run backend server:</p>

<pre><code>uvicorn main:app --reload</code></pre>

<p>Backend will run at:</p>

<code>http://127.0.0.1:8000</code>

<p>API documentation:</p>

<code>http://127.0.0.1:8000/docs</code>

<h3>2. Frontend Setup (React)</h3>

<p>Navigate to frontend folder:</p>

<pre><code>cd frontend</code></pre>

<p>Install node modules:</p>

<pre><code>npm install</code></pre>

<p>Replace the generated <b>src</b> folder with the <b>src</b> folder provided in this repository.</p>

<p>Run the frontend:</p>

<pre><code>npm start</code></pre>

<p>The frontend will run at:</p>

<code>http://localhost:3000</code>

<h2>Demo Workflow</h2>

<ol>
<li>Open the frontend in the browser</li>
<li>Register a new user</li>
<li>Login with credentials</li>
<li>Add inventory items</li>
<li>Update stock levels</li>
<li>View low stock alerts</li>
<li>Observe analytics charts</li>
<li>Export reports (CSV / JSON)</li>
</ol>

<h2>Technologies Used</h2>

<ul>
<li>Python</li>
<li>FastAPI</li>
<li>SQLite</li>
<li>React</li>
<li>Chart.js</li>
<li>HTML / CSS</li>
</ul>

<h2>Notes</h2>

<ul>
<li>SQLite is used for easy setup.</li>
<li>Node modules are excluded to keep the repository lightweight.</li>
<li>Backend and frontend servers must run simultaneously.</li>
</ul>

<h2>License</h2>
<p>This project is created for educational purposes.</p>

</body>
</html>

