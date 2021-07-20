const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin1:Test123@cluster0.yhu9x.mongodb.net/bankUser",
{useNewUrlParser:true}).then(() => {
  console.log('Database connection successful');
}).catch( (e) => {
  console.log(e);
});
