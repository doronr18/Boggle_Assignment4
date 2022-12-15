import React, { input, useState } from 'react'
import LayOut from './LayOut'
import { Input } from "@material-tailwind/react";
import StopPage from './StopPage';


function BoggleBoard({sizeOfBoard, gridLet, stpStart, answers}) {

    const [userGuess, setUserGuess] = useState("")

    const handleAnswerSubmit = (e) => {
        e.preventDefault()
        if(userGuess && userGuess.length >= 3){
            console.log(userGuess)
        }
    }

    // const handleClickChange = () => {
    //     quitChange(true);
    // }

    let found = [];
    



    return(

        <div className="justify-center shadow-inner bg-neutral-800 text-white font-bold text-base w-[794px] h-[594px] rounded-3xl">
        

        {(sizeOfBoard == '4x4' || sizeOfBoard == '5x5') && stpStart == true ? 
        <LayOut size={sizeOfBoard} letters={gridLet}/> 
        :
        <StopPage/>
        }


         <form className='w-[400px] h-10 absolute bg-neutral-700 border-red-700 bottom-[10px] left-[190px] rounded-lg' onSubmit={handleAnswerSubmit}>
         <input
            type='text'
            name='Guess'
            placeholder="Guess Words"
            autocomplete="off"
            aria-label = "Guess Words"
            onChange={(e) => setUserGuess(e.target.value)}
            className="bg-transparent py px-7 absolute left-2 bottom-[8px]"
         />

        <button className="flex-shrink-0 bg-red-700 hover:bg-red-900 border-red-700 hover:border-red-900 text-sm border-4 text-white py-1 px-3 rounded absolute left-[285px] bottom-[2px]" type="button">
        ENTER
        </button>

        <button className="flex-shrink-0  text-white py-1 px-3 rounded absolute left-[357px] bottom-[4px]" type="button">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
        </svg>
        </button>



         </form>

        </div>
    )
}

export default BoggleBoard

// className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 leading-tight focus:outline-none" type="text" placeholder="Guess Word" aria-label="Guessed Word"/>