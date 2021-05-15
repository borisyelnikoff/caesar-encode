import { caesar13 } from "./caesar13.js";
// const { caesar13 } = require("./caesar13"); CommonJS module version

function verify(input, goal) {
  if (input === goal) {
    console.log("Gratulacje!");
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(caesar13("Abcde"), "Nopqr");
verify(caesar13("Tata"), "Gngn");
verify(caesar13("PRZEPROGRAMOWANI"), "CEMRCEBTENZBJNAV");
verify(caesar13("!PRZEPROGRAMOWANI6@#"), "!CEMRCEBTENZBJNAV6@#");
