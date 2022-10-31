/**********
 * DATA *
 **********/

let sixes = [];
let doubleSixes = [];
let twelves = [];
let twenties = [];

/********************
 * HELPER FUNCTIONS *
********************/

let getRandomNumber = function(max) {
    let rand = Math.random();
    let range = rand * max;
    let result = Math.ceil(range);
    return result;
}

/*******************
 * YOUR CODE BELOW *
 *******************/
//reset (button)

let resetButton = document.querySelector('#reset-button');

//d6-roll (img)
let imageD6 =  document.querySelector('#d6-roll');
let meanD6 = document.querySelector('#d6-rolls-mean');
let medianD6 = document.querySelector('#d6-rolls-median');
let modeD6 = document.querySelector('#d6-rolls-mode');

//double-d6
let imageDoubleD6_1 = document.querySelector('#double-d6-roll-1');
let imageDoubleD6_2 = document.querySelector('#double-d6-roll-2');
let meanDoubleD6 = document.querySelector('#double-d6-rolls-mean');
let medianDoubleD6 = document.querySelector('#double-d6-rolls-median');
let modeDoubleD6 = document.querySelector('#double-d6-rolls-mode');

//d12-roll
let imageD12 = document.querySelector('#d12-roll');
let meanD12 = document.querySelector('#d12-rolls-mean');
let medianD12 = document.querySelector('#d12-rolls-median');
let modeD12 = document.querySelector('#d12-rolls-mode');

//d20-roll
let imageD20 = document.querySelector('#d20-roll');
let meanD20 = document.querySelector('#d20-rolls-mean');
let medianD20 = document.querySelector('#d20-rolls-median');
let modeD20 = document.querySelector('#d20-rolls-mode');

/*******************
 * EVENT LISTENERS *
 *******************/

imageD6.addEventListener('click', function(){
    console.log('D6 clicked');
    d6RollFunction();
});

imageDoubleD6_1.addEventListener('click', function(){
    console.log('DoubleD6 clicked');
    doubleD6RollFunction();
    
})

imageDoubleD6_2.addEventListener('click', function(){
    console.log('DoubleD6 clicked');
    doubleD6RollFunction();
})

imageD12.addEventListener('click', function(){
    console.log('D12 clicked');
    d12RollFunction();
});

imageD20.addEventListener('click', function(){
    console.log('D20 clicked');
    d20RollFunction();
});

resetButton.addEventListener('click', function(){
    console.log('Reset clicked');
    reset();
});


/******************
 * RESET FUNCTION *
 ******************/

//empty global arrays
function reset(){
    sixes = [];
    doubleSixes = [];
    twelves = [];
    twenties = [];
//reset images
//images/start/d6.png
imageD6.src = './images/start/d6.png';
imageDoubleD6_1.src = './images/start/d6.png';
imageDoubleD6_2.src = './images/start/d6.png';
imageD12.src = './images/start/d12.jpeg';
imageD20.src='./images/start/d20.jpg';



//change text mean total
meanD6.innerText =  "N/A";
meanDoubleD6.innerText = "N/A";
meanD12.innerText = "N/A";
meanD20.innerText = "N/A";

//change text median total
medianD6.innerText = "N/A";
medianDoubleD6.innerText = "N/A";
medianD12.innerText = "N/A";
medianD20.innerText = "N/A";

//change text mode total
modeD6.innerText = "N/A";
modeDoubleD6.innerText = "N/A";
modeD12.innerText = "N/A";
modeD20.innerText = "N/A";
}

reset();
/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/
function d6RollFunction(){
    let result = getRandomNumber(6);
    console.log(`Rolled: ${result}`);

    imageD6.src = `./images/d6/${result}.png`;
    sixes.push(result);
    console.log(sixes);
    
    meanD6.innerText = getMean(sixes).toFixed(2);
    medianD6.innerText = getMedian(sixes);
    modeD6.innerText = getMode(sixes);

}


function doubleD6RollFunction(){
    let result1 = getRandomNumber(6);
    let result2 = getRandomNumber(6);
    console.log(`Rolled: ${result1}`);
    console.log(`Rolled: ${result2}`);

    imageDoubleD6_1.src = `./images/d6/${result1}.png`;
    imageDoubleD6_2.src = `./images/d6/${result2}.png`;
    doubleSixes.push(result1 + result2);
    console.log(doubleSixes);

    meanDoubleD6.innerText = getMean(doubleSixes).toFixed(2);
    medianDoubleD6.innerText = getMedian(doubleSixes);
    modeDoubleD6.innerText = getMode(doubleSixes);

}


function d12RollFunction(){
    let result = getRandomNumber(12);
    console.log(`Rolled: ${result}`);

    imageD12.src = `./images/numbers/${result}.png`;
    twelves.push(result);
    console.log(twelves);
    
    meanD12.innerText = getMean(twelves).toFixed(2);
    medianD12.innerText = getMedian(twelves);
    modeD12.innerText = getMode(twelves);

}



function d20RollFunction(){
    let result = getRandomNumber(20);
    console.log(`Rolled: ${result}`);

    imageD20.src = `./images/numbers/${result}.png`;
    twenties.push(result);
    console.log(twenties);

    meanD20.innerText = getMean(twenties).toFixed(2);
    medianD20.innerText = getMedian(twenties);
    modeD20.innerText = getMode(twenties);

}


/****************
 * MATH SECTION *
 ****************/
function getMean(array){
    let total = 0;

    for(let i = 0; i < array.length; i++){
        total = total + array[i];

    }
    return total/array.length;
}


//***********Stretch Goals************

function getMedian(array){
    let median = '';
    let sortedArray = array.sort(function(a, b){return a-b});

    if(sortedArray.length%2 !=  0){
        let midNbr = Math.floor(array.length/2)
        median = array[midNbr]
         } else {
            let midNbr = Math.floor(sortedArray.length/2)
            median = (sortedArray[midNbr] + sortedArray[midNbr - 1])/2
            }

    console.log(sortedArray);
    console.log(`Median:  ${median}`);

    return median;
    }
    
function getMode(array){

    let mode = {};
    let max = 0; 
    let count = 0;
    let item;

    for(let i = 0; i < array.length; i++){
        item = array[i];

        if(mode[item]){
            mode[item]++;
        } else {
            mode[item] = 1;
            }

        if(count <=  mode[item]){
            max = item;
            count = mode[item];
            }
    }
    console.log(`max: ${item} most occurences:  ${max}  count:  ${count}`)
    return max;
};