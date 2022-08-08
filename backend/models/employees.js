const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({

    Name: {
        type : String,
        required: true
    },

    Basicsalary: {
        type : Number,
        required: true
    },


    OT:{
        type : Number,
        required: true
    },
    Vehicleallowance: {
        type: Number,
        required: true
    },
    Totaladdition: {
        type : Number,
        
    },
    Transport:{
        type : Number,
        required: true
    },
    Personaltel: {
        type: Number,
        required: true
    },
    Totaldeduction: {
        type: Number,
        
    },
    Netsalary: {
        type: Number,
        
    }

});


module.exports = mongoose.model("EmployeePayment",employeeSchema )


       