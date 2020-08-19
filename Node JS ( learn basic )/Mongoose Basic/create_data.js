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

// membuat data baru Fruit
const apple = new Fruit(
  { 
    name: 'Apple',
    rating: 8,
    review: 'Rasanya Manis' 
  }
);

// menyimpan data baru (apple) ke mongoDB
apple.save(function (error) {

  if (error){
    console.log(error)
  } else {
    console.log("berhasil simpan buah apel kedalam database")
  }

});

const kiwi = new Fruit(
  { 
    name: 'Kiwi',
    rating: 10,
    review: 'Buah yang terbaik' 
  }
);

const jeruk = new Fruit(
  { 
    name: 'Jeruk',
    rating: 5,
    review: 'Asem Rasanya' 
  }
);

const pisang = new Fruit(
  { 
    name: 'Pisang',
    rating: 6,
    review: 'Manis dan menyegarkan' 
  }
);

// menyimpan banyak data Fruit ke mongoDB
Fruit.insertMany([kiwi, jeruk, pisang],function (error) {

  if (error){
    console.log(error)
  } else {
    mongoose.connection.close(); // menutup connection ke mongoDB
    console.log("berhasil menyimpan data kedalam database")
  }

});