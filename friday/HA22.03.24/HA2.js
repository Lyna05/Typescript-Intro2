function entferneStringsAusListe(eingabe) {
    return eingabe.filter(function (element) { return typeof element === "number"; });
}
// Test
console.log(entferneStringsAusListe([1, "Spritzkuchen", 2, "Franzbrötchen", 4, 5]));
