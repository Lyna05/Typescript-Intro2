# TS Homework #2

### Aufgabe 1: Grundlagen und Theorie (10 Punkte je Frage --> 60 Punkte)

**Ziel**: Beantworte die folgenden Fragen:

- Worauf muss geachtet werden, wenn man Typescript auf einer Webseite verwenden möchte?
- Warum ist der Datentyp `any` in Typescript problematisch?
- Du möchtest in einem Array Zahlen und Strings gleichzeitig speichern. Wie kannst du das in Typescript erreichen?
- Wie kannst du den Typ eines Parameters in einer Funktion optional machen?
- Wie kannst du den Typ eines HTMLElements auf einen anderen Typen festlegen? (Stichwort: Type Assertion)
- Was sind die Vorteile seinen Code in mehrere Dateien aufzuteilen?

### Aufgabe 2: Praxis: Funktionen (10 Punkte)

**Ziel**: Schreibe eine Funktion, die die Eingabeliste aus Zahlen und Strings nimmt und alle Strings entfernt. Die Funktion soll ein neues Array zurückgeben, das nur Zahlen enthält.

```ts
// Beispielcode

function entferneStringsAusListe(eingabe: (string | number)[]): number[] {
  // Hier kommt den Code hin
}

// Test
console.log(
  entferneStringsAusListe([1, "Spritzkuchen", 2, "Franzbrötchen", 4, 5])
); // Sollte [1, 2, 4, 5] ausgeben
```

### Aufgabe 3: Praxis: Typen (20 Punkte)

**Ziel**: Vervollständige die app.ts Datei, sodass sie folgende Anforderungen erfüllt:

- Beim Klick auf den Button absenden, soll in der Konsole ausgegeben werden, welche Schüsselgröße ausgewählt wurde.
- Beim Klick auf den Button absenden, soll in der Konsole ausgegeben werden, welche Obstsorten ausgewählt wurden. Diese sollen als Array ausgegeben werden. Wenn keine Obstsorten ausgewählt wurden, soll ein leeres Array ausgegeben werden. So soll eine beispielhafte Ausgabe aussehen: `["Apfel", "Kiwi"]`.
- Erstelle einen Typ, in dem die Inhalte der Obstschüssel gespeichert werden können. Es soll gespeichert werden, welche Schüsselgröße ausgewählt wurde, welche Farbe die Schüssel hat und welche Obstsorten ausgewählt wurden (Array aus der vorherigen Aufgabe).

```ts
type Obstschüssel = {
  // hier kommt dein Code hin
};
```

### Aufgabe 4: Praxis: Fehler beheben (10 Punkte)

Ohje... Ein Kollege hat den folgenden Code geschrieben, aber er funktioniert nicht. Kannst du die Fehler finden und beheben?

**Ziel**: Repariere den folgenden Code:

```ts
// Beispielcode

const name: string = "Fred";
let alter: number = 40;

name = name + " Feuerstein";

const berufe: strings = [
  "Steinmetz",
  "Höhlenmaler",
  "Mammutjäger",
  "Familienoberhauptvogel",
  "Dinosaurierkranführer",
];

fred = {
  vorname: name.pop(),
  nachname: name.shift();
  beruf = berufe[-1],
  alter: alter + 2,
}

familieFeuerstein: {name: string; beruf}[] = [
  fred,
   {vorname: "Wilma", nachname: "Feuerstein", beruf: "Steinmetz", alter: '38'}
  ]

console.log(familieFeuerstein['fred'].alter);

```