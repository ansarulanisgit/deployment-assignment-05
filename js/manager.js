
function getInputValue(inputId, validationId){
    const getInput = document.getElementById(inputId);
    const getInputText = getInput.value;
    const inputAmount = parseFloat(getInputText);
    if(isNaN(inputAmount) || inputAmount<0){
        const errorText = document.getElementById(validationId);
        errorText.style.display = "block";
        return false;
    }
    else{
        const errorText = document.getElementById(validationId);
        errorText.style.display = "none";
        return inputAmount;
    }
    
}

function displayBlock(id){
    const element = document.getElementById(id);
    element.style.display = 'block';
}

function displayNone(id){
    const element = document.getElementById(id);
    element.style.display = 'none';
}

function setInnerText(fieldId, updateValue){
    const getTextField = document.getElementById(fieldId);
    getTextField.innerText = updateValue;
}

document.getElementById('calculate').addEventListener('click', function(){
    const income = getInputValue('income', 'income-error');
    const foodExpense = getInputValue('food', 'food-error');
    const rentExpense = getInputValue('rent', 'rent-error');
    const clothesExpense = getInputValue('clothes', 'clothes-error');    
    const totalExpense = foodExpense + rentExpense + clothesExpense;

    if(typeof(income) != "boolean" && typeof(foodExpense) != "boolean" && typeof(rentExpense) != "boolean" && typeof(clothesExpense) != "boolean"){
    
     if(income<totalExpense){       
        displayBlock('income-expense-error');
        displayNone('details-part');
    }
    else{
        displayNone('income-expense-error');
        displayBlock('details-part');
        setInnerText('total-expenses', totalExpense);
        setInnerText('balance', income-totalExpense) 
        } 
    }
    else{
        displayBlock('income-expense-error');
        displayNone('details-part');
    }
    })

document.getElementById('save-button').addEventListener('click', function(){
    const savePercentage = getInputValue('save-percent', 'save-error');
    if(savePercentage>100){
        displayBlock('percentage-error');
    }
    else{
        displayNone('percentage-error');
        const getBalanceField = document.getElementById('balance');
        const getBalanceText = getBalanceField.innerText;
        const currentBalance = parseFloat(getBalanceText);
        const savingAmount = (currentBalance/100)*savePercentage;
        const remainingBalance = currentBalance-savingAmount;
        setInnerText('saving-amount', savingAmount);
        setInnerText('remaining-balance', remainingBalance);

        console.log(savingAmount);
        console.log(remainingBalance);


    }
})