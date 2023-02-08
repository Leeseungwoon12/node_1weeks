const mongoose = require("mongoose");

const connect = () => {

mongoose
.connect("mongodb://localhost:27017/prac", {
useNewUrlParser: true,
useUnifiedTopology: true,
},6000000 )
.then(() => console.log("Database connected!"))
.catch(err => console.log(err));
};

module.exports = connect;