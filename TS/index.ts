const setDirs = document.querySelectorAll(".set-dir") as NodeListOf<Element>;
const submitBtn = document.querySelector(".arrow-btn") as HTMLElement;
const orderList = document.querySelector(".order-list") as HTMLElement;
const inputNames = document.querySelectorAll(
    ".input-name"
) as NodeListOf<Element>;
const outputNames = document.querySelectorAll(
    ".output-name"
) as NodeListOf<Element>;

let ListOfNames: string[] = [];

(inputNames[0] as HTMLInputElement).value = "1";
(inputNames[1] as HTMLInputElement).value = "2";
(inputNames[2] as HTMLInputElement).value = "3";
(inputNames[3] as HTMLInputElement).value = "4";

const changeDir = (HTMLValue: HTMLInputElement) => {
    if (/^[a-zA-Z]/.test(HTMLValue.value)) {
        HTMLValue.style.direction = "ltr";
        console.log("ENG");
    } else {
        HTMLValue.style.direction = "rtl";
        console.log("PER");
    }
};

setDirs.forEach((setDir) => {
    setDir.addEventListener("input", () => {
        const inputValue = setDir as HTMLInputElement;

        changeDir(inputValue);
    });
});

// console.log(setDirs);

// const shuffleArray = (array: NodeListOf<Element>) => {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
// };

const shuffleArray = (array: NodeListOf<Element>) => {
    // Convert NodeList to an array
    const elementsArray: Element[] = Array.from(array);

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

const changePosition = (nameCounter: number) => {
    const allLis = orderList.querySelectorAll("li");
    console.log(allLis);

    const randomNumber = Math.floor(Math.random() * (nameCounter - 1));

    orderList.appendChild(allLis[randomNumber]);
};

const elements: NodeListOf<Element> = document.querySelectorAll(".my-elements");
// shuffleArray(elements);

submitBtn?.addEventListener("click", () => {
    inputNames.forEach((inputName) => {
        const nameValue = inputName as HTMLInputElement;
        console.log(nameValue.value);
    });

    console.log("---------");
    ListOfNames = [];

    let nameCounter = 0;

    for (let i = 0; i < 4; i++) {
        const inputName = inputNames[i] as HTMLInputElement;
        if (inputName.value) {
            nameCounter++;
            console.log(inputName.value);
            ListOfNames.push(inputName.value);
        }
    }

    for (let i = 0; i < ListOfNames.length; i++) {
        const outputName = outputNames[i] as HTMLInputElement;
        outputName.value = ListOfNames[i];
        outputName.style.opacity = "1";
        changeDir(outputName);
    }

    for (let i = ListOfNames.length; i < 4; i++) {
        const outputName = outputNames[i] as HTMLInputElement;

        outputName.value = "";
        outputName.style.opacity = "0.5";
    }

    // shuffleArray(outputNames);

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

    // const allLis = orderList.querySelectorAll("li");

    // for (let i = 0; i < 4; i++) {
    //     if (
    //         (allLis[i].querySelector("input") as HTMLElement).style.opacity ===
    //         "0.5"
    //     ) {
    //         orderList.appendChild(allLis[i]);
    //         console.log("LLL", i);
    //     }
    // }
});

const glHf = document.querySelector(".gl-hf") as HTMLElement;
glHf.addEventListener("click", () => {
    glHf.textContent = "Good Luck, Have Fun :)";
});
