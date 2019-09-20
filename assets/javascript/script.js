let amountSlider = document.getElementById('amountRange');
let amountText = document.getElementById('amountText');
amountSlider.addEventListener('input', calculateAmount);
let amountArray = [ 'No treasure (or angry DM)',
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

// document.getElementById('generateBtn').addEventListener('click', myFunction);
// let text = document.getElementById('treasuretext');

function calculateAmount(){
    let range = document.getElementById("amountRange").value;
    amountText.innerHTML = amountArray[range];
}