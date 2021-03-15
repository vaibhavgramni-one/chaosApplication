const express = require('express');
const Task = require('../models/task');

const router = new express.Router()

router.post('/api/tasks' , async(req , res) => {
    try{
        
        if(!(req.body.title && req.body.description)){
            throw new Error('Please provide title and description')
        }

        const task = new Task(req.body)
        
        const taskAdded = await task.save();
        
        res.status(201).json({
            status : true,
            message : 'created successfully',
            data : taskAdded
        })
        
    }catch(e){
        res.status(400).json({
            status : false,
            message : e.message
        })
    }
})

router.get('/api/tasks' , async(req , res) => {
    try{
        const tasks = await Task.find({});
        
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

router.get('/api/tasks/:taskId' , async(req , res) => {
    try{

        if(req.params.taskId.length === 0){
            throw new Error('Please provide taskId to fetch data');
        }

        const task = await Task.findById(req.params.taskId)

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

router.put('/api/tasks/:taskId' , async(req , res) => {
    try{
        if(req.params.taskId.length === 0){
            throw new Error('Please provide taskId to update');
        }

        if(!(req.body.title && req.body.description)){
            throw new Error('Please provide valid title and description')
        }

        const task = await Task.findByIdAndUpdate({_id : req.params.taskId} , {$set : { ...req.body }} , {new : true})
        console.log(task);

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

router.delete('/api/tasks/:taskId' , async(req , res) => {
    try{
        const task = await Task.findOne({_id : req.params.taskId});
        
        if(!task){
            throw new Error('No task found with this Id, Please try something else...')
        }

        await Task.findOneAndRemove({_id : req.params.taskId});

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

