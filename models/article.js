'use scrict'
var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var ArticleSchema=Schema({
    title:String,
    content:String,
    date:{type:Date,default:Date.now},
    image:String
});

module.exports=mongoose.model('Article',ArticleSchema);
//articles --> Guardar documentos de este tipo con esa estructura en la coleccion