const express = require('express')
const app = express()
const path = require('path')
const port = 8000

//standard routing
app.get('/', (req, res) => {
  res.send('<a href="/files/hello.txt">hello.txt</a>');
});

app.get('/files/:file(*)', (req, res, next) => {
  //definisi lokasi file
  var filePath = path.join(__dirname, 'files', req.params.file);
  //download response ke client
  res.download(filePath, (err) => {
    if (!err) return
    res.send('Cant find that file, sorry!');
  });
});
  

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});