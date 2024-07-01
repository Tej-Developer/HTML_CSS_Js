const words = "mewtru is super cool"; // Add more words as needed

const ANIMATION_DURATION = 4000; // ms

// separate each character into it's own div
const characters = words.split("").forEach((char, i) => {
    function createElement(offset) {
        const div = document.createElement("div");
        div.innerHTML = char;
        div.classList.add("character");
        // Negative animation delay prevent waiting to start the animaton 
        div.style.animationDelay = `-${i * (ANIMATION_DURATION / 16) - offset}ms`;

        return div;
    }

    document.getElementById("spiral").append(createElement(0));
    document.getElementById("spiral2").append(createElement(-1 * (ANIMATION_DURATION / 2)))
});