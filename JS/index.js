"use strict";
const setDirs = document.querySelectorAll(".set-dir");
const demoNames = document.querySelector(".add-demo-names");
const orderList = document.querySelector(".order-list");
const submitBtn = document.querySelector(".arrow-btn");
const glHf = document.querySelector(".gl-hf");
const inputNames = document.querySelectorAll(".input-name");
glHf.addEventListener("click", () => {
    glHf.textContent = "Good Luck, Have Fun :)";
});
const addDemoNames = () => {
    inputNames[0].value = "Ali";
    inputNames[1].value = "Saba";
    inputNames[2].value = "Amir";
    inputNames[3].value = "Zahra";
};
demoNames.addEventListener("click", () => {
    addDemoNames();
});
const ICARUSs = document.querySelectorAll(".ICARUS");
ICARUSs.forEach((ICARUS) => {
    ICARUS.addEventListener("click", () => {
        if (ICARUS.classList.contains("ICARUS")) {
            ICARUS.setAttribute("href", "https://also-ali-sdg90.github.io/ICARUS/");
            ICARUS.classList.remove("ICARUS");
            setTimeout(() => {
                ICARUS.removeAttribute("href");
            }, 0);
        }
    });
});
//# sourceMappingURL=index.js.map