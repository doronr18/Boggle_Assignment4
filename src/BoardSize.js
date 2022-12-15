import React, {useState} from 'react';

function BoardSize({size}) {
    const [Four, setFour] = useState(false)
    const [Five, setFive] = useState(false) 
    const [BSNull, setBTNull] = useState(true)
    

    const handleClickBS = (id) => {
        if(BSNull === true && id === '4x4'){
            setFour(true);
            setBTNull(false);
            size('4x4');

        } else if (BSNull === true && id === '5x5'){
            setFive(true);
            setBTNull(false);
            size('5x5');

        } else if (BSNull === false && id === '4x4' && Four === true){
            setBTNull(true);
            setFour(false);
            size('');

        } else if (BSNull === false && id === '5x5' && Five === true){
            setBTNull(true);
            setFive(false);
            size('');
        }
    }
    
    
    
    
    return(

        <div>
        <header className="text-white body-font font-mono text-2xl">
        Board Size:
        </header> 

        <div className="space-x-5 space-y-2">

        <button onClick={() => handleClickBS('4x4')} className={`${Four ? 'pressed': 'unPressed'}`}> 
        4x4
        </button>
    
      
        <button onClick={() => handleClickBS('5x5')} className={`${Five ? 'pressed': 'unPressed'}`}> 
            5x5
        </button>

        </div>
        </div>  

        
    )
}

export default BoardSize