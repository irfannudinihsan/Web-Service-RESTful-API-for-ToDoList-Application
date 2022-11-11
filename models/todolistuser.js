mongoose = require("mongoose");
const { Schema } = mongoose;

const todolistuserSchema = new Schema({
  
  title: {
    type : String,
    require : true,
  },
  content: {
    type : String,
    require : true,
  },
  user : {
    type : mongoose.ObjectId,
    ref : "User"
  }
  
});

const Todolistuser = mongoose.model("Todolistuser", todolistuserSchema);

module.exports = Todolistuser;
