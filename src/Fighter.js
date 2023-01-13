/* Fighter class definition */

const MAX_LIFE = 100;

class Fighter {
  constructor(name, strenght, parade) {
    this.name = name;
    this.strenght = strenght;
    this.parade = parade;
    this.life = MAX_LIFE;
  }

  fight(Defender) {
    const impact = 1 + Math.floor(Math.random() * this.parade);
    const parade = 1 + Math.floor(Math.random() * Defender.strenght);
    let total = impact - parade;
    total = total < 0 ? 0 : total;
    let newLife = Defender.life - total;
    newLife = newLife <= 0 ? 0 : newLife;
    Defender.life = Math.max(newLife, 0);

    return console.log(`l'attaquant ${this.name} attaque ${Defender.name} ! \r\n 
      il reste ${Defender.life} points de vie à ${Defender.name}`);
  }

  // getRandomInt(max) {
  //   return 1 + Math.floor(Math.random() * max);
  // }
  /*
   **nouveaux points de vies du défenseur = points de vie actuels du défenseur - (dommages de l'attaquant - dextérité du défenseur)**
   */
}

module.exports = Fighter;
