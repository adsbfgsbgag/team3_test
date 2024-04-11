/*const express = require("express");
 const app = express();
 const PORT = process.env.PORT || 4000;
 const path = require("path");
 const cors = require("cors");
 const db = require("./config/db");
//  const bcrypt = require("bcrypt");
//  const jwt = require("jsonwebtoken");

 app.use(express.json());
 app.use(express.urlencoded({ extended: true }));
 app.use(
   cors({
     origin: "*",
     credentials: true,
     optionsSuccessStatus: 200,
   })
 );

 app.listen(PORT, () => {
   console.log(`Server On : http://localhost:${PORT}`);
 });

 app.use(express.static(path.join(__dirname, "/build")));

 app.get("/", (req, res) => {
   res.sendFile(path.join(__dirname, "/build/index.html"));
 });

 app.get("/list", (req, res) => {
   console.log("/");
   db.query("select * from user", (err, data) => {
     if (!err) {
       res.send(data);
     } else {
       console.log(err);
     }
   });
 });


app.get("*", (req, res) => {
   res.sendFile(path.join(__dirname, "/build/index.html"));
 });*/
 
 /*const express = require("express");
 const app = express();
 const PORT = process.env.PORT || 4000;
 const path = require("path");
 const cors = require("cors");
 const db = require("./config/db");
//  const bcrypt = require("bcrypt");
//  const jwt = require("jsonwebtoken");

 app.use(express.json());
 app.use(express.urlencoded({ extended: true }));
 app.use(
   cors({
     origin: "*",
     credentials: true,
     optionsSuccessStatus: 200,
   })
 );

 app.listen(PORT, () => {
   console.log(`Server On : http://localhost:${PORT}`);
 });

 app.post('/api/signup', (req, res) => {
    const { email, password, invitationCode } = req.body;
    // 초대 코드 검증 로직 (가정)
    const isValidInvitationCode = checkInvitationCode(invitationCode);
  
    if (isValidInvitationCode) {
      // 초대 코드가 유효한 경우, 사용자를 관리자로 등록
      // 데이터베이스 사용자 생성 로직 (가정)
      createUser(email, password, 'admin');
      res.json({ success: true, message: '관리자로 등록되었습니다.' });
    } else {
      // 초대 코드가 없거나 유효하지 않은 경우, 일반 사용자로 등록
      createUser(email, password, 'user');
      res.json({ success: true, message: '일반 사용자로 등록되었습니다.' });
    }
  });
  
  function checkInvitationCode(invitationCode) {
    // 초대 코드 검증 로직 구현 (가정)
    return invitationCode === 'SECRET_CODE'; // 예시용 하드코딩된 값
  }
  
  function createUser(email, password, role) {
    // 데이터베이스에 사용자를 생성하는 로직 구현 (가정)
    console.log(`User created: ${email}, Role: ${role}`);
  }
  

 app.use(express.static(path.join(__dirname, "/build")));

 app.get("/", (req, res) => {
   res.sendFile(path.join(__dirname, "/build/index.html"));
 });

 


app.get("*", (req, res) => {
   res.sendFile(path.join(__dirname, "/build/index.html"));
 });*/
 const express = require('express');

 const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const path = require("path");
const jwt = require('jsonwebtoken');
const cors = require('cors');

const db = require("./config/db");
const app = express();

const PORT = process.env.PORT || 4000;

app.use(
  cors({
    origin: "*",
    credentials: true,
    optionsSuccessStatus: 200,
  })
);
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));



// 회원가입 API
app.post('/api/register', async (req, res) => {
  const { user_id, name, email, password, tel, dateJoined, address } = req.body;
  const hashedPassword = await bcrypt.hash(password, 8);

 const query = 'INSERT INTO user2 (user_id, name, email, password, tel, dateJoined, address) VALUES (?, ?, ?, ?, ?, ?, ?)';
  
  db.query(query, [user_id, name, email, hashedPassword, tel, dateJoined, address], (err, results) => {
    if (err) throw err;
    res.status(201).send({ message: 'User registered successfully!' });
  });
});





// 로그인 API
app.post('/api/login', (req, res) => {
  const { user_id, name, email, password, tel, dateJoined, address } = req.body;

  const query = 'SELECT * FROM users WHERE email = ?';

  db.query(query, [email], async (err, results) => {
    if (err) throw err;
    if (results.length > 0) {
      const comparison = await bcrypt.compare(password, results[0].password);
      if (comparison) {
        const token = jwt.sign({ id: results[0].id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.send({ message: 'Login successful!', token });
      } else {
        res.status(401).send({ message: 'Invalid credentials!' });
      }
    } else {
      res.status(404).send({ message: 'User not found!' });
    }
  });
});

app.use(express.static(path.join(__dirname, "/build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/build/index.html"));
});




app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
