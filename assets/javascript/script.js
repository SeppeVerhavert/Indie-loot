//  -------------------------------------   VARIABLES   -------------------------------------  //


let crArray = [
    '0 - 4',
    '5 - 10',
    '11 - 16',
    '17+'
];


let radioType = document.getElementById('radioType');

let crSlider = document.getElementById('crRange');
let crText = document.getElementById('crText');
crSlider.addEventListener('input', showCr);

let resetBtn = document.getElementById('resetBtn')
resetBtn.addEventListener('click', resetOptions);
let reset = false;

let optionBtn = document.getElementById('optionsBtn');
optionBtn.addEventListener('click', toggleOptions);

optionsDiv = document.getElementsByClassName('optionContainer')[0];
let toggle = true;
let changedOptions = false;

document.getElementById('generateBtn').addEventListener('click', generateTreasure);
let treasureText = document.getElementById('treasureText');

let trinketBox = document.getElementById('trinkets');
let gearBox = document.getElementById('gear');
let weaponBox = document.getElementById('weapons');
let toolBox = document.getElementById('tools');
let componentBox = document.getElementById('components');
let bookBox = document.getElementById('books');

let parsedArray = [];

let minusBtn = document.getElementsByClassName('fa-minus-circle');
let plusBtn = document.getElementsByClassName('fa-plus-circle');
let options = document.getElementsByClassName('optionBox');


//  -------------------------------------   FUNCTIONS   -------------------------------------  //


//  ------------------  TEST FUNCTION  ------------------  //

function test() {
    for (let i = 0; i <= 100; i++) {
        generateTreasure();
        console.log(treasureText.innerHTML);
        console.log(" ");
    }
    console.log("finish test");
}

//  ------------------  JSON FETCH  ------------------  //

fetch("https://raw.githubusercontent.com/SeppeVerhavert/Treasure-generator/master/library.json")
    .then(response => response.json())
    .then(json => library = json);

//  --------------  OPTIONS  --------------  //

for (let i = 0; i < minusBtn.length; i++) {
    minusBtn[i].addEventListener('click', substractNumber);
}

for (let i = 0; i < plusBtn.length; i++) {
    plusBtn[i].addEventListener('click', addNumber);
}

function substractNumber() {
    let number = this.parentNode.childNodes[3];
    if (number.innerHTML > 0) {
        let newnumber = number.innerHTML - 1;
        number.innerHTML = newnumber;
        changedOptions = true;
        reset = true;
    } else {
        return;
    }
}

function addNumber() {
    let number = this.parentNode.childNodes[3];
    if (number.innerHTML <= 8) {
        let newnumber = parseInt(number.innerHTML) + 1;
        number.innerHTML = newnumber;
        changedOptions = true;
        reset = true;
    } else {
        return;
    }
}

function toggleOptions() {
    if (toggle === true) {
        toggle = false;
        optionsDiv.style.display = "none";
        optionBtn.innerHTML = "Show options";
    } else {
        toggle = true;
        optionsDiv.style.display = "block";
        optionBtn.innerHTML = "Hide options";
    }
}

function resetOptions() {
    if (reset) {
        for (let i = 0; i < options.length; i++) {
            options[i].childNodes[3].innerHTML = 0;
        }
        reset = false;
        resetBtn.innerHTML = "Randomise";
        changedOptions = false;
    } else {
        for (let i = 0; i < options.length; i++) {
            if (Math.random() >= 0.5 && Math.random() < 0.9) {
                options[i].childNodes[3].innerHTML = Math.round(Math.random() * 1);
            }
            else if (Math.random() >= 0.9 && Math.random() < 0.95) {
                options[i].childNodes[3].innerHTML = Math.round(Math.random() * 2);
            }
            else if (Math.random() > 0.95 && Math.random() < 0.975) {
                options[i].childNodes[3].innerHTML = Math.round(Math.random() * 3);
            }
            else if (Math.random() > 0.975) {
                options[i].childNodes[3].innerHTML = Math.round(Math.random() * 5);
            }
        }
        reset = true;
        resetBtn.innerHTML = "Reset";
        changedOptions = true;
    }
}

//  ------------------  SNACKBAR  ------------------  //

function calculateNumber() {
    let numberTotal = 0;
    for (let i = 0; i < options.length; i++) {
        numberTotal += parseInt(options[i].childNodes[3].innerHTML);
    }
    if (numberTotal === 0) {
        return 1;
    } else {
        return numberTotal;
    }
}

function showSnackbar() {
    var x = document.getElementById("snackbar");
    if (changedOptions) {
        changedOptions = false;
        x.innerHTML = "You looted " + calculateNumber() + " times";
        x.className = "show";
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 2000);
    } else {
        return
    }
}

//  ------------------  SHOW CR  ------------------  //

function showCr() {
    let range = document.getElementById("crRange").value;
    crText.innerHTML = "Challenge Rating " + crArray[range];
}

//  ------------------  MAIN FUNCTION  ------------------  //

function generateTreasure() {
    treasureText.style.display = "block";
    toggle = true;
    toggleOptions();
    checkType();
    parseValue();
    rollForArrays();
    removeTable();
    addText();
    addOptions();
}

function checkType() {
    if (radioType.checked) {
        treasureText.innerHTML = rollIndividual();
        showSnackbar();
    } else {
        treasureText.innerHTML = rollHoard();
    }
}

function rollIndividual() {
    if (crText.innerHTML === "Challenge Rating 0 - 4") {
        let rand = Math.floor(Math.random() * 100);
        return library.IndivCR04Array[rand];
    }
    else if (crText.innerHTML === "Challenge Rating 5 - 10") {
        let rand = Math.floor(Math.random() * 100);
        return library.IndivCR510Array[rand];
    }
    else if (crText.innerHTML === "Challenge Rating 11 - 16") {
        let rand = Math.floor(Math.random() * 100);
        return library.IndivCR1116Array[rand];
    }
    else if (crText.innerHTML === "Challenge Rating 17+") {
        let rand = Math.floor(Math.random() * 100);
        return library.IndivCR17Array[rand];
    }
}

function rollHoard() {
    if (crText.innerHTML === "Challenge Rating 0 - 4") {
        let rand = Math.floor(Math.random() * 100);
        return library.TrhoardCR04Array[rand];
    }
    else if (crText.innerHTML === "Challenge Rating 5 - 10") {
        let rand = Math.floor(Math.random() * 100);
        return library.TrhoardCR510Array[rand];
    }
    else if (crText.innerHTML === "Challenge Rating 11 - 16") {
        let rand = Math.floor(Math.random() * 100);
        return library.TrhoardCR1116Array[rand];
    }
    else if (crText.innerHTML === "Challenge Rating 17+") {
        let rand = Math.floor(Math.random() * 100);
        return library.TrhoardCR17Array[rand];
    }
}

function parseValue() {
    let string = treasureText.innerHTML;
    let value = string.replace("and", "+ Roll").replace("once", "1d1 times").split(' ');
    let bigArray = [];
    let smallArray = [];

    for (let i = 0; i <= value.length; i++) {
        if (value[i] === "+") {
            bigArray.push(smallArray);
            smallArray = [];
        } else if (i === value.length) {
            bigArray.push(smallArray);
            smallArray = [];
        } else {
            smallArray.push(value[i]);
        }
    }
    parsedArray = bigArray;
    bigArray = [];
    smallArray = [];
}

function rollForArrays() {
    for (let i = 0; i < parsedArray.length; i++) {
        if (parsedArray[i][0].match(/\d+d{1}\d/)) {
            let diceroll = parsedArray[i][0].split('d');
            let times = diceroll[0];
            let size = diceroll[1];
            let rollTotal = 0;

            if (diceroll.length === 4) {
                let elements = diceroll[0] + diceroll[1];
                times = parseInt(elements);
            }

            for (let j = 0; j < times; j++) {
                rollTotal += rolld(size);
            }

            if (parsedArray[i][1] === "cp" || parsedArray[i][1] === "sp" || parsedArray[i][1] === "ep" || parsedArray[i][1] === "gp" || parsedArray[i][1] === "pp") {
                parsedArray[i] = rollTotal + " " + parsedArray[i][1];
            }

            if (parsedArray[i][1] === "x") {
                parsedArray[i] = rollTotal * parsedArray[i][2] + " " + parsedArray[i][3];
            }
            else if (parsedArray[i][3] === "art" || parsedArray[i][3] === "gems") {
                let table = parsedArray[i][3] + parsedArray[i][1] + parsedArray[i][2];
                newGem = rollTable(searchJson(table));
                parsedArray[i] = rollTotal + " x " + newGem;
            }
        }

        if (parsedArray[i][0] === "Roll") {
            let table = "magicTable" + parsedArray[i][7];
            let diceroll = parsedArray[i][1].split('');
            let times = diceroll[0];
            let size = diceroll[2];
            let rollTotal = 0;

            for (let j = 0; j < times; j++) {
                rollTotal += rolld(size);
            }

            for (let j = 0; j < rollTotal; j++) {
                newItem = rollTable(searchJson(table));
                parsedArray.push(newItem);
            }
        }
    }
}

function removeTable() {
    treasureText.innerHTML = "";

    if (parsedArray.length >= 3) {
        for (let i = 0; i < parsedArray.length; i++) {
            if (parsedArray[i][0] === "Roll") {
                parsedArray.splice(i, 1);
            }
        }

        for (let i = 0; i < parsedArray.length; i++) {
            if (parsedArray[i][0] === "Roll") {
                parsedArray.splice(i, 1);
            }
        }
    }
}

function addText() {
    for (n = 0; n < parsedArray.length; n++) {
        if (n === 0) {
            treasureText.innerHTML += parsedArray[0];
        } else {
            treasureText.innerHTML += "<br><hr>" + parsedArray[n];
        }
    }
}

function searchJson(element) {
    for (let i = 0; i < Object.keys(library).length; i++) {
        if (Object.keys(library)[i] === element) {
            return library[element];
        }
    }
}

function rolld(element) {
    let roll = parseInt(Math.floor(Math.random() * (element) + 1));
    return roll;
}

function rollTable(element) {
    tableroll = Math.floor(Math.random() * element.length);
    return element[tableroll];
}

function addOptions() {
    for (let i = 0; i < options.length; i++) {
        let amount = parseInt(options[i].childNodes[3].innerHTML);
        if (amount > 0) {
            for (let j = 0; j < amount; j++) {
                if (i === 0) {
                    treasureText.innerHTML += "<br><hr>" + library.trinketArray[rolld(library.trinketArray.length - 1)];
                } else if (i === 1) {
                    treasureText.innerHTML += "<br><hr>" + library.toolsArray[rolld(library.toolsArray.length - 1)];
                } else if (i === 2) {
                    treasureText.innerHTML += "<br><hr>" + library.gearArray[rolld(library.gearArray.length - 1)];
                } else if (i === 3) {
                    treasureText.innerHTML += "<br><hr>" + library.weaponsarmorArray[rolld(library.weaponsarmorArray.length - 1)];
                } else if (i === 4) {
                    treasureText.innerHTML += "<br><hr>" + library.componentArray[rolld(library.componentArray.length - 1)];
                } else if (i === 5) {
                    treasureText.innerHTML += "<br><hr>" + library.bookArray[rolld(library.bookArray.length - 1)];
                }
            }
        }
    }
}