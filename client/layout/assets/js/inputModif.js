// INPUT MODIFICATION ON CARD PAGE

function inputModify(inputSelector, minusSelector, plusSelector) {
    const input = document.querySelector(inputSelector),
          minus = document.querySelector(minusSelector),
          plus = document.querySelector(plusSelector);
          
    plus.addEventListener('click', () => {
        input.value++;
    });
    minus.addEventListener('click', () => {
        input.value--;
        if(input.value <= 1) {
            input.value = 1;
        }
    });
}

export default inputModify;

// END INPUT MODIFICATION ON CARD PAGE 
