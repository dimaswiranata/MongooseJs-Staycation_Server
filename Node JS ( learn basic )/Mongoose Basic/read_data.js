const mongoose = require('mongoose');

// inisialisasi nama database db-mongoose
mongoose.connect('mongodb://localhost:27017/db-mongoose', 
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true
  }
);

// inisialisasi object fruit Schema
const fruitSchema = new mongoose.Schema({ 
  name: String,
  rating : Number,
  review : String 
});

// inisialisasi model Fruit dari fruitSchema
const Fruit = mongoose.model('Fruit', fruitSchema);

// mencari data pada Fruit
Fruit.find(function (error, fruits){
  if(error){
    console.log(error);
  }else{
    mongoose.connection.close(); // menutup connection ke mongoDB
    // console.log(fruits)

    // dan menampilkan hanya name dari Fruit
    fruits.forEach(function (fruit){
      console.log(fruit.name)
    })
  }
})