// twimnubin [t w m n b n]

// Character database


const aspen = "https://github.com/QueenBookworm/Sacrifices-Must-Be-Made/blob/main/Shy_Kind.png?raw=true"
const nora = "https://github.com/QueenBookworm/Sacrifices-Must-Be-Made/blob/main/Mean_Cold.png?raw=true"
const harper = "https://github.com/QueenBookworm/Sacrifices-Must-Be-Made/blob/main/Sports_Confident.png?raw=true"
const sawyer = "https://github.com/QueenBookworm/Sacrifices-Must-Be-Made/blob/main/Apathetic_Average.png?raw=trueg"
const logan = "https://github.com/QueenBookworm/Sacrifices-Must-Be-Made/blob/main/Music_Arts.png?raw=true"
const ivan = "https://github.com/QueenBookworm/Sacrifices-Must-Be-Made/blob/main/Energetic_Reckless.png?raw=true"
const yew = "https://github.com/QueenBookworm/Sacrifices-Must-Be-Made/blob/main/shadow.png?raw=true"
let player = "You"
var scene = 0
var progress = 0

let blabber = ""
let choice1 = ""
let choice2 = ""
let dialogue = ""
// var scenes = [scene1(), "scene2()"]

// Character database

var speakers = [[yew, yew, yew, 
    // player,
    ivan, nora, ivan, aspen, nora, harper, aspen, ivan, aspen, ],
    []
]
var birds = [["You", "You", "You", 
    // player,
    "Ivan", "Nora", "Ivan", "Aspen", "Nora", "Harper", "Aspen", "Ivan", "Aspen", 
    // player, [aspen, sawyer]
],
    []
]
var scripts = [[`Riiiiing`, 
    `/You gather your stuff and exit the classroom for lunch./`,
    // [`FOOD!!!`,`Ugh, I want to go home...`],
    `/You follow the human current to the cafeteria/`,
    `"SAL-MON! SAL-MON!"`,
    `"Why the hell are you getting worked up over that stinky stuff?"`,
    `"Hey! Don't insult salmon!"`,
    `"Salmon are one of the few anadromous species, with a unique a-ability to change colors during the mating season. This is due to the carotenoid called astaxanthin, which is found i-in... sorry..."`,
    `*scoff*`,
    `"You have no reason to apologize, Aspen. If she has nothing good to say, better not say it at all."`,
    `"Sorry... oops. Sor-- um."`,
    `"Salmons are water chameleons!!!"`,
    `"No, c-chameleons can change their color due to layers of iridophores in their skin which contain nanocrystals that reflect li-light. They can change their color in a matter of seconds, while salmon..."`,
    // [`Ignore them.`,`"Why don't you bring that somewhere else?"`],
    // [`*sigh*`,`"Oh, sorry..."`]
], []]

window.onload = async function() {
    console.log("You raise me UUUUUPPPPP")

    startGame()
    ;
}



async function startGame() {
    console.log("starting...")

    const container = document.getElementById("bg")

    let html = `
    <div id="beginning">
        <h1 id="welcome">
            Welcome to Send them to die!
        </h1>
        <p id="introduction">
            You are a student at Harwick, a magic institute. Your school has been terrorized by They Who Must Not Be Named, and you and some classmates discover an ancient shield mechanism that may save your school-- but the security locks weren't meant for students...
        
            <button id="begin" type="button" onclick="setup()">Start</button>
        </p>
    </div>
    `
    container.insertAdjacentHTML("beforeend", html);
}


async function begin() {
    console.log("startup...")

    document.getElementById("player").style.display = "none"
    console.log("startup...")

    traveler()
}

// Upload 

async function upload() {
    const container = document.getElementById("bg")

    let html = `
    <div id="goay">
        <!-- Quit option -->
        <nav id="topbar">
            <p class="quitG">Quit</p>
        </nav>

        <!-- Character and dialogue choices-->
        <div id="chAO">
            <img id="cPro" src="${blabber}">
            <div id="choices">
                <div class="diChoice" onclick="next()">
                    <span class="ctext">Next</span>
                </div>
            </div>
        </div>

        <!-- Character speech -->
        <div id="talk">
            <div class="text">
                <span id="header">
                    ${squeak}
                </span>
            </div>
            <div class="text">
                <div class="diamond"></div>
                <div class="rectangle"></div>
                <div class="diamond"></div>
            </div>
            
            <div class="text">
                <span id="speech">
                    ${dialogue}
                </span>
            </div>

        </div>
    </div>
    `
    container.insertAdjacentHTML("beforeend", html);
}

// Set up profile

async function setup() {
    document.getElementById("beginning").style.display = "none"
    const container = document.getElementById("bg")
    console.log("HA")

    let html = `
        <div id="player">
            <h1 id="user">
                Choose a name
                <div id="input">
                    <input id="nameInput" type="text" placeholder="Alphabetta" id="username">
                    <button type="submit" onclick="submission(document.getElementById('nameInput'))" id="enter">Enter</button>
                </div>
            </h1>
            
        </div>
        `
    container.insertAdjacentHTML("beforeend", html);
    // document.getElementById("input").addEventListener("submit", submission)
    var player = name
    console.log(player);
    console.log("hehe...huh")
}

async function submission(name) {

    var player = name
    console.log(player);
    console.log("hehe...huh")

    begin();
}

function next() {
    if (progress < 11) {
        progress +=1
    } else{
        alert("Game in development, thank you for playing!")
    }
    console.log(progress)
    // document.getElementById("topbar").style.display = "none"
    // document.getElementById("talk").style.display = "none"
    // document.getElementById("chAO").style.display = "none"
    document.getElementById("goay").remove()
    traveler()
}

function traveler() {
    blabber = speakers[scene][progress]
    squeak = birds[scene][progress]
    dialogue = scripts[scene][progress]
    upload()
    // document.getElementById("talk").addEventListener("click", next())
}



// Scenes
//--------------------------------------------------------------------------------------------------//

// Scene 1


// async function scene1() {
    
//     var roles = speakers[0]
//     var lines = scripts[0]
//     console.log("connection timeout")
//     for (let i = 1; i <= progress;) {
//         let name = roles[progress]
//         let dialogue = lines[progress]
        
//         upload()
//         if (Array.isArray(dialogue)) {
//             dialoguedocument.getElementById("diChoice").style.display = "none" 
//         } else {
//             dialoguedocument.getElementById("diChoice").style.display = "block" 
//         }


//         scenes[scene];
//     }
    

//     let progress = 0
//     let scene = 2
// }

console.log("outside")

//<div class="diChoice" onclick="">
//     <span class="ctext">${choice1}</span>
// </div>
// <div class="diChoice" onclick="">
//     <span class="ctext">${choice2}</span>
// </div>