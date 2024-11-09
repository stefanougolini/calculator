const padElement = document.querySelector("#pad");
const displayElement = document.querySelector("#display");
padElement.addEventListener('click', onButtonClick);
let operandHasBeenPressed = false;
let equalsHasBeenPressed = false;
let pointHasBeenPressed = false;
let lastPressedIsNumber = false;
let firstaddend;
let firstsubtr;
let firstmultip;
let firstdivid;
let secondOperand;

function onButtonClick(event) {




    switch(event.target.id) {

        case "pad1": toDisplay(1);equalsHasBeenPressed = false; lastPressedIsNumber=true; break;
        case "pad2": toDisplay(2);equalsHasBeenPressed = false; lastPressedIsNumber=true; break;
        case "pad3": toDisplay(3);equalsHasBeenPressed = false; lastPressedIsNumber=true; break;
        case "pad4": toDisplay(4);equalsHasBeenPressed = false; lastPressedIsNumber=true; break;
        case "pad5": toDisplay(5);equalsHasBeenPressed = false; lastPressedIsNumber=true; break;
        case "pad6": toDisplay(6);equalsHasBeenPressed = false; lastPressedIsNumber=true; break;
        case "pad7": toDisplay(7);equalsHasBeenPressed = false; lastPressedIsNumber=true; break;
        case "pad8": toDisplay(8);equalsHasBeenPressed = false; lastPressedIsNumber=true; break;
        case "pad9": toDisplay(9);equalsHasBeenPressed = false; lastPressedIsNumber=true; break;
        case "pad0": toDisplay(0);equalsHasBeenPressed = false; lastPressedIsNumber=true; break;
        case "padpoint": toDisplay("."); pointHasBeenPressed = true; equalsHasBeenPressed = false; lastPressedIsNumber=true; break;
        case "padplus": 
            pointHasBeenPressed = false;
            if(operandHasBeenPressed){
                console.log(firstaddend);
                secondOperand = parseFloat(displayElement.textContent);
                firstaddend = operate(whichOperandPressed, firstaddend, secondOperand);
                whichOperandPressed = "plus";

                lastPressedIsNumber=false;
                break;

        } else {
            firstaddend = parseFloat(displayElement.textContent);
            console.log(firstaddend);
            operandHasBeenPressed = true;
            equalsHasBeenPressed = false;

            whichOperandPressed = "plus";
            lastPressedIsNumber=false;
            break;
        }

            
        case "padminus": 
            pointHasBeenPressed = false;
            if(operandHasBeenPressed){
                console.log(firstaddend);
                secondOperand = parseFloat(displayElement.textContent);
                firstaddend = operate(whichOperandPressed, firstaddend, secondOperand);
                whichOperandPressed = "minus";
                lastPressedIsNumber=false;


            break;

        } else {
            firstaddend = parseFloat(displayElement.textContent);

            operandHasBeenPressed = true;
            equalsHasBeenPressed = false;

            whichOperandPressed = "minus";
            lastPressedIsNumber=false;
            break;
        }


        case "padmult": 
            pointHasBeenPressed = false;
            if(operandHasBeenPressed){
                console.log(firstaddend);
                secondOperand = parseFloat(displayElement.textContent);
                firstaddend = operate(whichOperandPressed, firstaddend, secondOperand);
                whichOperandPressed = "multiply";
                lastPressedIsNumber=false;


            break;

        } else {
            firstaddend = parseFloat(displayElement.textContent);

            operandHasBeenPressed = true;
            equalsHasBeenPressed = false;

            whichOperandPressed = "multiply";
            lastPressedIsNumber=false;
            break; 
        }   

        case "paddivis": 
            pointHasBeenPressed = false;
            if(operandHasBeenPressed){
                console.log(firstaddend);
                secondOperand = parseFloat(displayElement.textContent);
                firstaddend = operate(whichOperandPressed, firstaddend, secondOperand);
                whichOperandPressed = "divide";
                lastPressedIsNumber=false;


                break;

            } else {
            firstaddend = parseFloat(displayElement.textContent);

            operandHasBeenPressed = true;
            equalsHasBeenPressed = false;
            whichOperandPressed = "divide";
            lastPressedIsNumber=false;
            break; 
            }
            
        case "padclear":
            displayElement.textContent = "";
            operandHasBeenPressed = false;
            equalsHasBeenPressed = false;
            pointHasBeenPressed = false;
            lastPressedIsNumber=false;
            break;


        case "padEq":
            pointHasBeenPressed = false;
            secondOperand = parseFloat(displayElement.textContent);
            let result;
            switch(whichOperandPressed){
                case "plus": result = firstaddend + secondOperand; console.log(firstaddend, secondOperand, result); displayElement.textContent = result; equalsHasBeenPressed = true; operandHasBeenPressed = false; break;
                case "minus": result = firstaddend - secondOperand; displayElement.textContent = result; equalsHasBeenPressed = true; operandHasBeenPressed = false; break;
                case "multiply": result = firstaddend * secondOperand; displayElement.textContent = result; equalsHasBeenPressed = true; operandHasBeenPressed = false; break;
                case "divide": result = firstaddend / secondOperand; displayElement.textContent = result; equalsHasBeenPressed = true; operandHasBeenPressed = false; break;

            }
            lastPressedIsNumber=false;
            break;
    }

}


function operate(sign, firstaddend, secondOperand) {
    let result;
    switch(sign){
        case "plus": result = firstaddend + secondOperand; console.log(firstaddend, secondOperand, result); displayElement.textContent = result; break;
        case "minus": result = firstaddend - secondOperand; displayElement.textContent = result; break;
        case "multiply": result = firstaddend * secondOperand; displayElement.textContent = result; break;
        case "divide": result = firstaddend / secondOperand; displayElement.textContent = result; break;

    }

    return result;
}


function toDisplay(number) {

    if(equalsHasBeenPressed) {
        operandHasBeenPressed = false;
        let current = "";
        displayElement.textContent = current + number;
        console.log(current+number);
        return;

    }

    if(lastPressedIsNumber) {

        let current = displayElement.textContent;
        displayElement.textContent = current + number;



    } else if(!lastPressedIsNumber) {


        let current = "";
        displayElement.textContent = current + number;
        console.log(current+number);

    }

}
