

const firstSide = document.querySelector("#first-side");
const secondSide = document.querySelector("#second-side");
const thirdSide = document.querySelector("#third-side");
const calculate = document.querySelector("#calculate-area-btn");
const output = document.querySelector("#output-box");

function calculateArea() {

  const firstSideValue = Number(firstSide.value);
  const secondSideValue = Number(secondSide.value);
  const thirdSideValue = Number(thirdSide.value);

  if (
    firstSideValue + secondSideValue > thirdSideValue &&
    secondSideValue + thirdSideValue > firstSideValue &&
    firstSideValue + thirdSideValue > secondSideValue
  ) {
    const semiPerimeter =
      (firstSideValue + secondSideValue + thirdSideValue) / 2;

    const result = Math.sqrt(
      semiPerimeter *
        (semiPerimeter - firstSideValue) *
        (semiPerimeter - secondSideValue) *
        (semiPerimeter - thirdSideValue)
    );
    output.innerText = "Area of a trianglev is " + result +" units";
  } else {
    output.innerText = "Enter valid side lengths such that each side lengths";
  }
}

calculate.addEventListener("click", calculateArea);