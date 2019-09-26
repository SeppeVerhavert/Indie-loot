//      SLIDERS       //


let crArray = [
    '0 - 4',
    '5 - 10',
    '11 - 16',
    '17+'
];


//  -------------------------------------   VARIABLES   -------------------------------------  //


let radioType = document.getElementById('radioType');

let crSlider = document.getElementById('crRange');
let crText = document.getElementById('crText');
crSlider.addEventListener('input', showCr);

document.getElementById('optionsBtn').addEventListener('click', toggleOptions);
optionsDiv = document.getElementById('options');
let toggle = true;

document.getElementById('generateBtn').addEventListener('click', generateTreasure);
let treasureText = document.getElementById('treasureText');

let trinketBox = document.getElementById('trinkets');
let gearBox = document.getElementById('gear');
let weaponBox = document.getElementById('weapons');
let toolBox = document.getElementById('tools');
let componentBox = document.getElementById('components');

let parsedArray = [];


//  -------------------------------------   FUNCTIONS   -------------------------------------  //


fetch("https://raw.githubusercontent.com/SeppeVerhavert/Treasure-generator/master/library.json")
    .then(response => response.json())
    .then(json => library = json);

function showCr() {
    let range = document.getElementById("crRange").value;
    crText.innerHTML = "Challenge Rating " + crArray[range];
}


function generateTreasure() {
    toggle = true;
    toggleOptions();
    checkType();
    parseValue();
    rollForArrays();
    applyParsedArray();
    extraOptions();
}

function toggleOptions() {
    if (toggle === true) {
        toggle = false;
        optionsDiv.style.display = "none";
    } else {
        toggle = true;
        optionsDiv.style.display = "block";
    }
}

function checkType() {
    if (radioType.checked) {
        treasureText.innerHTML = rollIndividual();
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

    for (let x = 0; x <= value.length; x++) {
        if (value[x] === "+") {
            bigArray.push(smallArray);
            smallArray = [];
        } else if (x === value.length) {
            bigArray.push(smallArray);
            smallArray = [];
        } else {
            smallArray.push(value[x]);
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
                parsedArray[i] = rollTotal + parsedArray[i][1];
            }

            if (parsedArray[i][1] === "x") {
                parsedArray[i] = rollTotal * parsedArray[i][2] + parsedArray[i][3];
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

            for (let l = 0; l < rollTotal; l++) {
                newItem = rollTable(searchJson(table));
                parsedArray.push(newItem);
            }
        }
    }
}

function applyParsedArray() {
    console.log(parsedArray);
    treasureText.innerHTML = "";

    if(parsedArray.length>=4){
        if (parsedArray[3][0] === "Roll") {
            parsedArray.splice(3, 1);
        }
    
        if (parsedArray[3][0] === "Roll") {
            parsedArray.splice(3, 1);
        }
    }
    
    for (n = 0; n < parsedArray.length; n++) {
        if (n === 0) {
            treasureText.innerHTML += parsedArray[n];
        } else {
            treasureText.innerHTML += "<br><hr>" + parsedArray[n];
        }
    }
}

function searchJson(element) {
    for (let k = 0; k < Object.keys(library).length; k++) {
        if (Object.keys(library)[k] === element) {
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

function extraOptions() {
    if (trinketBox.checked) {
        addTrinket();
    }
    if (gearBox.checked) {
        addGear();
    }
    if (weaponBox.checked) {
        addWeapon();
    }
    if (toolBox.checked) {
        addToolkit();
    }
    if (componentBox.checked) {
        addComponent();
    }
}

function addTrinket() {
    let rand = Math.random();
    if (rand > 0.75) {
        let length = library.trinketArray.length - 1;
        treasureText.innerHTML += "<br><hr>" + library.trinketArray[rolld(length)];
    }
}

function addGear() {
    let rand = Math.random();
    if (rand > 0.75) {
        let length = library.gearArray.length - 1;
        treasureText.innerHTML += "<br><hr>" + library.gearArray[rolld(length)];
    }
}

function addWeapon() {
    let rand = Math.random();
    if (rand > 0.75) {
        let length = library.weaponsarmorArray.length - 1;
        treasureText.innerHTML += "<br><hr>" + library.weaponsarmorArray[rolld(length)];
    }
}

function addToolkit() {
    let rand = Math.random();
    if (rand > 0.75) {
        let length = library.toolsArray.length - 1;
        treasureText.innerHTML += "<br><hr>" + library.toolsArray[rolld(length)];
    }
}

function addComponent() {
    let rand = Math.random();
    if (rand > 0.75) {
        let length = library.componentArray.length - 1;
        treasureText.innerHTML += "<br><hr>" + library.componentArray[rolld(length)];
    }
}