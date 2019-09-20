let amountSlider = document.getElementById('amountRange');
let amountText = document.getElementById('amountText');
amountSlider.addEventListener('input', calculateAmount);
let amountArray = [
    'No treasure (or angry DM)',
    'Pocket change',
    'Even fewer treasure',
    'Small amount of treasure',
    'Slightly less treasure',
    'Medium amount of treasure',
    'Slightly more treasure',
    'Quite some treasure',
    'A lot of treasure',
    'Insane amount of treasure',
    'Treasure Hoard'];

let crSlider = document.getElementById('crRange');
let crText = document.getElementById('crText');
crSlider.addEventListener('input', calculateCr);
let crArray = [
    '0 - 4',
    '5 - 10',
    '11 - 16',
    '17+'];

document.getElementById('generateBtn').addEventListener('click', generateTreasure);
let treasureText = document.getElementById('treasureText');

function calculateAmount() {
    let range = document.getElementById("amountRange").value;
    amountText.innerHTML = amountArray[range];
}

function calculateCr() {
    let range = document.getElementById("crRange").value;
    crText.innerHTML = "Challenge Rating " + crArray[range];
}

function generateTreasure() {

}