// console.log("Assignment Started!");

function getInputValue(inputId){
    const getInput = document.getElementById(inputId);
    const getInputText = getInput.value;
    const inputAmount = parseFloat(getInputText);
    return inputAmount;
}

document.getElementById('calculate').addEventListener('click', function(){
    const income = getInputValue('income');
    console.log(income);
})