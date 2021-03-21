const express = require('express');
const { v4 : uuidv4 } = require('uuid');
const router = new express.Router()

let tasks = [];


router.get('/api/home', (req, res) => {
	res.end('<h1>Welcome to task app</h1>');
})

router.post('/api/tasks' , (req , res) => {
    try{
        
        if(!(req.body.title && req.body.description)){
            throw new Error('Please provide title and description')
        }

        const task = {...req.body , _id : uuidv4() }
        tasks.push(task);
    
        res.status(201).json({
            status : true,
            message : 'created successfully',
            data : task
        })
        
    }catch(e){
        res.status(400).json({
            status : false,
            message : e.message
        })
    }
})

router.get('/api/tasks' , (req , res) => {
    try{
        res.status(200).json({
            status : true,
            message : 'fetched successfully',
            data : tasks
        })

    }catch(e){
        
        res.status(500).json({
            status : false,
            message : e.message
        })

    }
})

router.get('/api/tasks/:taskId' , (req , res) => {
    try{

        if(req.params.taskId.length === 0){
            throw new Error('Please provide taskId to fetch data');
        }
        
        console.log(req.params.taskId);
        const task = tasks.find((task) => {
            return task._id === req.params.taskId
        })

        if(!task){
            throw new Error('No task associated with this Id or please push a new task')
        }

        res.status(200).json({
            status : true,
            message : 'fetched successfully',
            data : task
        })

    }catch(e){

        res.status(500).json({
            status : false,
            message : e.message
        })
    }
})

router.put('/api/tasks/:taskId' , (req , res) => {
    try{
        if(req.params.taskId.length === 0){
            throw new Error('Please provide taskId to update');
        }

        if(!(req.body.title && req.body.description)){
            throw new Error('Please provide valid title and description')
        }

        const task = tasks.find((task) => {
            if(task._id === req.params.taskId){
                task.title = req.body.title;
                task.description = req.body.description;
            }

            return task
        })

        if(!task){
            throw new Error('No task associated with this id..');
        }

        console.log('updated task.... ', task);
        console.log('all tasks...', tasks);

        res.status(200).json({
            status : true,
            message : 'updated successfully',
            data : task
        })

    }catch(e){
        res.status(400).json({
            status : false,
            message : e.message
        })
    }
})

router.delete('/api/tasks/:taskId' , (req , res) => {
    try{
        const task = tasks.find((task) => task._id === req.params.taskId)

        if(!task){
            throw new Error('No task found with this Id, Please try something else...')
        }

        tasks = tasks.filter((task) => {
            return task._id !== req.params.taskId
        })

        res.status(200).json({
            status : true,
            message : 'deleted successfully',
            data : task
        })


    }catch(e){
        res.status(500).json({
            status : false,
            message : e.message
        })
    }
})

module.exports = router

