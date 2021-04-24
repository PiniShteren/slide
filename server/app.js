const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

const cors = require('cors');
app.use(cors());

app.use(express.json());

const mysql = require('mysql');

const db = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: process.env.DATABASE
});

db.connect((err, res) => {
      console.log('Connecting');
});

app.use('/doors', (req, res) => {
      var sqlSelcet = 'SELECT * FROM doors';
      db.query(sqlSelcet, (err, result) => {
            res.send(result)
      })
});

app.use('/like', (req, res) => {
      let id = req.body.id;
      let like;
      db.query(`SELECT likes FROM doors WHERE id = ${id}`, (err, result) => {
            if (result[0].likes > 0) {
                  like = result[0].likes + 1;
            }
            else {
                  like = 1;
            }
            addLike(id, like);
      });
});

const addLike = (id, like) => {
      db.query(`UPDATE doors SET likes = ${like} WHERE id = ${id}`, (err, result) => {
            if (err) throw err;
            console.log('s');
      })
}

app.listen(process.env.PORT)