const decrease = document.getElementById(`decrease`);
const increase = document.getElementById(`increase`);
const reset = document.getElementById(`reset`);
const label = document.getElementById(`countlabel`);
let count = 0;

decrease.onclick = function(){
    count--;
    label.textContent = count;//sets the text within an element
}

increase.onclick = function(){
    count++;
    label.textContent = count; 
}

reset.onclick = function(){
    count = 0;
    label.textContent = count;
}