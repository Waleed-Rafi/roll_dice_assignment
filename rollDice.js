let frequency = [0, 0, 0, 0, 0, 0];
let totalDice = 0;
let dieImages = new Array(12);

function start() {
  var button = document.getElementById("rollButton");
  button.addEventListener("click", rollDice, false);
  var length = dieImages.length;

  for (var i = 0; i < length; ++i) {
    dieImages[i] = document.getElementById("die" + (i + 1));
  }
  rollDice();
}

function rollDice() {
  var face;
  var length = dieImages.length;

  for (var i = 0; i < length; ++i) {
    face = Math.floor(1 + Math.random() * 6);
    tallyRolls(face - 1);
    setImage(i, face);
    ++totalDice;
  }

  updateFrequencyTable();
}

function tallyRolls(face) {
  ++frequency[face];
}

function setImage(dieImg, face) {
  dieImages[dieImg].style.backgroundImage = 'url("dice_' + face + '.png")';
}

function updateFrequencyTable() {
  var results =
    "<table><caption>Die Rolling Frequencies</caption>" +
    "<thead><th>Face</th><th>Frequency</th>" +
    "<th>Percent</th></thead><tbody>";
  var length = frequency.length;

  for (var i = 0; i < length; i++) {
    results +=
      "<tr><td class='table-row'>" +
      (i + 1) +
      "</td><td>" +
      frequency[i] +
      "</td><td>" +
      formatPercent(frequency[i] / totalDice) +
      "</td></tr>";
  }

  results += "</tbody></table>";
  document.getElementById("frequencyTableDiv").innerHTML = results;
}

function formatPercent(value) {
  value *= 100;
  return value.toFixed(2);
}

window.addEventListener("load", start, false);
