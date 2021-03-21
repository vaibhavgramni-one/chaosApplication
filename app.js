const express = require('express');
const taskRoutes = require('./routes/task');

const app = express()

app.use(express.json())
app.use(taskRoutes);

const port = process.env.PORT || 9000

app.listen(port , () => {
    console.log('server is up and running at port : ' , port);
})