// 기본구성

// const express = require("express");
// const app = express();
// const PORT = process.env.PORT || 4000;
// const path = require("path");
// const cors = require("cors");
// const db = require("./config/db");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(
//   cors({
//     origin: "*",
//     credentials: true,
//     optionsSuccessStatus: 200,
//   })
// );

// app.listen(PORT, () => {
//   console.log(`Server On : http://localhost:${PORT}`);
// });

// app.use(express.static(path.join(__dirname, "/build")));

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "/build/index.html"));
// });

// app.get("/products", (req, res) => {
//   console.log("/products");
//   db.query("select * from shopTable", (err, data) => {
//     if (!err) {
//       res.send(data);
//     } else {
//       console.log(err);
//     }
//   });
// });

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "/build/index.html"));
// });
