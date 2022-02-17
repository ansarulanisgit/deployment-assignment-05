//Function for getting input value
function getInputValue(inputId, validationId){
    const getInput = document.getElementById(inputId);
    const getInputText = getInput.value;
    const inputAmount = parseFloat(getInputText);
    if(isNaN(inputAmount)){
        const errorText = document.getElementById(validationId);
        errorText.style.display = "block";
        
    }
    else if(inputAmount<0){
        const errorText = document.getElementById(validationId);
        errorText.style.display = "block";
        errorText.innerText = "Negative number is not acceptable."
       
    }
    else{
        const errorText = document.getElementById(validationId);
        errorText.style.display = "none";
        return inputAmount;
    }
    
}

//Function for making display block
function displayBlock(id){
    const element = document.getElementById(id);
    element.style.display = 'block';
}

//Function for making display none
function displayNone(id){
    const element = document.getElementById(id);
    element.style.display = 'none';
}


//function for set paragarap or span inner text
function setInnerText(fieldId, updateValue){
    const getTextField = document.getElementById(fieldId);
    getTextField.innerText = updateValue;
}


//Handing calculate button event, doing calculation and update text.
document.getElementById('calculate').addEventListener('click', function(){
    const income = getInputValue('income', 'income-error');
    const foodExpense = getInputValue('food', 'food-error');
    const rentExpense = getInputValue('rent', 'rent-error');
    const clothesExpense = getInputValue('clothes', 'clothes-error');    
    const totalExpense = foodExpense + rentExpense + clothesExpense;
    const balanceNumber = income- totalExpense;


    if(totalExpense>income){
        displayNone('income-expense-error');
        displayBlock('income-low-error');
        displayNone('details-part');
    }
    else if(isNaN(income) || isNaN(foodExpense) || isNaN(rentExpense) || isNaN(clothesExpense)){
        displayBlock('income-expense-error');
        displayNone('income-low-error');
        displayNone('details-part');
    }
    
    else{
        displayNone('income-low-error');
        displayNone('income-expense-error');
        displayBlock('details-part');
        setInnerText('total-expenses', totalExpense);
        setInnerText('balance', balanceNumber) 
        }     
    })


//Handing saving button and update the text
document.getElementById('save-button').addEventListener('click', function(){
    const getSavingInput = document.getElementById('save-percent');
    const savingInputValue = getSavingInput.value;
    const savingPercentage = parseFloat(savingInputValue);

    if(isNaN(savingPercentage)){
        displayBlock('save-error');
        displayNone('percentage-error');
        displayNone('saving-part');
    }
    else if(savingPercentage>100 || savingPercentage<0){
        displayNone('save-error');
        displayBlock('percentage-error');
        displayNone('saving-part');
    }
    else{
        displayNone('percentage-error');
        displayNone('save-error');
        displayBlock('saving-part');
        const getBalanceField = document.getElementById('balance');
        const getBalanceText = getBalanceField.innerText;
        const currentBalance = parseFloat(getBalanceText);
        const savingAmount = (currentBalance/100)*savingPercentage;
        const remainingBalance = currentBalance-savingAmount;
        setInnerText('saving-amount', savingAmount);
        setInnerText('remaining-balance', remainingBalance);
    }
})