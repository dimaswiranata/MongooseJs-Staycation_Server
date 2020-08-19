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
  name: {
    type: String,
    required: [true, 'Data name tidak ada, tolong diisi']
  },
  rating : {
    type : Number,
    min : 1,
    max : 10
  },
  review : String 
});

// inisialisasi model Fruit dari fruitSchema
const Fruit = mongoose.model('Fruit', fruitSchema);

// mengupdate data salah satu data dengan id yang terdefinisi
// dengan mengupdate name yang baru
Fruit.updateOne(
  {_id:'5f3a83aa4e85860074e1b734'}, 
  {name: 'Nanas'}, 
  function(error){
    if(error){
      console.log(error)
    } else {
      console.log('Berhasil update data kiwi menjadi nanas kedalam database')
    }
  }
)

// mendelete data salah satu data dengan id yang terdefinisi
Fruit.deleteOne(
  {_id:'5f3a83aa4e85860074e1b734'},
  function(error){
    if(error){
      console.log(error)
    } else {
      console.log('Berhasil delete data nanas kedalam database')
    }
  }
)

Fruit.find(function (error, fruits){
  if(error){
    console.log(error);
  }else{
    mongoose.connection.close(); // menutup connection ke mongoDB
    // console.log(fruits)
    console.log('Nama nama buah setelah ada yang didelete')
    fruits.forEach(function (fruit){
      console.log(fruit.name)
    })
  }
})