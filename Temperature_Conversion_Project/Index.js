const textBox = document.getElementById(`textbox`);
const toFahrenheit = document.getElementById("fahrenheit");
const toCelsius = document.getElementById("celcius");
const result = document.getElementById(`result`);
let temp;

function convert(){
    if(toFahrenheit.checked){
        temp = Number(textBox.value);
        temp = ((temp*9)/5) + 32;
        result.textContent = temp.toFixed(1) + "°F";
    }
    else if(toCelsius.checked){
        temp = Number(textBox.value);
        temp = (temp - 32)*(5/9);
        result.textContent = temp.toFixed(1) + "°C";
    }
    else{
        result.textContent = "Please, select a unit";
    }
}