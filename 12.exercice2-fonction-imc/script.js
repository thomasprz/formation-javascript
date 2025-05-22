let taille = prompt("Quel est votre taille en cm ?");
let poids = prompt("Quel est votre poids en kg ?");

taille = Number(taille);
poids = Number(poids);

function calculerIMC(poidsKg, tailleCm) {
  let imc = poidsKg / Math.pow(tailleCm / 100, 2);
  imc = imc.toFixed(2);

  if (imc < 18.5) {
    alert(
      `Votre IMC est de ${imc}. Vous êtes en insuffisance pondérale (underweight).`
    );
  } else if (imc >= 18.5 && imc <= 24.9) {
    alert(`Votre IMC est de ${imc}. Vous avez un poids normal.`);
  } else if (imc >= 25 && imc <= 29.9) {
    alert(`Votre IMC est de ${imc}. Vous êtes en surpoids (overweight).`);
  } else if (imc >= 30 && imc <= 34.9) {
    alert(`Votre IMC est de ${imc}. Vous êtes en obésité modérée (obese).`);
  } else {
    alert(
      `Votre IMC est de ${imc}. Vous êtes en obésité sévère (extremely obese).`
    );
  }
}

// calculerIMC(poids, taille);
// function calculerIMC(poids, taille) {
// let tailleEnMetres = taille / 100;
// let tailleCalculee = Math.pow(tailleEnMetres, 2);
//    let resultat       = poids / tailleCalculee;
//    return resultat;
// }

// let poids   = prompt("Quel est votre poids ? (en kg)");
// let taille  = prompt("Quelle est votre taille ? (en cm)");

// alert(calculerIMC(poids, taille));
