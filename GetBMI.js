
let heightMeters = 1;
let heightCm = 80;
let weight = 68;

var getBMI = (heightInMeters,heightInCm,weightKg) => {
    let totalHeight = (heightInMeters + (heightInCm/100))

    let BMI = (weightKg / (totalHeight * totalHeight))

    return BMI.toFixed(1);
}

var wieghtRange = (BMI) => {
    if(BMI < 18.5){
        console.log("You're in the underweight range");
    }
    else if(BMI > 18.5 && BMI < 24.9){
        console.log("You're in the healthy weight range");
    }
    else if(BMI > 25 && BMI < 29.9){
        console.log("You're in the overweight range");
    }
    else if (BMI > 30 && BMI < 39.9){
        console.log("You're in the obese range");
    }
    else if(BMI > 30){
        console.log("You're in the severely obese range");
    }
}


var outcomeBMI = getBMI(heightMeters,heightCm,weight);
wieghtRange(outcomeBMI);