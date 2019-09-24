//      TRINKETS       //


let trinketArray = [
    'A mummified goblin hand',
    'A piece of crystal that faintly glows in the moonlight',
    'A gold coin minted in an unknown land',
    'A diary written in a language you don’t know',
    'A brass ring that never tarnishes',
    'An old chess piece made from glass',
    'A pair of knucklebone dice, each with a skull symbol on the side that would normally show six pips',
    'A small idol depicting a nightmarish creature that gives you unsettling dreams when you sleep near it',
    'A rope necklace from which dangles four mummified elf fingers',
    'The deed for a parcel of land in a realm unknown to you',
    'A 1-ounce block made from an unknown material',
    'A small cloth doll skewered with needles',
    'A tooth from an unknown beast',
    'An enormous scale, perhaps from a dragon',
    'A bright green feather',
    'An old divination card bearing your likeness',
    'A glass orb filled with moving smoke',
    'A 1-pound egg with a bright red shell',
    'A pipe that blows bubbles',
    'A glass jar containing a weird bit of flesh floating in pickling fluid',
    'A tiny gnome-crafted music box that plays a song you dimly remember from your childhood',
    'A small wooden statuette of a smug halfling',
    'A brass orb etched with strange runes',
    'A multicolored stone disk',
    'A tiny silver icon of a raven',
    'A bag containing forty-seven humanoid teeth, one of which is rotten',
    'A shard of obsidian that always feels warm to the touch',
    "A dragon's bony talon hanging from a plain leather necklace",
    'A pair of old socks',
    'A blank book whose pages refuse to hold ink, chalk, graphite, or any other substance or marking',
    'A silver badge in the shape of a five-pointed star',
    'A knife that belonged to a relative',
    'A glass vial filled with nail clippings',
    'A rectangular metal device with two tiny metal cups on one end that throws sparks when wet',
    'A white, sequined glove sized for a human',
    'A vest with one hundred tiny pockets',
    'A small, weightless stone block',
    'A tiny sketch portrait of a goblin',
    'An empty glass vial that smells of perfume when opened',
    'A gemstone that looks like a lump of coal when examined by anyone but you',
    'A scrap of cloth from an old banner',
    'A rank insignia from a lost legionnaire',
    'A tiny silver bell without a clapper',
    'A mechanical canary inside a gnome-crafted lamp',
    'A tiny chest carved to look like it has numerous feet on the bottom',
    'A dead sprite inside a clear glass bottle',
    'A metal can that has no opening but sounds as if it is filled with liquid, sand, spiders, or broken glass (your choice)',
    'A glass orb filled with water, in which swims a clockwork goldfish',
    'A silver spoon with an M engraved on the handle',
    'A whistle made from gold-colored wood',
    'A dead scarab beetle the size of your hand',
    'Two toy soldiers, one with a missing head',
    'A small box filled with different-sized buttons',
    'A candle that can’t be lit',
    'A tiny cage with no door',
    'An old key',
    'An indecipherable treasure map',
    'A hilt from a broken sword',
    'A rabbit’s foot',
    'A glass eye',
    'A cameo carved in the likeness of a hideous person',
    'A silver skull the size of a coin',
    'An alabaster mask',
    'A pyramid of sticky black incense that smells very bad',
    'A nightcap that, when worn, gives you pleasant dreams',
    'A single caltrop made from bone',
    'A gold monocle frame without the lens',
    'A 1-inch cube, each side painted a different color',
    'A crystal knob from a door',
    'A small packet filled with pink dust',
    'A fragment of a beautiful song, written as musical notes on two pieces of parchment',
    'A silver teardrop earring made from a real teardrop',
    'The shell of an egg painted with scenes of human misery in disturbing detail',
    'A fan that, when unfolded, shows a sleeping cat',
    'A set of bone pipes',
    'A four-leaf clover pressed inside a book discussing manners and etiquette',
    'A sheet of parchment upon which is drawn a complex mechanical contraption',
    'An ornate scabbard that fits no blade you have found so far',
    'An invitation to a party where a murder happened',
    "A bronze pentacle with an etching of a rat's head in its center",
    'A purple handkerchief embroidered with the name of a powerful archmage',
    'Half of a floorplan for a temple, castle, or some other structure',
    'A bit of folded cloth that, when unfolded, turns into a stylish cap',
    'A receipt of deposit at a bank in a far-flung city',
    'A diary with seven missing pages',
    'An empty silver snuffbox bearing an inscription on the surface that says "dreams"',
    'An iron holy symbol devoted to an unknown god',
    "A book that tells the story of a legendary hero's rise and fall, with the last chapter missing",
    'A vial of dragon blood',
    'An ancient arrow of elven design',
    'A needle that never bends',
    'An ornate brooch of dwarven design',
    'An empty wine bottle bearing a pretty label that says, "The Wizard of Wines Winery, Red Dragon Crush, 331422-W"',
    'A mosaic tile with a multicolored, glazed surface',
    'A petrified mouse',
    "A black pirate flag adorned with a dragon's skull and crossbones",
    'A tiny mechanical crab or spider that moves about when it’s not being observed',
    'A glass jar containing lard with a label that reads, "Griffon Grease"',
    'A wooden box with a ceramic bottom that holds a living worm with a head on each end of its body',
    'A metal urn containing the ashes of a hero  ',
];


//      ADVENTURING GEAR       //


let ammunition = [
    'Arrows(20)',
    'Blowgun needles(50)',
    'Crossbow bolts(20)',
    'Sling bullets(20)',
];

let arcaneFocus = [
    'Crystal',
    'Orb',
    'Rod',
    'Staff',
    'Wand',
];

let druidicFocus = [
    'Sprig of mistletoe',
    'Totem',
    'Wooden staff',
    'Yew wand',
];

let holySymbol = [
    'Amulet',
    'Emblem',
    'Reliquary',
];

let gearArray = [
    'Abacus',
    'Vial of Acid	',
    "Flask of Alchemist's fire",
    'Ammunition (' + rollTable(ammunition) + ')',
    'Vial of Antitoxin',
    'Arcane focus (' + rollTable(arcaneFocus) + ')',
    'Backpack',
    'Bag of 1000 ball bearings',
    'Barrel	',
    'Basket',
    'Bedroll',
    'Bell',
    'Blanket',
    'Block and tackle',
    'Book	',
    'Glass bottle',
    'Bucket',
    'Bag of 20 caltrops',
    'Candle',
    'Crossbow bolts case',
    'Map or scroll case',
    '10 feet of chain',
    '1 piece of chalk',
    'Chest	',
    "Climber's kit",
    'Common clothes',
    'Costume clothes',
    'Fine clothes',
    "Traveler's clothes",
    'Component pouch	',
    'Crowbar',
    'Druidic focus (' + rollTable(druidicFocus) + ')',
    'Fishing tackle',
    'Flask or tankard',
    'Grappling hook',
    'Hammer',
    'Sledgehammer',
    "Healer's kit",
    'Holy symbol (' + rollTable(holySymbol) + ')',
    'Flask of Holy water',
    'Hourglass	',
    'Hunting trap	',
    '1 ounce bottle of ink',
    'Ink pen',
    'Jug or pitcher',
    '10-foot ladder	',
    'Lamp',
    'Bullseye lantern',
    'Hooded Lantern',
    'Lock	',
    'Magnifying glass',
    'Manacles',
    'Mess kit',
    'Mirror, steel',
    'Flask of oil',
    'One sheet of paper',
    'One sheet of parchment',
    'Vial of perfume',
    "Miner's pick",
    'Piton',
    'Vial of Poison',
    '10-ft pole',
    'Iron pot',
    'Potion of healing',
    'Pouch',
    'Quiver',
    'Portable ram',
    '1 day of rations',
    'Robes',
    '50 feet of hempen rope',
    '50 feet of silk rope',
    'Sack',
    "Merchant's scale",
    'Sealing wax',
    'Shovel',
    'Signal whistle',
    'Signet',
    'Soap',
    'Spellbook',
    '10 iron spikes',
    'Spyglass',
    'Two-person tent',
    'Tinderbox',
    'Torch',
    'Vial',
    'Waterskin',
    'Whetstone',
];


//      TOOLS, KITS & SETS       //


let toolsArray = [
    "Alchemist's supplies",
    "Brewer's supplies",
    "Calligrapher's supplies",
    "Carpenter's tools",
    "Cartographer's tools",
    "Cobbler's tools",
    "Cook's utensils",
    "Glassblower's tools",
    "Jeweler's tools",
    "Leatherworker's tools",
    "Mason's tools",
    "Painter's supplies",
    "Potter's tools",
    "Smith's tools",
    "Tinker's tools",
    "Weaver's tools",
    "Woodcarver's tools",
    'Dice set',
    'Dragonchess set',
    'Playing card set',
    'Three-Dragon Ante set',
    'Herbalism kit',
    'Bagpipes',
    'Drum    ',
    'Dulcimer',
    'Flute    ',
    'Lute',
    'Lyre',
    'Horn    ',
    'Pan flute',
    'Shawm',
    'Viol',
    "Navigator's tools",
    "Poisoner's kit",
    "Thieves' tools",
    'Disguise kit',
    'Forgery kit',
];


//      WEAPONS & ARMOR      //


let weaponsarmorArray = [
    'Club',
    'Dagger',
    'Greatclub',
    'Handaxe',
    'Javelin',
    'Light',
    'Mace',
    'Quarterstaff',
    'Sickle',
    'Spear',
    'Crossbow (light)',
    'Dart',
    'Shortbow',
    'Sling',
    'Battleaxe',
    'Flail',
    'Glaive',
    'Greataxe',
    'Greatsword',
    'Halberd',
    'Lance',
    'Longsword',
    'Maul',
    'Morningstar',
    'Pike',
    'Rapier',
    'Scimitar',
    'Shortsword',
    'Trident',
    'War Pick',
    'Warhammer',
    'Whip',
    'Blowgun',
    'Crossbow (hand)',
    'Crossbow (heavy)',
    'Longbow',
    'Net',
    'Shield',
    'Padded armor',
    'Leather armor',
    'Studded leather armor',
    'Hide armor',
    'Chain shirt',
    'Scale mail armor',
    'Breastplate',
    'Half plate armor',
    'Ring mail armor',
    'Chain mail armor',
    'Splint armor',
    'Plate armor',
];


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

let parsedArray = [];


//  -------------------------------------   FUNCTIONS   -------------------------------------  //


fetch("https://raw.githubusercontent.com/SeppeVerhavert/Treasure-generator/master/assets/json/libraries.json")
    .then(response => response.json())
    .then(json => console.log(json));

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
        return IndivCR04Array[rand];
    }
    else if (crText.innerHTML === "Challenge Rating 5 - 10") {
        let rand = Math.floor(Math.random() * 100);
        return IndivCR510Array[rand];
    }
    else if (crText.innerHTML === "Challenge Rating 11 - 16") {
        let rand = Math.floor(Math.random() * 100);
        return IndivCR1116Array[rand];
    }
    else if (crText.innerHTML === "Challenge Rating 17+") {
        let rand = Math.floor(Math.random() * 100);
        return IndivCR17Array[rand];
    }
}

function rollHoard() {
    if (crText.innerHTML === "Challenge Rating 0 - 4") {
        let rand = Math.floor(Math.random() * 100);
        return TrhoardCR04Array[rand];
    }
    else if (crText.innerHTML === "Challenge Rating 5 - 10") {
        let rand = Math.floor(Math.random() * 100);
        return TrhoardCR510Array[rand];
    }
    else if (crText.innerHTML === "Challenge Rating 11 - 16") {
        let rand = Math.floor(Math.random() * 100);
        return TrhoardCR1116Array[rand];
    }
    else if (crText.innerHTML === "Challenge Rating 17+") {
        let rand = Math.floor(Math.random() * 100);
        return TrhoardCR17Array[rand];
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
}

function rollForArrays() {
    for (let i = 0; i < parsedArray.length; i++) {
        console.log(parsedArray[i]);

        if (parsedArray[i][0].match(/\d+d{1}\d/)) {
            let diceroll = parsedArray[i][0].split('');
            let times = diceroll[0];
            let size = diceroll[2];
            let rollTotal = 0;

            for (let j = 0; j < times; j++) {
                rollTotal += rolld(size);
            }

            if (parsedArray[i][1] === "x") {
                parsedArray[i] = rollTotal * parsedArray[i][2] + parsedArray[i][3];
                console.log(parsedArray[i]);
            } else if (parsedArray[i][3] === "art" || parsedArray[i][3] === "gems") {
                console.log(rollTotal);
                let table = parsedArray[i][3] + parsedArray[i][1] + parsedArray[i][2];
                console.log(table);
                let object = rollTable(table);
                console.log(object);
                // parsedArray[i] = rollTotal + " " + ;
                // console.log(parsedArray[i]);
            }
        }
    }
    // let roll = value[0].split('d');
    // treasureText.innerHTML = rolld(roll[0]) + " " + value[1];
    // } else if (value.length <= 4) {
    //     let roll = value[0].split('d');
    //     treasureText.innerHTML = rolld(roll[0]) * value[2] + " " + value[3];
    // } else if (value.length <= 7) {
    //     let roll1 = value[0].split('d');
    //     let roll2 = value[5].split('d');
    //     treasureText.innerHTML = rolld(roll1[0]) * value[2] + " " + value[3] + "<br>" + rolld(roll2[0]) + " " + value[6];
    // } else if (value.length <= 9) {
    //     let roll1 = value[0].split('d');
    //     let roll2 = value[5].split('d');
    //     treasureText.innerHTML = rolld(roll1[0]) * value[2] + " " + value[3] + "<br>" + rolld(roll2[0]) * value[7] + " " + value[8];
    // } else if (value.length <= 9) {
    //     let roll1 = value[0].split('d');
    //     let roll2 = value[5].split('d');
    //     treasureText.innerHTML = rolld(roll1[0]) * value[2] + " " + value[3] + "<br>" + rolld(roll2[0]) * value[7] + " " + value[8];
    // }
}

function rolld(argument) {
    let roll = parseInt(Math.floor(Math.random() * (argument) + 1));
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
}

function addTrinket() {
    let length = trinketArray.length;
    let rand = Math.floor(Math.random() * (4 * length));
    if (rand >= length * 3) {
        treasureText.innerHTML += "<br><hr>" + trinketArray[rand - length * 3]
    }
}

function addGear() {
    let length = gearArray.length;
    let rand = Math.floor(Math.random() * (4 * length));
    if (rand >= length * 3) {
        treasureText.innerHTML += "<br><hr>" + gearArray[rand - (length * 3)]
    }
}

function addWeapon() {
    let length = weaponsarmorArray.length;
    let rand = Math.floor(Math.random() * (4 * length));
    if (rand >= length * 3) {
        treasureText.innerHTML += "<br><hr>" + weaponsarmorArray[rand - (length * 3)]
    }
}

function addToolkit() {
    let length = toolsArray.length;
    let rand = Math.floor(Math.random() * (4 * length));
    if (rand >= length * 3) {
        treasureText.innerHTML += "<br><hr>" + toolsArray[rand - (length * 3)]
    }
}