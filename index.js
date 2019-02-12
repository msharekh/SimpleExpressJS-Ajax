const express = require('express');
const formidable = require('express-formidable');

const app = express();
const port = 3000;

// app.get('/', (req, res) => {
//   console.log('result', ':	', res);
//   res.send('Hello Mishal!');
// });
var path = require('path');

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/form.html'));
});
app.use(formidable());
app.post('/addBlock', function(req, res) {
  console.log('data', ':	', 'no data yete');
  console.log('data', ':	', JSON.stringify(req.fields));
  let r = req.fields;
  let fn = r.fname;
  let ln = r.lname;
  console.log(`fn = ${fn} and ln = ${ln}`);
  //return 'good...';
  res.send(r);
});

// app.post('/addData', (req, res) => {
//   console.log(JSON.stringify(res));
//   res.send(JSON.stringify(res));
// });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
