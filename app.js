var Wizard = require("./Wizard.js");
require('dotenv').config()
var express = require('express');
var bodyParser = require('body-parser');


var wizard = new Wizard();

wizard.warmUp("Expelliammos");

wizard.castSpell();

wizard.warmUp("BooooM");

wizard.castSpell();