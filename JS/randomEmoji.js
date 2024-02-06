"use strict";
const randomEmoji = document.querySelector(".random-emoji");
const createRandomEmoji = () => {
    const randomNumber = Math.floor(Math.random() * 7);
    let selectedEmoji = "";
    switch (randomNumber) {
        case 0:
            selectedEmoji = "🪴";
            break;
        case 1:
            selectedEmoji = "✨";
            break;
        case 2:
            selectedEmoji = "🌠";
            break;
        case 3:
            selectedEmoji = "🌟";
            break;
        case 4:
            selectedEmoji = "🔥";
            break;
        case 5:
            selectedEmoji = "🌻";
            break;
        case 6:
            selectedEmoji = "🪐";
            break;
        default:
            break;
    }
    randomEmoji.textContent = selectedEmoji;
};
createRandomEmoji();
randomEmoji.addEventListener("click", createRandomEmoji);
//# sourceMappingURL=randomEmoji.js.map