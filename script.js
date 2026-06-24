let music;

window.onload = function () {

    music =
        document.getElementById("bgMusic");
};

function startExperience() {

    music.play();

    nextPage("page2");
}

function nextPage(pageId) {

    document
        .querySelectorAll(".page")
        .forEach(page => {

            page.classList.remove("active");
        });

    document
        .getElementById(pageId)
        .classList.add("active");
}

function answer() {

    nextPage("page3");

    typeMessage();
}

function finalPage() {

    nextPage("page5");
}

function showSurprise() {

    nextPage("page6");
}

function toggleMusic() {

    if (music.paused) {

        music.play();
    }
    else {

        music.pause();
    }
}

function typeMessage() {

    let text =
        "Every day becomes brighter when I see your smile ❤️";

    let i = 0;

    let target =
        document.getElementById("typing");

    target.innerHTML = "";

    let interval = setInterval(() => {

        target.innerHTML +=
            text.charAt(i);

        i++;

        if (i >= text.length) {

            clearInterval(interval);
        }

    }, 70);
}

setInterval(() => {

    let heart =
        document.createElement("div");

    heart.className =
        "heart";

    heart.innerHTML =
        "❤️";

    heart.style.left =
        Math.random() * 100 + "vw";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 6000);

}, 300);