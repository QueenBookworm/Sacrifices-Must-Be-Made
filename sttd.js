// twimnubin [t w m n b n]

// Character database

const aspen = "/127sttd/gameCs/Shy_Kind.png"
const nora = "/127sttd/gameCs/Mean_Cold.png"
const harper = "/127sttd/gameCs/Sports_Confident.png"
const sawyer = "/127sttd/gameCs/Apathetic_Average.png"
const logan = "/127sttd/gameCs/Music_Arts.png"
const ivan = "/127sttd/gameCs/Energetic_Reckless.png"
const scene = 1


const speakers = [ivan, nora, ivan]
const dialogue = []







window.onload = async function() {
    console.log("You raise me UUUUUPPPPP")
    startGame()
    ;
}


function startGame() {
    console.log("starting...")

    const container = document.getElementById("bg")

    const html = `
    <div>
        <h1 id="welcome">
            Welcome to Send them to die!
        </h1>
        <p id="introduction">
            You are a student at Harwick, a magic institute. Your school has been terrorized by They Who Must Not Be Named, and you and some classmates discover an ancient shield mechanism that may save your school-- but the security locks weren't meant for students...
        </p>
        <button id="begin" type="button" onclick="begin()">Start</button>
    </div>
    `
    container.insertAdjacentHTML("beforeend", html);
}


function begin() {
    console.log("startup...")
    scene[scene]()

    const container = document.getElementById("bg")

    const html = `
    <!-- Quit option -->
    <nav>
        <button id="quit" type="button" onclick"quitCheck()">Quit</button>
    </nav>

    <!-- Character and dialogue choices-->
    <div id="chAO">
        <img src="${cprofile}">
        <div id="choices">
            <button class="diChoice" type="button" onclick="">
                ${choice1}
            </button>
            <button class="diChoice" type="button" onclick="">
                ${choice2}
            </button>
        </div>
    </div>

    <!-- Character speech -->
    <div id="talk" onclick="scene${scene}()">
        <div id="name">
            <h1>
                ${name}
            </h1>
        </div>
        <section>
            <p id="speech">
                ${dialogue}
            </p>
        </section>
    </div>
    `
    container.insertAdjacentHTML("beforeend", html);

}


// Scenes
//--------------------------------------------------------------------------------------------------//

// Scene 1


function scene1() {


    const scene = 2
}