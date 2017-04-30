var app = require('express')();

app.get('/', (req,res) => {
  res.send("<h1>Some text</h1>");
});

app.listen(3000, () => {
  console.log("Listening in port 3000");
});
