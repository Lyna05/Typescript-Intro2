var name = "Fred";
var alter = 40;
// Namen und Alter aktualisieren
var newName = name + " Feuerstein";
var newAlter = alter + 2;
// Berufe-Array korrigieren
var berufe = [
    "Steinmetz",
    "Höhlenmaler",
    "Mammutjäger",
    "Familienoberhauptvogel",
    "Dinosaurierkranführer",
];
// Fred-Objekt erstellen
var fred = {
    vorname: name,
    nachname: "Feuerstein",
    beruf: berufe[0], // Zugriff auf den ersten Beruf im Array
    alter: newAlter,
};
// Familie-Array korrigieren und Fred hinzufügen
var familieFeuerstein = [
    fred,
    { vorname: "Wilma", nachname: "Feuerstein", beruf: "Steinmetz", alter: 38 }, // Alter als Zahl angeben
];
// Alter von Fred ausgeben
console.log(familieFeuerstein[0].alter);
