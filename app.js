var Wizard = require("./src/app/modules/Wizard.js");
require('dotenv').config()
var express = require('express');
var bodyParser = require('body-parser');
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

app.all("/wizard/speak", (req, res) => {
  console.log("************************************")
  console.log("middle-earth REQ: ", req.body);
  console.log("************************************")

  res.status(200).send('A wizard arrives precisely when they mean too!');
})

// Start server
app.listen(port, () => {
  createWizard();
  console.log('Express server started on port ' + port);
})
