const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: 'db',      // docker-compose içindeki servis adı!
  user: 'root',
  password: '123456',
  database: 'uygulama'
});

app.get('/', (req, res) => {
  db.query('SELECT NOW()', (err, result) => {
    if (err) return res.send('MySQL bağlantı hatası!');
    res.send(`MySQL bağlantısı başarılı ✅ Zaman: ${result[0]['NOW()']}`);
  });
});

app.listen(port, () => {
  console.log(`Uygulama ${port} portunda çalışıyor.`);
});
