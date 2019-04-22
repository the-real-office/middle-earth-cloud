class Wizard {

  constructor() {
    this.magicReady = false;
    this.location = "The Shire"
  }

  warmUp(spell) {
    if(spell){
      this.magicReady = true;
      this.spell = spell;
    }

    return
  }

  castSpell(){
    if(this.magicReady){
      console.log("WIZARD CASTED: ", this.spell);

      return this.spell;
    }

    return
  }

//   teleport(destination){
//     console.log("WIZARD TELEPORTING TO ", destination);
//     this.location = destination
  
//     return
//   }
}

module.exports = Wizard;
