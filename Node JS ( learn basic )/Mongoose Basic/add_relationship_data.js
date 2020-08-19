const mongoose = require('mongoose');

// inisialisasi nama database db-mongoose
mongoose.connect('mongodb://localhost:27017/db-mongoose', 
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true
  }
);

//----------------------------------------------------------//

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

//----------------------------------------------------------//

// inisialisasi object people Schema
const peopleSchema = new mongoose.Schema({ 
  name: {
    type: String,
    required: [true, 'Data name tidak ada, tolong diisi']
  },
  age : {
    type : Number
  },
  favoriteFruit : fruitSchema
});

// inisialisasi model people dari peopleSchema
const People = mongoose.model('People', peopleSchema);

//----------------------------------------------------------//

const fruitDuku = new Fruit(
  { 
    name: 'Duku',
    rating: 8,
    review: 'Buah yang terbaik'
  }
);

fruitDuku.save(function (error) {

  if (error){
    console.log(error)
  } else {
    console.log("berhasil simpan buah duku kedalam database")
  }

});

const people = new People(
  { 
    name: 'Dimas Agusta Wiranata',
    age: 23,
    favoriteFruit: fruitDuku
  }
);

people.save(function (error) {

  if (error){
    console.log(error)
  } else {
    console.log("berhasil create dimas relationshipnya dengan duku")
  }

});