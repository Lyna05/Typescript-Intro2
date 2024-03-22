function entferneStringsAusListe(eingabe: (string | number)[]): number[] {
  return eingabe.filter(element => typeof element === "number") as number[];
}

// Test
console.log(
  entferneStringsAusListe([1, "Spritzkuchen", 2, "Franzbrötchen", 4, 5])
);
