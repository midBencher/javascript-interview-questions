// const gridSize = 3;
// let currentPlayer = 'X';


// function creatBoard(){
//    for (let j = 0; j < gridSize; j++) {
//     const rowRef = document.createElement('div');
//     rowRef.className = 'row';
    
//     for(let i = 0; i < gridSize; i++){
//         const cellRef = document.createElement('div');
//         cellRef.className = 'cell';
//         cellRef.addEventListener('click', function(e){
            
//         })
//         rowRef.appendChild(cellRef);
//     }
//     document.querySelector('.game').appendChild(rowRef)
    
//    }

    
    
// }
// function changePlayer() {
//     currentPlayer = currentPlayer === 'X'  ? 'O' : 'X';
// }

// const boardRef = document.querySelector('.game');
// boardRef.addEventListener('click' , function(e){
//     if (e.target.nodeName === 'DIV') {
//         if (e.target.classList.contains('cell')){
//             e.target.innerText = currentPlayer;
//             changePlayer() 
//         }
//     }
// })

// creatBoard();
// changePlayer();

const gridSize = 3;

for (let j = 0; j < gridSize; j++) {
    const rowRef = document.createElement('div');
    rowRef.className = 'row';
    
    for (let i = 0; i < gridSize; i++) {
        const cellRef = document.createElement('div');
    cellRef.className = 'cell';
      
    rowRef.appendChild(cellRef);
    } 
    document.querySelector('.game').appendChild(rowRef);
}







