import React, {useState} from 'react';

function TimeOpt({time}) {

    const [Off, setOff] = useState(false)
    const [OneMin, setOneMin] = useState(false)
    const [ThreeMin, setThreeMin] = useState(false)
    const [FiveMin, setFiveMin] = useState(false)
    const [TONull, setTONull] = useState(true)


    const handleClickTO = (id) => {
        if(TONull === true && id === 'off'){
            setOff(true);
            setTONull(false);
            time(9);
        } else if (TONull === true && id === '1 min'){
            setOneMin(true);
            setTONull(false);
            time(1);
        } else if (TONull === true && id === '3 min'){
            setThreeMin(true);
            setTONull(false);
            time(3);
        } else if (TONull === true && id === '5 min' ){
            setFiveMin(true);
            setTONull(false);
            time(5);
        } else if (TONull === false && id === 'off' && Off === true){
            setOff(false);
            setTONull(true);
            time(0);
        } else if (TONull === false && id === '1 min' && OneMin === true){
            setOneMin(false);
            setTONull(true);
            time(0);
        } else if (TONull === false && id === '3 min' && ThreeMin === true){
            setThreeMin(false);
            setTONull(true);
            time(0);
        } else if (TONull === false && id === '5 min' && FiveMin === true){
            setFiveMin(false);
            setTONull(true);
            time(0);
        }
    }
    


    return(

        <div className="py-10">

            <header className="text-white body-font font-mono text-2xl">
                Timer:
            </header> 

        <div className="space-x-5 space-y-2">

        <button onClick={() => handleClickTO('off')} className={`${Off ? 'pressed': 'unPressed'}`}> 
        off
        </button>

        <button onClick={() => handleClickTO('1 min')} className={`${OneMin ? 'pressed': 'unPressed'}`}> 
        1 min
        </button>
        </div>

        <div className="space-x-5 space-y-2">

        <button onClick={() => handleClickTO('3 min')} className={`${ThreeMin ? 'pressed': 'unPressed'}`}> 
        3 min
        </button>

        <button onClick={() => handleClickTO('5 min')} className={`${FiveMin ? 'pressed': 'unPressed'}`}> 
        5 min
        </button>

        </div>
        </div>
    )
}

export default TimeOpt