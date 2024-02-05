"use strict";
const customScaleDiv = document.querySelector(".custom-scale-div");
const customScaleCalc = () => {
    const pageWidth = document.body.scrollWidth;
    const pageHeight = document.body.scrollHeight;
    if (pageWidth < pageHeight) {
        const scaleValue = (0.975 * pageWidth) / 903.5;
        customScaleDiv.style.transform = `scale(${scaleValue})`;
        customScaleDiv.style.display = "block";
    }
    else {
        const scaleValue = (0.975 * pageHeight) / 695;
        customScaleDiv.style.transform = `scale(${scaleValue})`;
        customScaleDiv.style.display = "block";
    }
};
customScaleCalc();
window.addEventListener("resize", customScaleCalc);
//# sourceMappingURL=customScaleCalc.js.map