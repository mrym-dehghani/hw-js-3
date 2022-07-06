const leftHand = +prompt("left hand number");
const operator = prompt("operator");
const rightHand = +prompt("right hand number");
let result = 0;

console.log(leftHand)
console.log(operator)
console.log(rightHand)

const calculator = {

    justForthis: function () {
        console.log(this);
        },

    addition : function () {
        result = leftHand + rightHand
        console.log(result)

    },
    subtraction : function () {
        result = leftHand - rightHand
        console.log(result)

    },
    multiplication : function () {
        result = leftHand * rightHand
        console.log(result)

    },
    division : function () {
        result = leftHand / rightHand
        console.log(result)

    },

    input : function (){
        switch (operator) {
            case "+":
                this.addition
                break;
             case "-":
                this.subtraction
                break;
             case "*":
                this.multiplication
                break;
             case "/":
                this.division
                break;
             default : 000
                break;
        }
    }
}

calculator ["addition"]();
calculator ["subtraction"]();
calculator ["multiplication"]();
calculator ["division"]();
calculator.input()
