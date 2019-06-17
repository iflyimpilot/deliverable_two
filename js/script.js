var eventType = prompt("What type of event are you attending?","Casual?  Semi-formal?  Formal?");

var tempFahr = prompt("What is today's temperature?","Enter today's temperature.");
console.log(tempFahr + " degrees Fahrenheit.");

var result = ("It is " + tempFahr + " degrees and you are going to a " + eventType + " event. ");


//What to wear based on Event
if (eventType === "Casual") {
	result = result + "Wear something comfy "
console.log("Wear something comfy.");
} else if (eventType === "Semi-formal") {
	result = result + "Wear a polo "
console.log("Wear a polo.");
} else if (eventType === "Formal") {
	result = result + "Wear a suit "
console.log("Wear a suit.");
}






//What to wear based on Temperature
if (tempFahr < 54) {
console.log ("Wear a coat.");
	result = result + "and a coat. "
console.log (result);

} else if (tempFahr <= 54 || tempFahr <= 70) {
console.log ("Wear a jacket.");
	result = result + "and a jacket. "
console.log (result);
} else if (tempFahr >= 70) {
console.log ("Wear no jacket.");
	result = result + "and no jacket. "
}


console.log(result)
document.getElementById("result").innerHTML = result
