describe("#Wizard", function() {
  var Wizard = require('../.././Wizard.js');

  var wizard;
  var spell = "Kaaaazam"
  wizard = new Wizard();

  it("should not have magic ready", function() {
    //demonstrates use of custom matcher
    expect(wizard.magicReady).toEqual(false);
  });

  it("should have magic ready", function() {
      wizard.warmUp(spell);

    //demonstrates use of custom matcher
    expect(wizard.magicReady).toEqual(true);
  });

    it("should be able to cast a spell", function() {
      var spellCast = wizard.castSpell();

      expect(spellCast).toEqual("Kaaaazam");
  });

//   it("should teleport from its current place to destination", function() {
//     var destination = "mordor";
  
//     wizard.teleport("mordor")
  
//     expect(wizard.location).toEqual("mordor");
//   });

});
