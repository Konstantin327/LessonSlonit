const hiddenNumber = 0;                                      // Hidden number

function randomValue(){                                       // Function wich generating random number 0 to 100
    let res = Math.floor(Math.random() * 101);
    return res
}

function chek(hiddenNumber){
    let max_res = 101;  // init. variable Upper limit
    let min_res = -1;    // init. variable Low limit
    let currentNum = null;     // init variable Random number
    let state = true;   // flag true/false
    currentNum = randomValue();
    while (state){
        if (currentNum > hiddenNumber){                                                                      // Chek if current number > Hidden number
            max_res = currentNum;                                                                            // In variable Upper limit assign current number
            console.log('Компьютер 2: ' + currentNum);
            console.log('Компьютер 1: Меньше \n');
            currentNum = (currentNum - Math.floor(((max_res) - min_res) / 2));                                       // Calculating the middle number 
        }else if(currentNum < hiddenNumber){                                                                  // Chek if current number < Hidden number
            min_res = currentNum;                                                                             // In variable Lower limit assign current number
            console.log('Компьютер 2: ' + currentNum);
            console.log('Компьютер 1: Больше \n');
            currentNum = Math.floor(((max_res - min_res) / 2) + min_res);                                     // Calculating the middle number
        }else if(currentNum === hiddenNumber){
            console.log('Компьютер 2: ' + currentNum);
            console.log("Компьютер 1: УРА");
            state = false;                                                                             // if current number = hidden number, exit cycle
        }
    }
}

chek(hiddenNumber);                                                                                     // Call func