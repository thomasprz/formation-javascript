function cuisiner(nombreDeGateaux, minutesDePreparation = 10, minutesDeCuisson = 15){
    let resultat = nombreDeGateaux * (minutesDeCuisson + minutesDePreparation)
    return resultat
}

let tempsDePreparationChocolat = cuisiner(4); // 1 invité n'aime pas le gâteau au chocolat
let tempsDePreparationFraisier = cuisiner(1, 20); 

console.log(tempsDePreparationChocolat + tempsDePreparationFraisier)