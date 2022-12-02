const form = document.querySelector(".quiz-form");
const submitBtn = document.querySelector("#submit-btn");
const outputBox = document.querySelector("#output-box");


const rightAnswers = ["90°","right angled"];

function calculateScores(){
    var score = 0;
    var index = 0;
    var formValues = new FormData(form);
    for(let value of formValues.values()){
        if(value == rightAnswers[index]){
            score = score + 1;
        }
        index = index + 1 ;
    }
    return score;
}

submitBtn.addEventListener('click',function(){
    var score = calculateScores();
    outputBox.innerText = "your score is " + score;
})