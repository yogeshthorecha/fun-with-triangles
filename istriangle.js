const isTriangleBtn = document.querySelector("#is-triangle");
const inputs = document.querySelectorAll(".angle");
const outputBox = document.querySelector("#output-box");

function calculateSumOfAngles() {
    var sum = 0;
    for(var i=0;i<inputs.length;i++){
        sum = sum + Number(inputs[i].value);
    }
    return sum;
}





isTriangleBtn.addEventListener('click',function(){
    var sum = calculateSumOfAngles();
    if(sum === 180){
        outputBox.innerText = "yes! this angles make a triangle";
    }
    else outputBox.innerText = "No! this angles cannot make a triangle";
})