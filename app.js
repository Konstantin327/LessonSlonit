const hiddenNumber = 42;                                      // Hidden number

function randomValue(){                                       // Function wich generating random number 0 to 100
    let res = Math.floor(Math.random() * 101);
    return res
}

function chek(hiddenNumber){
    let max_res = 100;  // init. variable Upper limit
    let min_res = 0;    // init. variable Low limit
    let res = null;     // init variable Random number
    let state = true;   // flag true/false
    res = randomValue();
    while (state){
        if (res > hiddenNumber){                                                                      // Chek if current number > Hidden number
            max_res = res;                                                                            // In variable Upper limit assign current number
            console.log('Компьютер 2: ' + res + "  MAX: " + max_res + "  Min: " + min_res );
            console.log('Компьютер 1: Меньше \n');
            res = (res - Math.floor(((max_res) - min_res) / 2));                                       // Calculating the middle number 
        }else if(res < hiddenNumber){                                                                  // Chek if current number < Hidden number
            min_res = res;                                                                             // In variable Lower limit assign current number
            console.log('Компьютер 2: ' + res + "  MAX: " + max_res + "  Min: " + min_res );
            console.log('Компьютер 1: Больше \n');
            res = Math.floor(((max_res - min_res) / 2) + min_res);                                     // Calculating the middle number
        }else if(res === hiddenNumber){
            console.log('Компьютер 2: ' + res);
            console.log("Компьютер 1: УРА");
            state = false;                                                                             // if current number = hidden number, exit cycle
        }
    }
}

chek(hiddenNumber);                                                                                     // Call func