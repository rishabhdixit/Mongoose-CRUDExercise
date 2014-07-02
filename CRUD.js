var mongoose = require('mongoose');
var URIStirng = 'mongodb://localhost/test';

console.log("Node js server started.....");

mongoose.connect(URIStirng,function(err){
    if(err){
        console.log("Error connection to db:"+err);
    }else{
        console.log("Successfully connected to source db");
    }
});



var employeeSchema = new mongoose.Schema({
    CompanyName:{type:String},
    Name:{type:String,unique:true},
    Age:{type:Number,min:21,max:60},
    Salary:{type:Number}
});

var employeeModel = mongoose.model('Employee',employeeSchema);


//Create operation
var employee = new employeeModel({
    CompanyName:'Intelligrape',
    Name:'rishabh',
    Age:24,
    Salary:10000
});
employee.save(function(err){
    if(err){
        console.log("Error occurred while saving the record: "+err);
    }else{
        console.log("Record saved successfully");
    }
});


//Read operation
employeeModel.find({}).exec(function(err,result){
    if(err){
        console.log("Error occurred while fetching the record: "+err);
    }else{
        console.log(result);
    }
});

//Update operation
employeeModel.update({Name:'rishabh'},{Name:'rishabh dixit'}).exec(function(err,result){
    if(err){
        console.log("Error occurred while updating the record: "+err);
    }else{
        console.log("Record updated: "+result);
    }
});


//Delete operation
employeeModel.remove({Name:'rishabh dixit'}).exec(function(err,result){
    if(err){
        console.log("Error occurred while removing the record: "+err);
    }else{
        console.log("Record deleted: "+result);
    }
});





