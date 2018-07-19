const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.listen(3000,'0.0.0.0', () => {
    console.log('listening at port 3000');
})