// ==========================================
// 0. Voorbeeldvraag: declareer een variabele met daarin de vergelijking of 2 gelijk is aan 2.                // geeft true wanneer gelogd
// ==========================================

const equalNumbers = 2 === 2;
console.log('Is 2 gelijk aan 2?', equalNumbers);

// ==========================================
// 1. Declareer een variabele en sla daar de uitkomst van de vergelijking "Is 10 groter dan 20?" in op        // geeft false wanneer gelogd
// ==========================================
console.log("Opdracht 1");
console.log("-----------");
const tenGreaterThenTwenty = 10>20;
console.log("Is ten greater then twenty? " + tenGreaterThenTwenty);
console.log(" ");

// ==========================================
// 2. Declareer een variabele en sla daar de uitkomst van de vergelijking "Is 10 ongelijk aan 11?" in op        // geeft true wanneer gelogd
// ==========================================
console.log("Opdracht 2");
console.log("-----------");
const tenUnequalToEleven = 10 !== 11;
console.log("Is ten unequal to eleven? " + tenUnequalToEleven);
console.log(" ");

// ==========================================
// 3. Declareer een variabele en sla daar in op of de woorden 'zoet' en 'sappig' hetzelfde zijn                // geeft false wanneer gelogd
// ==========================================
console.log("Opdracht 3");
console.log("-----------");
const zoetAndsappigEqual = "zoet" === "sappig";
console.log("Are 'zoet' and 'sappig' equal? " + zoetAndsappigEqual);
console.log(" ");

// ==========================================
// 4a. Declareer een variabele en sla daar het rapportcijfer 9 in op.
// 4b. schrijf een script dat checkt of het rapportcijfer groter is dan 8.
//     Als dat zo is, loggen we 'Cum laude!' in de console.                                                     // geeft 'Cum laude!' wanneer gelogd
// ==========================================
console.log("Opdracht 4a");
console.log("-----------");
const grade = 9;
console.log(grade);
console.log("Opdracht 4b");
console.log("-----------");
if(grade>8){
    console.log("Grade higher than eight");
    console.log("Cum Laude!");
}
console.log(" ");

// ==========================================
// 5a. Gebruik onderstaande variabelen isRaining en temperature;
// 5b. Schrijf een script dat "Je kunt een korte broek aan!" logt wanneer het niet regent EN de temperatuur hoger is dan 21 graden
// 5c. Log "Doe een jas aan!" Als het regent OF kouder is dan 12 graden
// Tip: verander de waarde van isRaining en temperature even handmatig om te kijken of jouw 2e conditie klopt
// ==========================================
console.log("Opdracht 5a");
console.log("-----------");
const isRaining = false;
const temperature = 23;
console.log("boolean isRaining: " + isRaining + " temperature: " + temperature);
console.log("Opdracht 5b");
console.log("-----------");
if (!isRaining && temperature>21) {
    console.log("Je kunt een korte broek aan!");
}
else{
    console.log("conditions for 5b haven't been met");
}
console.log("Opdracht 5c");
console.log("-----------");
if(isRaining || temperature<12){
    console.log("Doe een jas aan!");
}
else{
    console.log("conditions for 5c haven't been met");
}
