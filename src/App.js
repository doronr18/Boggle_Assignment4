import { FastForward } from 'heroicons-react';
import React, { useState } from 'react';
import BoggleBoard from './BoogleBoard';
import SideBar from './SideBar';
import StartStop from './StartStop';
import Timer from './Timer';
import fas from './Solver';
import wordDict from './boogleSolve/wordDict.json';

function App() {

  const [change, setChange] = useState(true)
  const changeParent = (data) => {
    setChange(data)
  }


  const gridGrabber = (size) => {
    const dice = [
      [ 'A', 'A', 'A', 'F', 'R', 'S' ],
      [ 'A', 'A', 'E', 'E', 'E', 'E' ],
      [ 'A', 'A', 'E', 'E', 'O', 'O' ],
      [ 'A', 'A', 'F', 'I', 'R', 'S' ],
      [ 'A', 'B', 'D', 'E', 'I', 'O' ],
      [ 'A', 'D', 'E', 'N', 'N', 'N' ],
      [ 'A', 'E', 'E', 'E', 'E', 'M' ],
      [ 'A', 'E', 'E', 'G', 'M', 'U' ],
      [ 'A', 'E', 'G', 'M', 'N', 'N' ],
      [ 'A', 'E', 'I', 'L', 'M', 'N' ],
      [ 'A', 'E', 'I', 'N', 'O', 'U' ],
      [ 'A', 'F', 'I', 'R', 'S', 'Y' ],
      [ 'A', 'E', 'H', 'I', 'Q', 'T' ],
      [ 'B', 'B', 'J', 'K', 'X', 'Z' ],
      [ 'C', 'C', 'E', 'N', 'S', 'T' ],
      [ 'C', 'D', 'D', 'L', 'N', 'N' ],
      [ 'C', 'E', 'I', 'I', 'T', 'T' ],
      [ 'C', 'E', 'I', 'P', 'S', 'T' ],
      [ 'C', 'F', 'G', 'N', 'U', 'Y' ],
      [ 'D', 'D', 'H', 'N', 'O', 'T' ],
      [ 'D', 'H', 'H', 'L', 'O', 'R' ],
      [ 'D', 'H', 'H', 'N', 'O', 'W' ],
      [ 'D', 'H', 'L', 'N', 'O', 'R' ],
      [ 'E', 'H', 'I', 'L', 'R', 'S' ],
      [ 'E', 'I', 'I', 'L', 'S', 'T' ],
      [ 'E', 'I', 'L', 'P', 'S', 'T' ],
      [ 'E', 'I', 'O', 'L', 'W', 'D' ],
      [ 'E', 'M', 'T', 'T', 'T', 'O' ],
      [ 'E', 'N', 'S', 'S', 'S', 'U' ],
      [ 'G', 'O', 'R', 'R', 'V', 'W' ],
      [ 'H', 'I', 'R', 'S', 'T', 'V' ],
      [ 'H', 'O', 'P', 'R', 'S', 'T' ],
      [ 'I', 'P', 'R', 'S', 'Y', 'Y' ],
      [ 'J', 'K', 'Q', 'W', 'X', 'Z' ],
      [ 'N', 'O', 'O', 'T', 'U', 'W' ],
      [ 'O', 'O', 'O', 'T', 'T', 'U' ],
    ];
    let chars = dice.map(cube => cube[Math.floor(Math.random() * cube.length)]);
    chars.sort(() => Math.random() - 0.5); 
  
    const SIZE = size;
    let grid = [];
    if (true){
      console.log(change)
      for (let row = 0; row < SIZE; row++) {
        grid[row] = [];
        for (let col = 0; col < SIZE; ++col) {
          grid[row][col] = chars[SIZE * row + col];
          if (grid[row][col] === "Q") 
              grid[row][col] = "Qu";
          if (grid[row][col] === "S") 
              grid[row][col] = "St";
        }
      }
      console.log(grid);
      return grid;
    }
    else{
      console.log(change)
      console.log(grid);
      return grid;
    }

  }


  const [sizeChild, setSizeChild] = useState('')
  const sizeParent = (data) => {
    setSizeChild(data)
  }

  
  const gridSize = (sizeChild == '4x4') ? 4 : 5
  const grid = gridGrabber(gridSize)
  const appSolver = (g) => {
    //pass
    return fas(grid,wordDict);
  }


  let listOFAns = appSolver(grid);
  
  




  // const [timeChild, setTimeChild] = useState(0)
  // const timeParent = (data) => {
  //   setTimeChild(data)
  // }

  // const [typeChild, setTypeChild] = useState('')
  // const typeParent = (data) => {
  //   setTypeChild(data)
  // }

  const [canStart, setCanStart] = useState(false);
  const start = (data) => {
    setCanStart(data)
  }




  return (
    <div className="bg-neutral-900 w-full h-screen">
    


    <div className=''>
      <header className=" justify-between items-center px-100 text-red-700 body-font font-mono text-7xl px-5 py-5">
        <h1>Boggle</h1>
        <h1>Solver</h1>
      </header>

      <div className="py-3">
      <StartStop size={sizeChild} startCan={start} allowChange={changeParent}/>
      <SideBar sizefuction={sizeParent}/>
      </div>
      
    </div>

    <div className="absolute top-[20px] right-[225px] text-white body-font font-mono">SCORE:</div>
    <div className='  absolute top-[45px] left-[335px] '>
    <BoggleBoard sizeOfBoard={sizeChild} gridLet={grid} stpStart={canStart} answers={listOFAns}/>
    </div>

    {/* <div className="absolute top-[65px] right-[23px]">
    <Timer choosenTime={timeChild}/>
      
    </div> */}


    </div>
  );
}

export default App;
