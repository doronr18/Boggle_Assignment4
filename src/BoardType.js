import React, {useState} from 'react';

function BoardType({type}) {
    
    const [PreSet, setPreSet] = useState(false)
    const [Generate, setGenerate] = useState(false)
    const [BTNull, setBTNull] = useState(true)
    

    const handleClickBT = (id) => {
        if(BTNull === true && id === 'Pre-Set'){
            setPreSet(true);
            setBTNull(false);
            type('Pre-Set');

        } else if (BTNull === true && id === 'Generate'){
            setGenerate(true);
            setBTNull(false);
            type('Generate');
        } else if (BTNull === false && id === 'Pre-Set' && PreSet === true){
            setBTNull(true);
            setPreSet(false);
            type('');
        } else if (BTNull === false && id === 'Generate' && Generate === true){
            setBTNull(true);
            setGenerate(false);
            type('');
        }
    }

    return(
        <div className="py-10">
            <header className="text-white body-font font-mono text-2xl">
                Board Type:
            </header> 

        <div className="space-x-5 space-y-2">

          <button onClick={() => handleClickBT('Pre-Set')} className={`${PreSet ? 'pressed': 'unPressed'}`}> 
        Pre-Set
        </button>
    
      
        <button onClick={() => handleClickBT('Generate')} className={`${Generate ? 'pressed': 'unPressed'}`}> 
            Generate
        </button>

        </div>
        </div>


    )
}

export default BoardType