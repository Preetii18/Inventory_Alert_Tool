<h1 align="center">Automated Inventory Alert & Reporting Tool</h1>

<p align="center">
FastAPI + React + SQLite Inventory Monitoring System
</p>

<hr>

<h2>Project Overview</h2>

<p>
This project is a full stack <b>Inventory Management System</b> that monitors stock levels and automatically alerts when stock is low.  
Users can manage inventory, generate reports, and view analytics charts from a modern dashboard.
</p>

<b>Backend:</b> FastAPI <br>
<b>Frontend:</b> React <br>
<b>Database:</b> SQLite

<hr>

<h2>Features</h2>

<ul>
<li>User Registration and Login</li>
<li>Add, Update and Delete Inventory</li>
<li>Low Stock Alert System</li>
<li>Inventory Dashboard</li>
<li>Pie Chart & Graph Analytics</li>
<li>Export Reports (CSV / JSON)</li>
<li>Modern Neon Dashboard UI</li>
</ul>

<hr>

<h2>Project Structure</h2>

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
 ├ er_diagram.png
 ├ usecase_diagram.png
</pre>

<hr>

<h2>Team Members</h2>

<table>
<tr>
<th>Name</th>
<th>Role</th>
</tr>

<tr>
<td>Preeti</td>
<td>Database Design</td>
</tr>

<tr>
<td>Swagat</td>
<td>FastAPI Backend, API Integration, Charts</td>
</tr>

<tr>
<td>KrishnaPriya</td>
<td>Login & Registration System</td>
</tr>

<tr>
<td>Abhi</td>
<td>Frontend UI Design</td>
</tr>

<tr>
<td>Anish & Sarthak</td>
<td>Documentation, ER Diagram, Use Case Diagram, PPT</td>
</tr>

</table>

<hr>

<h2>Backend Setup</h2>

Install dependencies

<pre>
pip install -r requirements.txt
</pre>

Run FastAPI server

<pre>
uvicorn main:app --reload
</pre>

Backend runs at:

<pre>
http://127.0.0.1:8000
</pre>

API Docs:

<pre>
http://127.0.0.1:8000/docs
</pre>

<hr>

<h2>Frontend Setup</h2>

Go to frontend folder

<pre>
cd frontend
</pre>

Install node modules

<pre>
npm install
</pre>

<b>Important:</b>

The <b>node_modules</b> folder is not included in this repository because it is very large.

After installing dependencies, replace the generated <b>src</b> folder with the <b>src</b> folder provided in this repository.

Run frontend:

<pre>
npm start
</pre>

Frontend runs at:

<pre>
http://localhost:3000
</pre>

<hr>

<h2>Demo Workflow</h2>

<ol>
<li>Open the frontend</li>
<li>Register a new user</li>
<li>Login using credentials</li>
<li>Add inventory items</li>
<li>Update stock levels</li>
<li>Observe low stock alerts</li>
<li>View pie charts and graphs</li>
<li>Generate CSV or JSON reports</li>
</ol>

<hr>

<h2>Technologies Used</h2>

<ul>
<li>Python</li>
<li>FastAPI</li>
<li>SQLite</li>
<li>React</li>
<li>Chart.js</li>
<li>HTML / CSS</li>
</ul>

<hr>

<p align="center">
This project was developed for educational purposes.
</p>
