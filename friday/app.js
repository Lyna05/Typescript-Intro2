// das Ausrufezeichen weist Typescript an, dass wir
// uns sicher sind, dass es sich hier nicht um NULL
// handelt
// mittels 'as' können wir Typescript versichern,
// dass es sich um einen bestimmten Typen handeln wird
var farbenInput = document.getElementById('farbe');
// console.log(farbenInput.value)
// Wenn ich auf den Knopf klicke, dann soll in der Konsole
// der Wert des TextInputs ausgegeben werden
// Ich ziehe mir die Form aus dem Dokument; Variante 1
var form = document.getElementById('form');
// Ich ziehe mir die Form aus dem Dokument; Variante 2
var form1 = document.querySelector('form');
// wenn wir auf den Knopf drücken, wird ein submit-Event
// ausgelöst. Wir hören, ob ein solches Event ausgelöst wird.
// Wenn das Event ausgelöst wird, dann lesen wir den Wert
// aus der Eingabe aus und geben sie aus.
var obst = document.getElementsByName('obst');
form.addEventListener('submit', function (e) {
    // preventDefault verhindert das automatische
    // neuladen der kompletten Seite
    e.preventDefault();
    console.log(farbenInput.value);
    // const obst1 = obst[1] as HTMLInputElement
    // console.log(obst1.value, obst1.checked)
    for (var i = 0; i < obst.length; i = i + 1 /* i++ ODER i += 1 */) {
        var aktuellesObst = obst[i];
        console.log(aktuellesObst.value, aktuellesObst.checked);
    }
});