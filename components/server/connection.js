const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2")
const cors = require("cors");

// Create the connection pool. The pool-specific settings are the defaults
const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password:'12345678',
	database:'db_registerform'

});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/register', (req,res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const mobile = req.body.mobile;
    const address = req.body.address;
    const radio = req.body.radio;
    const textArea = req.body.textArea;
	
	db.query('INSERT INTO registerform (firstname, lastname,email, mobile,address,oldstudent, reason) VALUES (?, ?, ?, ?, ?, ?, ?) ',
		[firstName, lastName, email, mobile,address,radio, textArea],
		(err, result) => {
			console.log(err)
			console.log(result) 
		})

})

app.listen(8000, () => {
    console.log("Server is running on port 8000");
})

