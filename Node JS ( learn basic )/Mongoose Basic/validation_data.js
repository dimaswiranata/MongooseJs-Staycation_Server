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

// membuat data baru Fruit
const mangga = new Fruit(
  { 
    name: 'Mangga',
    rating: 10,
    review: 'Rasanya Manis' 
  }
);

// menyimpan data baru (apple) ke mongoDB
mangga.save(function (error) {
  if (error){
    console.log(error)
    mongoose.connection.close(); // menutup connection ke mongoDB
  } else {
    mongoose.connection.close(); // menutup connection ke mongoDB
    console.log("berhasil simpan buah apel kedalam database")
  }
});

