// Create and connect an index.js file to index.html.

// Write a function named convertToCelsius which takes a temperature in Fahrenheit and returns the equivalent temperature in Celsius.

function convertToCelcius(fTemp) {
    const tempC = (fTemp - 32) * 5/9;
    return tempC;
}

// Write a function named describeTemperature which takes a temperature in Fahrenheit and returns a description according to this table:
 // Prompt the user to provide a temperature in Fahrenheit. // 
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
   //Then, alert them with a message that tells them the equivalent temperature in Celsius alongside a description of what that temperature would feel like.
    alert("That converts to " + tempConv + " Celsius. " + describeTemperature(tempConv));
