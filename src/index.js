const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/video'); // 引入视频路由

const app = express();
app.use(bodyParser.json());
app.use(cors());


app.use('/api', routes); // 挂载视频路由

const port = 3000

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
});