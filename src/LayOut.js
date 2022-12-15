import React, { useState } from 'react'
import FivebyFive from './FivebyFive';
import FourXFour from './FourXFour';

const LayOut = ({size, letters}) => {
    

  console.log(letters[0])

  const arrayOne = letters[0]
  const arrayTwo = letters[1]
  const arrayThree = letters[2]
  const arrayFour = letters[3]
  const arrayFive = (size == '5x5') ? letters[4] : null

    if(size == '4x4'){
        size = 4
    }
    else{
        size = 5
    }

  return (
    <div>
    

    {size == 4 ?
    <FourXFour letters={letters}/>
    : <FivebyFive letters={letters}/> 
    }


    </div>
  )
}

export default LayOut






