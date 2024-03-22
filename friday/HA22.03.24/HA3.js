// Zugriff auf die HTML-Elemente
var schüsselGrößeInput = document.getElementById('schüsselGröße');
var schüsselFarbeInput = document.getElementById('schüsselFarbe');
var obstInputs = document.getElementsByName('obst');
// Eventlistener für das Absenden des Formulars
var form = document.getElementById('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    // Schüsselgröße auslesen
    var ausgewählteSchüsselGröße = schüsselGrößeInput.value;
    // Schüsselgröße und -farbe speichern
    var obstschüssel = {
        schüsselGröße: ausgewählteSchüsselGröße,
        schüsselFarbe: schüsselFarbeInput.value,
        ausgewählteObstsorten: []
    };
    // Ausgewählte Obstsorten auslesen und in das Obstschüssel-Objekt speichern
    for (var i = 0; i < obstInputs.length; i++) {
        var aktuellesObst = obstInputs[i];
        if (aktuellesObst.checked) {
            obstschüssel.ausgewählteObstsorten.push(aktuellesObst.value);
        }
    }
    // Ausgabe in der Konsole
    console.log("Ausgewählte Schüsselgröße:", obstschüssel.schüsselGröße);
    console.log("Ausgewählte Obstsorten:", obstschüssel.ausgewählteObstsorten);
});
