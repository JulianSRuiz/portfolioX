const express = require('express');
const app = express();
const port = 6020;

app.use(express.static(__dirname));
app.listen(port, () => console.log('Listening on port: ' + port));
