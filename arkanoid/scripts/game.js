// Function that creates an object with game elements
(newObj = () => {
    const tags = document.querySelectorAll("[ref]");

    return [...tags].reduce((acc, current) => {
        const atr = current.getAttribute("ref");
        acc[atr] = current;
    return acc;
    },{});
});




//
// Variables
//
const {ball, arena, paddle, bricks, lifes, score} = newObj();

const {width: ballWidth, height: ballHeight} = ball.getBoundingClientRect();

const {width: arenaWidth, height: arenaHeight, top: arenaTop, right: arenaRight,  bottom: arenaBottom, left: arenaLeft } = arena.getBoundingClientRect();

const {left: paddleLeft, width: paddleWidth} = paddle.getBoundingClientRect();



//
// Functions
//

//Closure that moves the ball around the arena

const ballMoveClosure = () => {

    let translateX = 0;
    let translateY = 0;
    let x = 1;
    let y = 1;

    move = (element) => {
        if ((ball.getBoundingClientRect().top - arenaTop) >= (arenaHeight - ballHeight) ){
            y = - 1;
        } else if((ball.getBoundingClientRect().top - arenaTop) <= 0){
            y = 1;
        };

        if((ball.getBoundingClientRect().left - arenaLeft) >= (arenaWidth - ballWidth)){
            x =  - 1;
        } else if((ball.getBoundingClientRect().left - arenaLeft) <= 0){
            x = 1;
        };

        element.setAttribute("style", `transform: translate(${translateX += x}px, ${translateY += y}px)`);
    };

    return move;
};

const ballMove = ballMoveClosure();


//Function that moves the paddle

const paddleMove = (e) => {
    
    const translateX = Math.min((arenaRight - paddleLeft - paddleWidth), Math.max((e.x - paddleLeft - paddle.clickOffset), (paddleLeft - arenaLeft)*(-1)));

    paddle.setAttribute("style", `transform: translate(${translateX}px)`);

};


//Create a template for bricks

const template = document.createElement("template");

//Function that adds the bricks to the template and renders them

const addBricks = (number) => {

    [...new Array(number)].forEach(item => {
        template.innerHTML += '<div class="brick"></div>'
    });
    
    bricks.appendChild(template.content);
    
};




//
// Inits
//


//Moving the ball
setInterval(ballMove, 0.0005 * 1000, ball);

//Moving the paddle
paddle.addEventListener("mousedown", (e) => {
    paddle.clickOffset = e.offsetX;
    e.preventDefault();
    document.addEventListener("mousemove", paddleMove);
});
document.addEventListener("mouseup", () => {
    document.removeEventListener("mousemove", paddleMove);
});
//Adding the bricks
addBricks(18);

