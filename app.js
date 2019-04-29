var Wizard = require("./src/app/modules/Wizard.js");
require('dotenv').config()
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path')
const port = process.env.PORT || 3000;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

var createWizard = () => {
  var wizard = new Wizard();

  wizard.warmUp("Expelliammos");

  wizard.castSpell();

  wizard.warmUp("BooooM");

  wizard.castSpell();
}

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + './index.html'));
});

app.all("/middle-earth", (req, res) => {
  console.log("************************************")
  console.log("middle-earth REQ: ", req.body);
  console.log("************************************")

  res.sendStatus(200)
})

// Start server
app.listen(port, () => {
  createWizard();
  console.log('Express server started on port ' + port);
})
