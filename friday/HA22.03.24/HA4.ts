const name: string = "Fred";
let alter: number = 40;

// Namen und Alter aktualisieren
const newName: string = name + " Feuerstein";
const newAlter: number = alter + 2;

// Berufe-Array korrigieren
const berufe: string[] = [
  "Steinmetz",
  "Höhlenmaler",
  "Mammutjäger",
  "Familienoberhauptvogel",
  "Dinosaurierkranführer",
];

// Fred-Objekt erstellen
const fred = {
  vorname: name,
  nachname: "Feuerstein",
  beruf: berufe[0], // Zugriff auf den ersten Beruf im Array
  alter: newAlter,
};

// Familie-Array korrigieren und Fred hinzufügen
const familieFeuerstein: { vorname: string; nachname: string; beruf: string; alter: number }[] = [
  fred,
  { vorname: "Wilma", nachname: "Feuerstein", beruf: "Steinmetz", alter: 38 }, // Alter als Zahl angeben
];

// Alter von Fred ausgeben
console.log(familieFeuerstein[0].alter);