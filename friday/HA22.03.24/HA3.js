
// Typdefinition für die Inhalte der Obstschüssel
type Obstschüssel = {
  schüsselGröße: string;
  schüsselFarbe: string;
  ausgewählteObstsorten: string[];
};

// Zugriff auf die HTML-Elemente
const schüsselGrößeInput = document.getElementById('schüsselGröße')! as HTMLSelectElement;
const schüsselFarbeInput = document.getElementById('schüsselFarbe')! as HTMLSelectElement;
const obstInputs = document.getElementsByName('obst');

// Eventlistener für das Absenden des Formulars
const form = document.getElementById('form')! as HTMLFormElement;

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Schüsselgröße auslesen
  const ausgewählteSchüsselGröße = schüsselGrößeInput.value;

  // Schüsselgröße und -farbe speichern
  const obstschüssel: Obstschüssel = {
    schüsselGröße: ausgewählteSchüsselGröße,
    schüsselFarbe: schüsselFarbeInput.value,
    ausgewählteObstsorten: []
  };

  // Ausgewählte Obstsorten auslesen und in das Obstschüssel-Objekt speichern
  for (let i = 0; i < obstInputs.length; i++) {
    const aktuellesObst = obstInputs[i] as HTMLInputElement;
    if (aktuellesObst.checked) {
      obstschüssel.ausgewählteObstsorten.push(aktuellesObst.value);
    }
  }

  // Ausgabe in der Konsole
  console.log("Ausgewählte Schüsselgröße:", obstschüssel.schüsselGröße);
  console.log("Ausgewählte Obstsorten:", obstschüssel.ausgewählteObstsorten);
});