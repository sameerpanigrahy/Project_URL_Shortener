const express = require("express");
const mongoose = require("mongoose");
const app = express();
const route = require('./routes/route');


app.use(express.json());


mongoose.connect("mongodb+srv://vipul-functionup:dHQN7pHckdlNc5gX@cluster0.hh8ax.mongodb.net/group21Database", { useNewUrlParser: true })
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))


app.use('/', route);



app.use(function (req, res){
    return res.status(400).send({status: false, message: "Path not found, please provide correct path"})
})



app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});


