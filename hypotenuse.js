const sides = document.querySelectorAll(".side-input");
const submitBtn = document.querySelector("#submit-btn");
const outputBox = document.querySelector("#output-box");



function calculateSumOfSquares(){
    var sumOfSquares = 0;
    for(let side of sides.values())
    {
        sumOfSquares = sumOfSquares + (side.value*side.value);
    }
    return sumOfSquares;
}
   
function calculateHypotenuse (){
    if(sides[0].value && sides[1].value){
    var sumOfSquares=calculateSumOfSquares();
    var lengthOfHypotenuse =  Math.sqrt(sumOfSquares);
    outputBox.innerText = "The length of Hypotenuse is " + lengthOfHypotenuse.toFixed(2);
    }
    else{
        outputBox.innerText = "please enter both the fields";
    }
}

submitBtn.addEventListener('click', calculateHypotenuse)
