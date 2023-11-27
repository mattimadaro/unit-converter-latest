/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const oneMeter = 3.281
const oneLiter = 0.264
const oneKg = 2.204

let inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

convertBtn.addEventListener("click", function(){
    convert(oneMeter, lengthEl, "feet", "meters")
    convert(oneLiter, volumeEl, "gallons", "liters")
    convert(oneKg, massEl, "pounds", "kilos")
})
   
function convert(conversionValue, unit, imperialUnit, metricUnit){
    let imperialValue = (inputEl.value * conversionValue).toFixed(3)
    let metricValue = (inputEl.value / conversionValue).toFixed(3)
    
    unit.textContent = `${inputEl.value} ${metricUnit} = ${imperialValue} ${imperialUnit} | ${inputEl.value} ${imperialUnit} = ${metricValue} ${metricUnit}`
}
