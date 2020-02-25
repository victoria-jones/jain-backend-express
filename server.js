const express = require('express');
const app = express();

app.get('/server', (req, res) => {
  res.send({ express: 'EXPRESS backend is connected' });
  console.log('GAH!');
});

//set up port
const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log(`Listening on port: ${port}...`);
});
