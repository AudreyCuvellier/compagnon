const textareas = document.querySelectorAll("textarea")

textareas.forEach(textarea => {
    let sound = null
    let finalText = ""
    switch (textarea.id) {
        case "textarea-bold":
            sound = new Audio('./audio/crayon-papier.mp3') // Ici pour inserer l'audio
            finalText = "Au cours de la Renaissance, l’écriture évolue pour devenir plus lisible et élégante. Une écriture cursive et naturelle."
            break

        case "textarea-light":
            sound = new Audio('./audio/piano.mp3') // Ici pour inserer l'audio
            finalText = "Comme l'écriture, un instrument demande précision et discipline."
            break

        case "textarea-lightitalic":
            sound = new Audio('./audio/piano.mp3') // Ici pour inserer l'audio
            finalText = "Les doigts courent sur les touchent comme la plume sur le papier, traçant des notes au lieu des lettres."
            break

        case "textarea-roman":
            sound = new Audio('./audio/machine-a-ecrire.mp3') // Ici pour inserer l'audio
            finalText = "Au XIXe siècle, une révolution approche. Les mots ne sont plus tracés à la main, mais frappés sur du papier par geste mécaniques.La machine à écrire arrive. Il suffit d'appuyer pour voir une lettre apparaître sur le papier."
            break
        case "textarea-medium":
            sound = new Audio('./audio/clavier-ordi.mp3') // Ici pour inserer l'audio
            finalText = "<p> Aujourd'hui, l'ordinateur révolutionne notre quotidien </p>."
            break
        default:
            break;

            
    }

    let count = 0
    textarea.addEventListener('input', () => {
        textarea.addEventListener('keyup', e => {
            if (e.key == 'Backspace') {
                textarea.value = textarea.value = ""
                count = 0
            }
        })
        if (Array.from(finalText)[count]) {
            textarea.value =
                finalText.substring(0, count) + Array.from(finalText)[count]
            sound.play()
            count++
        } else {

            textarea.value = finalText.substring(0, count)
        }
    })

    textarea.addEventListener('keyup', () => {
        sound.pause()
        sound.currentTime = 0
    })
})

document.getElementById("scrollTop").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


const notes = document.querySelectorAll(".note")
notes.forEach(note => {
    note.style.animationDuration = Math.floor(Math.random() * 6 + 3) + "s";
})

document.getElementById("playAudio").addEventListener("click", function() {
    let audio = document.getElementById("audio");
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
        audio.currentTime = 0;
    }
});

document.getElementById("playAudio-2").addEventListener("click", function() {
    let audio = document.getElementById("audio-2");
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
        audio.currentTime = 0;
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const textContainer = document.getElementById("text-container");
    const textLines = document.getElementById("text").textContent
        .trim()
        .split("|")
        .map(line => line.trim()); 

    let lineIndex = 0;
    let charIndex = 0;
    let currentLine = "";
    let cursor = document.createElement("span");
    cursor.classList.add("cursor");

    function typeEffect() {
        if (charIndex < textLines[lineIndex].length) {
            currentLine += textLines[lineIndex][charIndex];
            textContainer.innerHTML = textLines
                .slice(0, lineIndex)
                .map(line => `<div>${line}</div>`)
                .join("") + `<div>${currentLine}<span class="cursor"></span></div>`;

            charIndex++;
            setTimeout(typeEffect, 100);
        } else {
            charIndex = 0;
            lineIndex++;
            currentLine = "";

            if (lineIndex < textLines.length) {
                setTimeout(typeEffect, 500); 
            } else {
                setTimeout(() => {
                    textContainer.innerHTML = `<span class="cursor"></span>`;
                    lineIndex = 0;
                    typeEffect();
                }, 1500);
            }
        }
    }

    setTimeout(typeEffect, 500);
});

//TERMINAL
document.addEventListener("DOMContentLoaded", () => {
    const textContainer = document.getElementById("terminal-container");
    const textLines = document.getElementById("text-terminal").textContent
        .trim()
        .split("|")
        .map(line => line.trim()); // Supprime les espaces inutiles

    let lineIndex = 0;
    let charIndex = 0;
    let currentLine = "";
    let cursor = document.createElement("span");
    cursor.classList.add("cursor-terminal");

    function typeEffect() {
        if (charIndex < textLines[lineIndex].length) {
            currentLine += textLines[lineIndex][charIndex];
            textContainer.innerHTML = textLines
                .slice(0, lineIndex)
                .map(line => `<div>${line}</div>`)
                .join("") + `<div>${currentLine}<span class="cursor-terminal"></span></div>`;

            charIndex++;
            setTimeout(typeEffect, 40);
        } else {
            charIndex = 0;
            lineIndex++;
            currentLine = "";

            if (lineIndex < textLines.length) {
                setTimeout(typeEffect, 500); // Pause avant la nouvelle ligne
            } else {
                setTimeout(() => {
                    textContainer.innerHTML = `<span class="cursor-terminal"></span>`;
                    lineIndex = 0;
                    typeEffect();
                }, 1500);
            }
        }
    }

    setTimeout(typeEffect, 500);
});
