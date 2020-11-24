//
// Variables
//

const  variables = {
    getVariables(lifes = 3 ){
        this.ball = this.newObj().ball;
        this.arena = this.newObj().arena;
        this.paddle = this.newObj().paddle;
        this.bricks = this.newObj().bricks;
        this.lifesSpan = this.newObj().lifes;
        this.scoreSpan = this.newObj().score;

        this.ballWidth = this.ball.getBoundingClientRect().width;
        this.ballHeight = this.ball.getBoundingClientRect().height;

        this.arenaWidth = this.arena.getBoundingClientRect().width;; 
        this.arenaHeight = this.arena.getBoundingClientRect().height; 
        this.arenaTop = this.arena.getBoundingClientRect().top;
        this.arenaRight = this.arena.getBoundingClientRect().right;
        this.arenaBottom = this.arena.getBoundingClientRect().bottom;
        this.arenaLeft = this.arena.getBoundingClientRect().left;

        this.paddleLeft = this.paddle.getBoundingClientRect().left;
        this.paddleWidth = this.paddle.getBoundingClientRect().width;
        this.paddleTop = this.paddle.getBoundingClientRect().top;

        this.lifes = lifes;
        this.score = 0;

    },
    // Function that creates an object with game elements
    newObj() {
        const tags = document.querySelectorAll("[ref]");
    
        return [...tags].reduce((acc, current) => {
            const atr = current.getAttribute("ref");
            acc[atr] = current;
        return acc;
        },{});
    },
};

//
// Functions


class Bricks {
    constructor(){};

    //Get points
    static getPoints(pointsList){
       return pointsList[Math.floor(Math.random()*(pointsList.length))];
    };

    //Function that adds the bricks to the template and renders them
    static addBricks(number, pointsList) {
        //Create a template for bricks
        const template = document.createElement("template");

        [...new Array(number)].forEach(item => {
            template.innerHTML += `<div class="brick" data-point="${this.getPoints(pointsList)}"></div>`
        });
        
        variables.bricks.appendChild(template.content);
        
    };
    
};


//

class Ball {
    constructor(){
        this.translateX = 0;
        this.translateY = 0;
        this.x = 1;
        this.y = 1;
        this.intervalID;
    };

    //Setting ball in init position
    ballInitPosition (element) {
            let i = 1;
            let intervalID;
            setTimeout(()=>{
                intervalID = setInterval(() => {
                    element.setAttribute("style", `top: ${i}%; left: ${i}%;`);
                    i += 1;
                    if(i>=51){
                        clearInterval(intervalID);
                    }
                },0.005 * 1000);
            }, 1000);
    };

    //Function that moves the ball around the arena
    move (element) {
        const {top: ballTop, left: ballLeft, bottom: ballBottom} = element.getBoundingClientRect();

        this.destroyBricks((ballLeft + variables.ballWidth/2), ballTop-1, ballBottom+1);
        
        //Vertical motion
        if(document.elementFromPoint(ballLeft + variables.ballWidth/2, ballBottom) === variables.paddle) {
            this.y = -1;
        } else  if ((ballTop - variables.arenaTop) >= (variables.arenaHeight - variables.ballHeight) ){
            clearInterval(this.intervalID);
            this.intervalID = false;
            this.translateX = 0;
            this.translateY = 0;

            //update lifes
            variables.lifes -= 1;
            Game.renderValue(variables.lifesSpan, variables.lifes);

            //check if lost
            if(variables.lifes === 0) {

                alert(`Game Over! \nTry the next time ;)`);
                Game.newGame(27, 3, true);

            };
        } else if((ballTop - variables.arenaTop) <= 0){
            this.y = 1;
        };

        //Horizontal motion
        if((ballLeft - variables.arenaLeft) >= (variables.arenaWidth - variables.ballWidth)){
            this.x = - 1;
        } else if((ballLeft - variables.arenaLeft) <= 0){
            this.x = 1;
        };
        
        element.style.transform = `translate(${this.translateX += this.x}px, ${this.translateY += this.y}px)`;
        
    };
    //Destroy bricks
    destroyBricks = (x, yTop, yBottom) => {
        const topCollisionElement = document.elementFromPoint(x,yTop);
        const bottomCollisionElement = document.elementFromPoint(x,yBottom);
        if(bottomCollisionElement.classList.contains("brick")){

            bottomCollisionElement.classList.add("hide");

        } else if (topCollisionElement.classList.contains("brick")){

            topCollisionElement.classList.add("hide");
            this.y = this.y * (-1);

        } else {
            return;
        };
        //update and render score
        variables.score += parseInt(bottomCollisionElement.dataset.point || topCollisionElement.dataset.point, 10);
        Game.renderValue(variables.scoreSpan, variables.score);

        //check if won
        Game.catchWin();
    };

};



//Function that moves the paddle

class Paddle{
    constructor(){};

    static move (e) {
    
        const translateX = Math.min((variables.arenaRight - variables.paddleLeft - variables.paddleWidth), Math.max((e.x - variables.paddleLeft - variables.paddle.clickOffset), (variables.paddleLeft - variables.arenaLeft)*(-1)));
    
        variables.paddle.setAttribute("style", `transform: translate(${translateX}px)`);
    
    };

};


class Game  {
    constructor(numberOfBricks, lifes){
        //load variables
        variables.getVariables(lifes);

        //Render life and score
        Game.renderValue(variables.lifesSpan, variables.lifes);
        Game.renderValue(variables.scoreSpan, variables.score);

        //
        this.ballActions = new Ball();

        //Moving the ball to the init position
        this.ballActions.ballInitPosition(variables.ball, true);

        //Adding the bricks
        Bricks.addBricks(numberOfBricks, [1,3,5]);

        //Moving the paddle
        variables.paddle.addEventListener("mousedown", (e) => {
            //start the ball when the paddle is pressed
            const moveBall = this.ballActions.move.bind(this.ballActions);
            if(!this.ballActions.intervalID){
                this.ballActions.intervalID = setInterval(moveBall, 0.0005 * 1000, variables.ball);
            };
    
            variables.paddle.clickOffset = e.offsetX;
            e.preventDefault();
            document.addEventListener("mousemove", Paddle.move);
        });
        document.addEventListener("mouseup", () => {
            document.removeEventListener("mousemove", Paddle.move);
        });
    };
    // render a provided value to a provided element
    static renderValue(element, value){
        element.textContent = value;
    };

    //start new game and eventually reset bricks
    static newGame(numberOfBricks, lifes, reset){
        if(reset){
            // variables.bricks.innerHTML = "";
            window.location.reload();
        } else {
            variables.game = new Game(numberOfBricks,lifes)
        };
    };
    

    //check if won
    static catchWin(){
        const won = [...document.getElementsByClassName("brick")].every( item => {
            return item.classList.contains("hide"); 
        });
        if(!won) return;
        // clearInterval(intervalID);
        alert(`Well Done! \nPrepare for the next round!`);
        Game.newGame(27,3, true);
    };
};


//
// Inits
//

document.addEventListener("DOMContentLoaded", function(e){
Game.newGame(27,3);
});