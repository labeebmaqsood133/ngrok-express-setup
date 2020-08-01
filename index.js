const express = require('express');
const app = express();
const router = express.Router();
const port = 8000;


router.get('/', (req, res) => {
  console.log(req);
  res.send('Hello World!');
});

router.post('/', (request, response) => {
  console.log(request.query);
  console.log(request.params);
  console.log(request.body);
});

// add router in the Express app.
app.use('/', router);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
