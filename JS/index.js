"use strict";
const setDirs = document.querySelectorAll(".set-dir");
const submitBtn = document.querySelector(".arrow-btn");
const orderList = document.querySelector(".order-list");
const inputNames = document.querySelectorAll(".input-name");
const outputNames = document.querySelectorAll(".output-name");
let ListOfNames = [];
inputNames[0].value = "1";
inputNames[1].value = "2";
inputNames[2].value = "3";
inputNames[3].value = "4";
const changeDir = (HTMLValue) => {
    if (/^[a-zA-Z]/.test(HTMLValue.value)) {
        HTMLValue.style.direction = "ltr";
        console.log("ENG");
    }
    else {
        HTMLValue.style.direction = "rtl";
        console.log("PER");
    }
};
setDirs.forEach((setDir) => {
    setDir.addEventListener("input", () => {
        const inputValue = setDir;
        changeDir(inputValue);
    });
});
const shuffleArray = (array) => {
    const elementsArray = Array.from(array);
    console.log(array);
    console.log(elementsArray);
    for (let i = elementsArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [elementsArray[i], elementsArray[j]] = [
            elementsArray[j],
            elementsArray[i],
        ];
    }
    console.log(elementsArray);
    orderList.innerHTML = "";
    for (let i = 0; i < 4; i++) {
        console.log(elementsArray[i]);
        const liElement = document.createElement("li");
        liElement.classList.add(`li-n${i}`);
        liElement.appendChild(elementsArray[i]);
        orderList.appendChild(liElement);
    }
};
const changePosition = (nameCounter) => {
    const allLis = orderList.querySelectorAll("li");
    console.log(allLis);
    const randomNumber = Math.floor(Math.random() * (nameCounter - 1));
    orderList.appendChild(allLis[randomNumber]);
};
const elements = document.querySelectorAll(".my-elements");
submitBtn?.addEventListener("click", () => {
    inputNames.forEach((inputName) => {
        const nameValue = inputName;
        console.log(nameValue.value);
    });
    console.log("---------");
    ListOfNames = [];
    let nameCounter = 0;
    for (let i = 0; i < 4; i++) {
        const inputName = inputNames[i];
        if (inputName.value) {
            nameCounter++;
            console.log(inputName.value);
            ListOfNames.push(inputName.value);
        }
    }
    for (let i = 0; i < ListOfNames.length; i++) {
        const outputName = outputNames[i];
        outputName.value = ListOfNames[i];
        outputName.style.opacity = "1";
        changeDir(outputName);
    }
    for (let i = ListOfNames.length; i < 4; i++) {
        const outputName = outputNames[i];
        outputName.value = "";
        outputName.style.opacity = "0.5";
    }
    const allLis = orderList.querySelectorAll("li");
    for (let i = nameCounter; i < allLis.length; i++) {
        allLis[i].remove();
    }
    const numberOfIterations = nameCounter * 5 + Math.floor(Math.random() * 2);
    for (let i = 0; i < numberOfIterations; i++) {
        setTimeout(() => {
            changePosition(nameCounter);
        }, i * 300);
    }
});
const glHf = document.querySelector(".gl-hf");
glHf.addEventListener("click", () => {
    glHf.textContent = "Good Luck, Have Fun :)";
});
//# sourceMappingURL=index.js.map