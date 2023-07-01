/** 
 * Game logic
 * 1. define parameters: NUM_ROWS, NUM_COLS
 * pattern1: solvable
 *     ##**
 *     ##**
 *     **##
 *     **##
 * 
 * 2. arrLights: 1D array to record status of lights- on/off
 * 3. matLights: 2D of arrLights
 * 4. transform between arrLights and matLights
 * 5. initLights
 * 6. updateLights(pos)
 * 7. isGameOver
 * 
 */

const NUM_ROWS = 2, NUM_COLS = 5; 
let arrLights = [];
let matLights = [];

/**
 * initLights
 * @param {*} onrate: ratio of ON ( ON-0, OFF-1 )
 * @returns 
 */
const initLights = (onrate = 1/3) => {
   return Array.from({length: NUM_ROWS * NUM_COLS}, (val)=> Math.floor(Math.random() + onrate));
};

/**
 * arrToMat
 * @param {*} arr 
 * @returns 1d to 2d
 */
const arrToMat = (arr)=>{
    return Array.from({length: NUM_ROWS},(val,i)=> arrLights.slice(i* NUM_COLS, (i+1)* NUM_COLS) );
}

/**
 * matToArr
 * @param {*} mat 
 * @returns 2d to 1d
 */
const matToArr = (mat) =>{
    return mat.reduce((acc, e) => acc.concat(e), []);
}

/** Game is over when sum of arrLights equals NUM_ROWS * NUM_COLS
 * ON-0, OFF-1
 */
const isGameOver = ()=>{
    return arrLights.reduce((acc, e) => acc + e, 0) === NUM_ROWS * NUM_COLS;
}

/** makeArrWithAllLightsOut */
const makeArrWithAllLightsOut = ()=>{
    return Array.from({length: NUM_COLS * NUM_ROWS}, (val, i)=> 1);
};

/** start the game */
const start = ()=>{
    arrLights = initLights();
    matLights = arrToMat(arrLights);
}