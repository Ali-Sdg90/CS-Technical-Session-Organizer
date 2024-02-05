"use strict";
let ListOfNames = [];
const changePosition = (nameCounter) => {
    const allLis = orderList.querySelectorAll("li");
    console.log(allLis);
    const randomNumber = Math.floor(Math.random() * (nameCounter - 1));
    orderList.appendChild(allLis[randomNumber]);
};
const resetOrderList = () => {
    orderList.innerHTML = `
    <li class="li-n1">
        <input
            type="text"
            class="attendees-input output-name set-dir"
            disabled
        />
    </li>
    <li class="li-n2">
        <input
            type="text"
            class="attendees-input output-name set-dir"
            disabled
        />
    </li>
    <li class="li-n3">
        <input
            type="text"
            class="attendees-input output-name set-dir"
            disabled
        />
    </li>
    <li class="li-n4">
        <input
            type="text"
            class="attendees-input output-name set-dir"
            disabled
        />
    </li>
    `;
    console.log("RESET");
};
submitBtn.addEventListener("click", () => {
    if (orderList.querySelectorAll(".output-name").length !== 4) {
        resetOrderList();
    }
    const outputNames = document.querySelectorAll(".output-name");
    inputNames.forEach((inputName) => {
        const nameValue = inputName;
        console.log(nameValue.value);
    });
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
    setTimeout(() => {
        const numberOfIterations = nameCounter * 5 + Math.floor(Math.random() * 2);
        for (let i = 0; i < numberOfIterations; i++) {
            setTimeout(() => {
                changePosition(nameCounter);
            }, i * 300);
        }
    }, 750);
});
//# sourceMappingURL=submitHandler.js.map