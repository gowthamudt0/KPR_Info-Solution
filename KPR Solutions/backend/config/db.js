const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true ,useUnifiedTopology: true,})

  .then(() => {console.log(`Mongodb Connected`)})
  .catch((err) => {
    console.log(`mongodb connection error: ${err}`)
  })


