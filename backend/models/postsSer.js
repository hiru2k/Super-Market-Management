const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    
    cartID:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    delivery_charge:{
        type:Number,
        required:true
    },
    delivery_Date:{
         type:String,
         required:true
    },
    customerID:{
        type:String,
        required:true
    }


});

module.exports =  mongoose.model('Service',postSchema);

