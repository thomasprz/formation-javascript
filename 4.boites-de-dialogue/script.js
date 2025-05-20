alert("Hello World!"); //alert
if (confirm("Souhaitez-vous confimer ?")) {
  alert("Ok");
} else {
  alert("Annulation");
}

const age = prompt("Entrez votre âge :");
if (age !== null && age !== "" && !isNaN(age) && age >= 0) {
  alert(`Bonjour, vous avez ${age} ans.`);
} else {
  alert("Veuillez ressaisir un âge correct");
}
