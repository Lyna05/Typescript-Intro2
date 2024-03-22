// das Ausrufezeichen weist Typescript an, dass wir
// uns sicher sind, dass es sich hier nicht um NULL
// handelt

// mittels 'as' können wir Typescript versichern,
// dass es sich um einen bestimmten Typen handeln wird

const farbenInput
  = document.getElementById('farbe')! as HTMLInputElement

// console.log(farbenInput.value)

// Wenn ich auf den Knopf klicke, dann soll in der Konsole
// der Wert des TextInputs ausgegeben werden

const form
  = document.getElementById('form')! as HTMLFormElement

const form1
  = document.querySelector('form')! as HTMLFormElement
// wenn wir auf den Knopf drücken, wird ein submit-Event
// ausgelöst. Wir hören, ob ein solches Event ausgelöst wird.
// Wenn das Event ausgelöst wird, dann lesen wir den Wert
// aus der Eingabe aus und geben sie aus.

form.addEventListener('submit', (e) => {
  // preventDefault verhindert das automatische
  // neuladen der kompletten Seite
  e.preventDefault()
  console.log(farbenInput.value)
})