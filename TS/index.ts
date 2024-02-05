const setDirs = document.querySelectorAll(".set-dir") as NodeListOf<Element>;
const demoNames = document.querySelector(".add-demo-names") as HTMLElement;
const orderList = document.querySelector(".order-list") as HTMLElement;
const submitBtn = document.querySelector(".arrow-btn") as HTMLElement;
const glHf = document.querySelector(".gl-hf") as HTMLElement;
const inputNames = document.querySelectorAll(
    ".input-name"
) as NodeListOf<Element>;

glHf.addEventListener("click", () => {
    glHf.textContent = "Good Luck, Have Fun :)";
});

const addDemoNames = () => {
    (inputNames[0] as HTMLInputElement).value = "Ali";
    (inputNames[1] as HTMLInputElement).value = "Saba";
    (inputNames[2] as HTMLInputElement).value = "Amir";
    (inputNames[3] as HTMLInputElement).value = "Zahra";
};

// addDemoNames();
demoNames.addEventListener("click", () => {
    addDemoNames();
});
