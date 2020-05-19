document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid')
    let squares = Array.from(document.querySelectorAll('.grid div'))
    const ScoreDisplay = document.querySelector('#score');
    const StartButton = document.querySelector('#start-button');
    const width = 10;
    
    //The Tetrominoes
    const lTetrominoe = [
			[1, width + 1, width * 2 + 1, 2],
			[width, width + 1, width + 2, width * 2 + 2],
			[1, width * 2, width * 2 + 1, width * 2 + 2],
			[width, width * 2, width * 2 + 1, width*2+2],
		];
    
    const oTetromino = [
			[0, width, 1, width + 1],
			[0, width, 1, width + 1],
			[0, width, 1, width + 1],
			[0, width, 1, width + 1]
		];

    const iTetromino = [
			[1, width + 1, width *2+1, width* 3+1],
			[width, width + 1, width + 2, width + 3],
			[1, width + 1, width * 2+1, width * 3+1],
			[width, width + 1, width + 2, width + 3],
    ];

    const tTetromino = [
			[ 1,width, width + 1, width + 2],
			[1, width + 1, width +2, width *2+1],
			[width, width + 1, width +2, width *2+1],
			[1,width, width + 1, width*2+1],
		];

    const zTetromino = [
			[0, width, width + 1, width * 2 + 1],
			[width + 1, width + 2, width * 2, width * 2 + 1],
			[0, width, width + 1, width * 2 + 1],
			[width + 1, width + 2, width * 2, width * 2 + 1],
    ];
    
    const theTetrominoes = [lTetrominoe, zTetromino,tTetromino,oTetromino,iTetromino]
    
    let currentPosition = 4
    let currentRotation = 0;

    let random = Math.floor(Math.random()*theTetrominoes.length)
    console.log(random)
    let current = theTetrominoes[random][currentRotation]
    // console.log(theTetrominoes);

    //draw 
    function draw() {
        current.forEach(index => {
            squares[currentPosition + index].classList.add('tetromino')
        })
    }
    
    // undraw
    function unDraw() {
        current.forEach(index => {
            squares[currentPosition + index].classList.remove('tetromino') 
        })
    }
    console.log(theTetrominoes[1][3]);
    draw()


    //tetromino move down every second
    timerId = setInterval(moveDown, 1000)

    function moveDown() {
        unDraw()
        currentPosition += width
        draw()
        freeze()
    }

    function freeze() {
        if (current.some(index => squares[currentPosition + index + width].classList.contains('taken'))) {
            current.forEach(index => squares[currentPosition + index].classList.add('taken'))
            //start new tetro falling
            random = Math.floor(Math.random() * theTetrominoes.length)
            current = theTetrominoes[random][currentRotation]
            currentPosition = 4
            draw()
       } 
    }












});