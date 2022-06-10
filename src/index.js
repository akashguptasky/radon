const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const { application } = require('express');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://myfunctionup-data:NemFawWgwh8vnMPv@cluster0.h27rj25.mongodb.net/Akashgupta-db", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


app.use(
    function(req,res,next)
    {
        console.log(new Date().toISOString() +"  "+ req.socket.remoteAddress +"  "+ req.path )
        next();
    }
    
    )

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
