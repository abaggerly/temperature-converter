function convertToCelcius(fTemp) {
    const tempC = (fTemp - 32) * 5/9;
    return tempC;
}

   let userInput = prompt("Enter the temp in F to be converted to C. :", );
   tempConv = convertToCelcius(userInput);

   function describeTemperature(celsiusTemp){
    if(celsiusTemp >= 40){
        return "Very Hot";
    }else if(celsiusTemp < 40 && celsiusTemp > 30){
    return "hot";
    }else if(celsiusTemp < 30 && celsiusTemp > 20){
    return "warm";
    }else if(celsiusTemp < 20 && celsiusTemp > 10){
    return "cold";
    }else{
    return "very cold"
    }
    }
    alert("That converts to " + tempConv + " Celsius. " + describeTemperature(tempConv));
    