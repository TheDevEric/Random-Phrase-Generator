//variables

var randomWord1 = [
    "Daniel Mooris",
    "Deven LeJander",
    "Cliton",
    "Pablo",
    "Jack",
    "Kristopher",
    "Jayden"
];

var randomWord2 = [
    "teacher",
    "playyyys",
    "goes to the store with",
    "goes trick or treating with",
    "jokes with",
    "codes with",
    "rizzes up",
    "laughs at",
    "plays with",
    "sets up a playdate with",
    "runs",
    "hikes",
    "jumps with",
    "says hi to",
    "plays phone games with",
    "plays basketball with",
]

var randomWord3 = [
    "Daniel Mooris",
    "Deven LeJander",
    "Cliton",
    "Pablo",
    "Jack",
    "Kristopher",
    "the landscaper",
    "the principle",
    "6ix9ine",
    "Kanye West",
    "Jayden",
    "the ops"
]

const button = document.getElementById("gen")
const button2 = document.getElementById("reset")
const dis = document.getElementById("box1")
const dis2 = document.getElementById("box2")
const dis3 = document.getElementById("box3")



button.addEventListener("click", genRandomWord)
button.addEventListener("click", genRandomWord2)
button.addEventListener("click", genRandomWord3)
button2.addEventListener("click", reset)

var db = true
var db2 = true
var db3 = true

//functions
function genRandomWord(){
    if(db==true){
    const getWord = randomWord1[Math.floor(Math.random()*randomWord1.length)];
    dis.textContent = getWord;
    db = false
    }
}

function genRandomWord2(){
    if(db3==true){
    const getWord2 = randomWord2[Math.floor(Math.random()*randomWord2.length)];
    dis2.textContent = getWord2;
    db2 = false
    }
}

function genRandomWord3(){
    if(db3==true){
    const getWord3 = randomWord3[Math.floor(Math.random()*randomWord3.length)];
    dis3.textContent = getWord3;
    db3 = false
    }
}

function reset(){
    dis.textContent = "❓"
    dis2.textContent = "❓"
    dis3.textContent = "❓"
    db = true
    db2 = true
    db3 = true
}

