import React from 'react'

function FourXFour({letters}){

    const arrayOne = letters[0]
    const arrayTwo = letters[1]
    const arrayThree = letters[2]
    const arrayFour = letters[3]

    return(
        <div className="absolute justify-between">

        
        <div className="w-24 h-24 border-gradient-br-blue-green-gray-900 hover:border-gradient-tl-blue-green-gray-900 gradient-border-3 rounded-full absolute top-[20px] left-[50px]"><h3 className='absolute left-[27px] top-[20px] text-5xl'>{arrayOne[0]}</h3></div>
        <div className="w-24 h-24 border-gradient-br-blue-green-gray-900 hover:border-gradient-tl-blue-green-gray-900 gradient-border-3 rounded-full absolute top-[140px] left-[50px]"><h3 className='absolute left-[27px] top-[20px] text-5xl'>{arrayTwo[0]}</h3></div>
        <div className="w-24 h-24 border-gradient-br-blue-green-gray-900 hover:border-gradient-tl-blue-green-gray-900 gradient-border-3 rounded-full absolute top-[260px] left-[50px]"><h3 className='absolute left-[27px] top-[20px] text-5xl'>{arrayThree[0]}</h3></div>
        <div className="w-24 h-24 border-gradient-br-blue-green-gray-900 hover:border-gradient-tl-blue-green-gray-900 gradient-border-3 rounded-full absolute top-[380px] left-[50px]"><h3 className='absolute left-[27px] top-[20px] text-5xl'>{arrayFour[0]}</h3></div>

        <div className="w-24 h-24 border-gradient-br-blue-green-gray-900 gradient-border-3 hover:border-gradient-tl-blue-green-gray-900 gradient-border-3 rounded-full absolute top-[20px] left-[250px]"><h3 className='absolute left-[27px] top-[20px] text-5xl'>{arrayOne[1]}</h3></div>
        <div className="w-24 h-24 border-gradient-br-blue-green-gray-900 hover:border-gradient-tl-blue-green-gray-900 gradient-border-3border-gradient-br-blue-green-gray-900 hover:border-gradient-tl-blue-green-gray-900 gradient-border-3 rounded-full absolute top-[140px] left-[250px]"><h3 className='absolute left-[27px] top-[20px] text-5xl'>{arrayTwo[1]}</h3></div>
        <div className="w-24 h-24 border-gradient-br-blue-green-gray-900 hover:border-gradient-tl-blue-green-gray-900 gradient-border-3border-gradient-br-blue-green-gray-900 hover:border-gradient-tl-blue-green-gray-900 gradient-border-3 rounded-full absolute top-[260px] left-[250px]"><h3 className='absolute left-[27px] top-[20px] text-5xl'>{arrayThree[1]}</h3></div>
        <div className="w-24 h-24 border-gradient-br-blue-green-gray-900 hover:border-gradient-tl-blue-green-gray-900 gradient-border-3border-gradient-br-blue-green-gray-900 hover:border-gradient-tl-blue-green-gray-900 gradient-border-3 rounded-full absolute top-[380px] left-[250px]"><h3 className='absolute left-[27px] top-[20px] text-5xl'>{arrayFour[1]}</h3></div>

        <div className="w-24 h-24 border-gradient-br-blue-green-gray-900 hover:border-gradient-tl-blue-green-gray-900 gradient-border-3 rounded-full absolute top-[20px] left-[450px]"><h3 className='absolute left-[27px] top-[20px] text-5xl'>{arrayOne[2]}</h3></div>
        <div className="w-24 h-24 border-gradient-br-blue-green-gray-900 hover:border-gradient-tl-blue-green-gray-900 gradient-border-3 rounded-full absolute top-[140px] left-[450px]"><h3 className='absolute left-[27px] top-[20px] text-5xl'>{arrayTwo[2]}</h3></div>
        <div className="w-24 h-24 border-gradient-br-blue-green-gray-900 hover:border-gradient-tl-blue-green-gray-900 gradient-border-3 rounded-full absolute top-[260px] left-[450px]"><h3 className='absolute left-[27px] top-[20px] text-5xl'>{arrayThree[2]}</h3></div>
        <div className="w-24 h-24 border-gradient-br-blue-green-gray-900 hover:border-gradient-tl-blue-green-gray-900 gradient-border-3 rounded-full absolute top-[380px] left-[450px]"><h3 className='absolute left-[27px] top-[20px] text-5xl'>{arrayFour[2]}</h3></div>


        <div className="w-24 h-24 border-gradient-br-blue-green-gray-900 hover:border-gradient-tl-blue-green-gray-900 gradient-border-3 rounded-full absolute top-[20px] left-[650px]"><h3 className='absolute left-[27px] top-[20px] text-5xl'>{arrayOne[3]}</h3></div>
        <div className="w-24 h-24 border-gradient-br-blue-green-gray-900 hover:border-gradient-tl-blue-green-gray-900 gradient-border-3 rounded-full absolute top-[140px] left-[650px]"><h3 className='absolute left-[27px] top-[20px] text-5xl'>{arrayTwo[3]}</h3></div>
        <div className="w-24 h-24 border-gradient-br-blue-green-gray-900 hover:border-gradient-tl-blue-green-gray-900 gradient-border-3 rounded-full absolute top-[260px] left-[650px]"><h3 className='absolute left-[27px] top-[20px] text-5xl'>{arrayThree[3]}</h3></div>
        <div className="w-24 h-24 border-gradient-br-blue-green-gray-900 hover:border-gradient-tl-blue-green-gray-900 gradient-border-3 rounded-full absolute top-[380px] left-[650px]"><h3 className='absolute left-[27px] top-[20px] text-5xl'>{arrayFour[3]}</h3></div>

        </div>
    );
}

export default FourXFour