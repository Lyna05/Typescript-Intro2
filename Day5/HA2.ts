1.

function entferneElement(arr, wert) {
  return arr.filter(item => item !== wert);
}
console.log(entferneElement([1, 2, 3, 4, 5], 3)); // Sollte [1, 2, 4, 5] ausgeben

2.

function summeZahlen(arr) {
  return arr.reduce((sum, current) => sum + current, 0);
}
console.log(summeZahlen([1, 2, 3, 4, 5])); // Sollte 15 ausgeben

3.
function entferneDuplikate(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

console.log(entferneDuplikate([1, 2, 2, 3, 4, 4, 5])); // Sollte [1, 2, 3, 4, 5] ausgeben

4.
function bestimmeJahreszeit(monat) {
  if (monat >= 3 && monat <= 5) {
    return "Frühling";
  } else if (monat >= 6 && monat <= 8) {
    return "Sommer";
  } else if (monat >= 9 && monat <= 11) {
    return "Herbst";
  } else {
    return "Winter";
  }
}

console.log(bestimmeJahreszeit(4)); // Sollte "Frühling" ausgeben

5.
function istPasswortGueltig(passwort) {
  // Überprüfe die Länge des Passworts und das Vorhandensein von Zahlen
  return passwort.length >= 8 && /\d/.test(passwort);
}

console.log(istPasswortGueltig("Test1234")); // Sollte true ausgeben

6.
function taschenrechner(a, b, operation) {
  if (operation === "+") {
    return a + b;
  } else if (operation === "-") {
    return a - b;
  } else if (operation === "x" || operation === "*") {
    return a * b;
  } else if (operation === "/") {
    if (b === 0) {
      return "Division durch Null nicht möglich";
    }
    return a / b;
  } else {
    return "Ungültige Operation";
  }
}

console.log(taschenrechner(10, 5, "+")); // Sollte 15 ausgeben
console.log(taschenrechner(10, 5, "/")); // Sollte 2 ausgeben
console.log(taschenrechner(10, 5, "x")); // Sollte "Ungültige Operation" ausgeben

7.
function multiplikationstabelle(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} * ${i} = ${n * i}`);
  }
}

// Test
multiplikationstabelle(5); // Sollte die Multiplikationstabelle für 5 ausgeben

8.
function umkehrenArray(arr) {
  return arr.reverse();
}

// Test
console.log(umkehrenArray([1, 2, 3, 4, 5])); // Sollte [5, 4, 3, 2, 1] ausgeben

9.
function zaehleBuchstaben(str, buchstabe) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === buchstabe) {
      count++;
    }
  }
  return count;
}

// Test
console.log(zaehleBuchstaben("Hallo Welt", "l")); // Sollte 3 ausgeben

10.
function filterGeradeZahlen(arr) {
  let geradeZahlen = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      geradeZahlen.push(arr[i]);
    }
  }
  return geradeZahlen;
}

// Test
console.log(filterGeradeZahlen([1, 2, 3, 4, 5, 6])); // Sollte [2, 4, 6] ausgeben

11.
function findeMinMax(arr) {
  let min = arr[0]; // Initialisierung von min mit dem ersten Element des Arrays
  let max = arr[0]; // Initialisierung von max mit dem ersten Element des Arrays

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i]; // Aktualisiere min, falls ein kleineres Element gefunden wird
    } else if (arr[i] > max) {
      max = arr[i]; // Aktualisiere max, falls ein größeres Element gefunden wird
    }
  }

  return { min: min, max: max }; // Gib ein Objekt zurück, das min und max enthält
}

// Test
console.log(findeMinMax([10, 2, 5, 1, 9])); // Sollte { min: 1, max: 10 } ausgeben

12.
function berechneDurchschnitt(arr) {
  let summe = 0;

  for (let i = 0; i < arr.length; i++) {
    summe += arr[i]; // Addiere jedes Element im Array zur Summe hinzu
  }

  return summe / arr.length; // Teile die Summe durch die Anzahl der Zahlen, um den Durchschnitt zu erhalten
}

// Test
console.log(berechneDurchschnitt([1, 2, 3, 4, 5])); // Sollte 3 ausgeben

