const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')

var corsOptions = {
  origin: 'http://localhost:4000'
}

function sendSpaFileIfUnmatched(req,res) {
    res.sendFile("src/index.html", { root: '.' });
}

var app = module.exports = express();


app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use("/node_modules", express.static(path.resolve(__dirname, './node_modules')));
app.use(express.static(__dirname + '/src'));
app.use(sendSpaFileIfUnmatched);

app.listen(6001, function(){
  console.log('This part works on ', 6001)
})
