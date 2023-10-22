function doSum(event) {
    event.preventDefault();

    console.log("function is running");

    let firstNumber = document.querySelector("#firstNumber").value;
    let secondNumber = document.querySelector("#secondNumber").value;

    console.log(firstNumber)
    console.log(secondNumber)
    let result= Number(firstNumber) + Number(secondNumber);
    console.log (result);
    let resultMessage=
    `the sum of ${firstNumber} and ${secondNumber} = ${result}`;
    document.querySelector("#resultWindow").innerHTML = resultMessage;
}