// for triangle calculation
const triangleBase = document.getElementById("triangle-base");
const triangleHeight = document.getElementById("triangle-height");
const triangleCalculate = document.getElementById("triangle-calculate-button");


triangleCalculate.addEventListener('click', function(){
    const triangleBaseValue = triangleBase.value;
    const baseValue = parseFloat(triangleBaseValue);
    if(isNaN(baseValue) || baseValue < 0){
        return alert ("invalid input");
    }
    const triangleHeightValue = triangleHeight.value;
    const heightValue = parseFloat(triangleHeightValue);
    if(isNaN(heightValue) || heightValue < 0){
        return alert ("invalid input");
    }
    const areaValue = 0.5 * baseValue * heightValue;
    const areaValueSpan = document.getElementById("area-value");
    areaValueSpan.innerText = areaValue;

    const areaValueMobile = 0.5 * baseValue * heightValue;
    const areaValueSpanMobile = document.getElementById("area-value-mobile");
    areaValueSpanMobile.innerText = areaValueMobile;
}) 

// for rectangle calculation
const rectangleWidth = document.getElementById("rectangle-width");
const rectangleLength = document.getElementById("rectangle-length");
const rectangleCalculate = document.getElementById("rectangle-calculate-button");

rectangleCalculate.addEventListener('click', function(){
    const rectangleWidthValue = rectangleWidth.value;
    const widthValue = parseFloat(rectangleWidthValue);
    if(isNaN(widthValue) || widthValue < 0){
        return alert ("invalid input")
    }
    const rectangleLengthValue = rectangleLength.value;
    const lengthValue = parseFloat(rectangleLengthValue);
    if(isNaN(lengthValue) || lengthValue < 0){
        return alert ("invalid input");
    }
    const areaValue = widthValue * lengthValue;
    const areaValueSpan = document.getElementById("area-value");
    areaValueSpan.innerText = areaValue;

    const areaValueMobile = widthValue * lengthValue;
    const areaValueSpanMobile = document.getElementById("area-value-mobile");
    areaValueSpanMobile.innerText = areaValueMobile;
})


// for parallelogram calculation
const parallelogramBase = document.getElementById("parallelogram-base");
const parallelogramHeight = document.getElementById("parallelogram-height");
const parallelogramCalculate = document.getElementById("parallelogram-calculate-button");


parallelogramCalculate.addEventListener('click', function(){
    const parallelogramBaseValue = parallelogramBase.value;
    const baseValue = parseFloat(parallelogramBaseValue);
    if(isNaN(baseValue) || baseValue < 0){
        return alert ("invalid input");
    }
    const parallelogramHeightValue = parallelogramHeight.value;
    const heightValue = parseFloat(parallelogramHeightValue);
    if(isNaN(heightValue) || heightValue < 0){
        return alert ("invalid input");
    }
    const areaValue = baseValue * heightValue;
    const areaValueSpan = document.getElementById("area-value");
    areaValueSpan.innerText = areaValue;

    const areaValueMobile = baseValue * heightValue;
    const areaValueSpanMobile = document.getElementById("area-value-mobile");
    areaValueSpanMobile.innerText = areaValueMobile;
})    



// for rombus calculate button
const rhombusDiameterOne = document.getElementById("rhombus-diameter-one");
const rhombusDiameterTwo = document.getElementById("rhombus-diameter-two");
const rhombusCalculate = document.getElementById("rhombus-calculate-button");

rhombusCalculate.addEventListener('click', function(){
    const rhombusDiameterOneValue = rhombusDiameterOne.value;
    const diameterOneValue = parseFloat(rhombusDiameterOneValue);
    if(isNaN(diameterOneValue) || diameterOneValue < 0){
        return alert ("invalid input")
    }
    const rhombusDiameterTwoValue = rhombusDiameterTwo.value;
    const diameterTwoValue = parseFloat(rhombusDiameterTwoValue);
    if(isNaN(diameterTwoValue) || diameterTwoValue < 0){
        return alert ("invalid input");
    }
    const areaValue = diameterOneValue * diameterTwoValue;
    const areaValueSpan = document.getElementById("area-value-two");
    areaValueSpan.innerText = areaValue;

    const areaValueMobile = diameterOneValue * diameterTwoValue;
    const areaValueSpanMobile = document.getElementById("area-value-mobile");
    areaValueSpanMobile.innerText = areaValueMobile;
})


// for pentagon calculation
const pentagonperimeter = document.getElementById("pentagon-perimeter");
const pentagonApotheme = document.getElementById("pentagon-apotheme");
const pentagonCalculate = document.getElementById("pentagon-calculate-button");

pentagonCalculate.addEventListener('click', function(){
    const pentagonperimeterValue = pentagonperimeter.value;
    const perimeterValue = parseFloat(pentagonperimeterValue);
    if(isNaN(perimeterValue) || perimeterValue < 0){
        return alert ("invalid input")
    }
    const pentagonApothemeValue = pentagonApotheme.value;
    const ApothemeValue = parseFloat(pentagonApothemeValue);
    if(isNaN(ApothemeValue) || ApothemeValue < 0){
        return alert ("invalid input");
    }
    const areaValue = 0.5 * perimeterValue * ApothemeValue;
    const areaValueSpan = document.getElementById("area-value-two");
    areaValueSpan.innerText = areaValue;

    const areaValueMobile = 0.5 * perimeterValue * ApothemeValue;
    const areaValueSpanMobile = document.getElementById("area-value-mobile");
    areaValueSpanMobile.innerText = areaValueMobile;
})


// for ellisps calculation
const ellipseMajorDiameter = document.getElementById("ellipse-major-diameter");
const ellipseMinorDiameter = document.getElementById("ellipse-minor-diameter");
const ellipseCalculate = document.getElementById("ellipse-calculate-button");

ellipseCalculate.addEventListener('click', function(){
    const ellipseMajorDiameterValue = ellipseMajorDiameter.value;
    const majorDiameterValue = parseFloat(ellipseMajorDiameterValue);
    if(isNaN(majorDiameterValue) || majorDiameterValue < 0){
        return alert ("input invalid");
    }
    const ellipseMinorDiameterValue = ellipseMinorDiameter.value;
    const minorDiameterValue = parseFloat(ellipseMinorDiameterValue);
    if(isNaN(minorDiameterValue) || minorDiameterValue < 0){
        return alert ("input invalid");
    }
    const areaValue = 3.1416 * majorDiameterValue * minorDiameterValue;
    const areaValueSpan = document.getElementById("area-value-two");
    areaValueSpan.innerText = areaValue;

    const areaValueMobile = 3.1416 * majorDiameterValue * minorDiameterValue;
    const areaValueSpanMobile = document.getElementById("area-value-mobile");
    areaValueSpanMobile.innerText = areaValueMobile;
})