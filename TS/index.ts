const setDirs = document.querySelectorAll(".set-dir") as NodeListOf<Element>;
const submitBtn = document.querySelector(".arrow-btn") as HTMLElement;
const orderList = document.querySelector(".order-list") as HTMLElement;
const demoNames = document.querySelector(".add-demo-names") as HTMLElement;
const inputNames = document.querySelectorAll(
    ".input-name"
) as NodeListOf<Element>;

let ListOfNames: string[] = [];

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

const changePosition = (nameCounter: number) => {
    const allLis = orderList.querySelectorAll("li");
    console.log(allLis);

    const randomNumber = Math.floor(Math.random() * (nameCounter - 1));

    orderList.appendChild(allLis[randomNumber]);
};

const elements: NodeListOf<Element> = document.querySelectorAll(".my-elements");

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

const submitActions = () => {};

submitBtn.addEventListener("click", () => {
    if (orderList.querySelectorAll(".output-name").length !== 4) {
        resetOrderList();
    }

    const outputNames = document.querySelectorAll(
        ".output-name"
    ) as NodeListOf<Element>;

    inputNames.forEach((inputName) => {
        const nameValue = inputName as HTMLInputElement;
        console.log(nameValue.value);
    });

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

    const allLis = orderList.querySelectorAll("li");

    for (let i = nameCounter; i < allLis.length; i++) {
        allLis[i].remove();
    }

    setTimeout(() => {
        const numberOfIterations =
            nameCounter * 5 + Math.floor(Math.random() * 2);

        for (let i = 0; i < numberOfIterations; i++) {
            setTimeout(() => {
                changePosition(nameCounter);
            }, i * 300);
        }
    }, 750);
});

const glHf = document.querySelector(".gl-hf") as HTMLElement;
glHf.addEventListener("click", () => {
    glHf.textContent = "Good Luck, Have Fun :)";
});

const addDemoNames = () => {
    (inputNames[0] as HTMLInputElement).value = "Ali";
    (inputNames[1] as HTMLInputElement).value = "Saba";
    (inputNames[2] as HTMLInputElement).value = "Amir";
    (inputNames[3] as HTMLInputElement).value = "Zahra";
};

demoNames.addEventListener("click", () => {
    addDemoNames();
});

addDemoNames();
