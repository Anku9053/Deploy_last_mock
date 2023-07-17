const express = require('express');
require("dotenv").config()
const cors = require('cors');
const boardRoutes = require('./routes/board.routes');
const taskRoutes = require('./routes/task.route');
const subtaskRoutes = require('./routes/subtask.routes');
const {connection} = require("./db")
const app = express();
app.use(express.json())
app.use(cors());
app.use('/boards', boardRoutes);
app.use('/tasks', taskRoutes);
app.use('/subtasks', subtaskRoutes);

// server 
app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("connected to Db")
        console.log(`server is running at port ${process.env.port}`)
    } catch (err) {
        console.log(err)
        console.log("wrong here")
    }
})
