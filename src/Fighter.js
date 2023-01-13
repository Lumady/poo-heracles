/* Fighter class definition */

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
    const parade = getRandomInt(Defender.strenght) < 0 ? 0 : parade;
    const newLife = Defender.life - (impact - parade) <= 0 ? 0 : newLife;
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

module.exports = Fighter;
