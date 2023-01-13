// First Labour : Heracles vs Nemean Lion
const Fighter = require("./src/Fighter");

const heracles = new Fighter("🧔 Heracles", 20, 6);
const nemean = new Fighter("🦁 Nemean Lion", 11, 13);

// use your Figher class here
//console.log(heracles, nemean);

const MAX_LIFE = 100;

class Fighter {
  constructor(name, strenght, dexterity) {
    this.name = name;
    this.strenght = strenght;
    this.dexterity = dexterity;
    this.life = MAX_LIFE;
  }

  fight(Defender) {
    const impact = getRandomInt(this.dexterity);
    const parade = getRandomInt(Defender.strenght);
    const total = impact - parade < 0 ? 0 : total;
    const newLife = Defender.life - total <= 0 ? 0 : newLife;
    Defender.life = newLife;

    return {};
  }

  getRandomInt(max) {
    return 1 + Math.floor(Math.random() * max);
  }
  /*
   **nouveaux points de vies du défenseur = points de vie actuels du défenseur - (dommages de l'attaquant - dextérité du défenseur)**
   */
}
