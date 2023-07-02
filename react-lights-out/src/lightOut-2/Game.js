class Game{
    constructor(nrows = 5,ncols = 5){
        this.NUM_ROWS = nrows;
        this.NUM_COLS = ncols;
        this.arrLights = this.makeArrWithAllLightsOut();
        this.matLights = this.arrToMat(this.arrLights);
    }

    /**
     * randomly click
     */
    randomClick(){
        let ix = Math.floor(this.NUM_ROWS * Math.random());
        let iy = Math.floor(this.NUM_COLS * Math.random());
        console.log(`[${ix + 1}, ${iy + 1}]`);
        this.updateLights(ix, iy);
    }
    
/**
 * To ensure game is solvable
 */
    initGame(){
        console.log("in initGame");
        while (this.isGameOver()){ // ensure initial config is not all lights out
            let randTimes = Math.floor(Math.random() * (Math.min(this.NUM_COLS * this.NUM_ROWS, 20)));
            this.target = randTimes;
            console.log(`Solution: need to click time: ${randTimes} times`);
            console.log("Click the cells in the following list backwards:");
            for (let i=0; i<randTimes;i++)
                this.randomClick();
        }
    }

/** Game is over when sum of arrLights equals NUM_ROWS * NUM_COLS
 * ON-0, OFF-1
 */
    isGameOver(){
        return this.arrLights.reduce((acc, e) => acc + e, 0) === this.NUM_ROWS * this.NUM_COLS;
    }

 /** makeArrWithAllLightsOut */
    makeArrWithAllLightsOut = ()=>{
        return Array.from({length: this.NUM_COLS * this.NUM_ROWS}, (val, i)=> 1);
    };   

/**
 * arrToMat
 * @param {*} arr 
 * @returns 1d to 2d
 */
    arrToMat = ()=>{
        return Array.from({length: this.NUM_ROWS},(val,i)=> this.arrLights.slice(i* this.NUM_COLS, (i+1)* this.NUM_COLS) );
    }

/**
 * matToArr
 * @param {*} mat 
 * @returns 2d to 1d
 */
    matToArr(){
        return this.matLights.reduce((acc, e) => acc.concat(e), []);
    }

/**
 * ix: index in row of matLights
 * iy: index in col of matLights
 *  update arrLights and matLights
 */
    updateLights(ix,iy){
        // find neighborhood including [ix,iy]
        let nearby =  [[ix-1, iy], [ix,iy], [ix+1, iy], [ix, iy-1], [ix, iy+1]].filter(([x,y])=> x>=0 && y>=0 && x<this.NUM_ROWS && y<this.NUM_COLS);

        // flip lights in nearby
        for (let [x,y] of nearby){
            this.matLights[x][y] = (this.matLights[x][y] + 1 ) % 2;
            this.arrLights[x*this.NUM_COLS + y] = (this.arrLights[x*this.NUM_COLS + y] + 1) % 2;
        }
    }
}

export default Game;