import mysql from "mysql2";

const db = mysql.createConnection({
  host: "localhost",
  user: "appuser",
  password: "password123",     // change if needed
  database: "simpledb"
});

db.connect(err => {
  if (err) console.log("DB Error: ", err);
  else console.log("MySQL Connected");
});

export default db;
