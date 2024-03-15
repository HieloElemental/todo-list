const Express = require('express');

const app = Express();

app.get('/', (req, res) => {
  res.send('Welcome to "/" route');
});

app.listen(3000, () => {
  console.log('app listening on port 3000');
});
