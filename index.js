// First Labour : Heracles vs Nemean Lion
const Fighter = require("./src/Fighter");

const heracles = new Fighter("🧔 Heracles", 20, 6);
const nemean = new Fighter("🦁 Nemean Lion", 11, 13);

while (heracles.life > 0 && nemean.life > 0) {
  //console.log("denis");
  heracles.fight(nemean);
  nemean.fight(heracles);
}

// while (this.life > 0 && Defender.life > 0) {
//   console.log("denis");
//   this.fight(Defender);
//   Defender.fight(this);
// }

// console.log(heracles);
// console.log(nemean);
