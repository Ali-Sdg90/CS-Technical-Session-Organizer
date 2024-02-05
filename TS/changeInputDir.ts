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
