var Wizard = require("./Wizard.js");
require('dotenv').config()
var express = require('express');
var bodyParser = require('body-parser');


var wizard = new Wizard();

wizard.warmUp("Expelliammos");

wizard.castSpell();

wizard.warmUp("BooooM");

wizard.castSpell();

app.all("/middle-earth", (req, res) => {
    console.log("************************************")
    console.log("middle-earth REQ: ", req.body);
    console.log("************************************")

    res.sendStatus(200)
})

// Start server
app.listen(port, () => {
    console.log('Express server started on port ' + port);
})
