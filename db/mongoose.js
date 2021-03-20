// configuration related to mongoDB //

const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo:27017/taskApp' , {
    useCreateIndex  : true,
    useUnifiedTopology : true,
    useNewUrlParser : true,
    useFindAndModify : false
})
.then(() => console.log('connected to mongodb successfully...'))
.catch((err) => console.log(err))

