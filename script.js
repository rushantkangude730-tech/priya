let music;

window.onload = function () {

    music = document.getElementById("bgMusic");

    // Moving "Think Again" button
    const noBtn = document.getElementById("noBtn");

    if (noBtn) {

        noBtn.addEventListener("mouseover", moveButton);
        noBtn.addEventListener("click", moveButton);

    }

};

function moveButton() {

    const btn = document.getElementById("noBtn");

    btn.style.position = "absolute";

    btn.style.left = Math.random() * 75 + "%";

    btn.style.top = Math.random() * 75 + "%";

}

function startExperience() {

    music.play().catch(() => {});

    nextPage("page2");

}

function nextPage(pageId) {

    document.querySelectorAll(".page").forEach(page => {

        page.classList.remove("active");

    });

    document.getElementById(pageId).classList.add("active");

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

function showFinalLovePage() {

    nextPage("page7");

}

function toggleMusic() {

    if (music.paused) {

        music.play();

    } else {

        music.pause();

    }

}

function typeMessage() {

    const text =
        "Some people enter our lives and make everything feel brighter. Thank you for being one of those special people. ❤️";

    let i = 0;

    const target = document.getElementById("typing");

    target.innerHTML = "";

    const interval = setInterval(() => {

        target.innerHTML += text.charAt(i);

        i++;

        if (i >= text.length) {

            clearInterval(interval);

        }

    }, 55);

}

// Floating hearts

setInterval(() => {

    const heart = document.createElement("div");

    heart.className = "heart";

    const hearts = ["❤️", "💖", "💕", "💗", "🌸"];

    heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (20 + Math.random() * 20) + "px";

    heart.style.animationDuration = (4 + Math.random() * 3) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 7000);

}, 250);

// Sparkles

setInterval(() => {

    const sparkle = document.createElement("div");

    sparkle.innerHTML = "✨";

    sparkle.style.position = "fixed";

    sparkle.style.left = Math.random() * 100 + "vw";

    sparkle.style.top = Math.random() * 100 + "vh";

    sparkle.style.fontSize = (12 + Math.random() * 12) + "px";

    sparkle.style.opacity = "0.9";

    sparkle.style.pointerEvents = "none";

    sparkle.style.transition = "all 2s ease";

    document.body.appendChild(sparkle);

    setTimeout(() => {

        sparkle.style.opacity = "0";

        sparkle.style.transform = "scale(2)";

    }, 100);

    setTimeout(() => {

        sparkle.remove();

    }, 2000);

}, 600);