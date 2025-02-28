const textareas = document.querySelectorAll("textarea")

textareas.forEach(textarea => {
    let sound = null
    let finalText = ""
    switch (textarea.id) {
        case "textarea-bold":
            sound = new Audio('./audio/audio.mp3') // Ici pour inserer l'audio
            finalText = "Au cours de la Renaissance, l’écriture évolue pour devenir plus lisible et élégante. Une écriture cursive et naturelle."
            break

        case "textarea-light":
            sound = new Audio('./audio/audio.mp3') // Ici pour inserer l'audio
            finalText = "Comme l'écriture, un instrument demande précision et discipline."
            break

        case "textarea-lightitalic":
            sound = new Audio('./audio/audio.mp3') // Ici pour inserer l'audio
            finalText = "Les doigts courent sur les touchent comme la plume sur le papier, traçant des notes au lieu des lettres"
            break

        case "textarea-roman":
            sound = new Audio('./audio/audio.mp3') // Ici pour inserer l'audio
            finalText = "Au XIXe siècle, une révolution approche. Les mots ne sont plus tracés à la main, mais frappés sur du papier par geste mécaniques."
            break
        case "textarea-medium":
            sound = new Audio('./audio/audio.mp3') // Ici pour inserer l'audio
            finalText = "La machine à écrire arrive. Il suffit d'appuyer pour voir une lettre apparaître sur le papier."
            break
        case "textarea-pc":
            sound = new Audio('./audio/audio.mp3') // Ici pour inserer l'audio
            finalText = "<p> Aujourd'hui, l'ordinateur révolutionne notre quotidient </p>."
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

document.addEventListener("DOMContentLoaded", function() {
    let video = document.getElementById("video");
    video.muted = true; // Ne se lance pas automatiquement
    video.play().catch(error => console.log("Autoplay bloqué :", error));
}); 

const text = `> Def Mystery_function
> let secretcode
> <Title> Compagnon </Title>`;
        
        const terminalElement = document.querySelector(".terminal");
        let index = 0;

        function typeEffect() {
            if (index < text.length) {
                terminalElement.textContent += text.charAt(index);
                index++;
                setTimeout(typeEffect, 100); // Ajuste la vitesse ici (100ms)
            }
        }

        setTimeout(typeEffect, 500);