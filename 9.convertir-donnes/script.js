function prevoirAge() {
  let age = prompt("Quel est votre âge ?"); // "30" + 1 = 301
  // age = parseInt(age)
  age = parseFloat(age)
  // age = Number(age)

  // nombre = 45
  // nombreEnString = nombre + "";
  // let enString = nombre.toString();

  alert("Bientôt vous aurez " + (age + 1) + " ans.");
}

prevoirAge(); //Affiche Bientôt, vous aurez 301 ans
