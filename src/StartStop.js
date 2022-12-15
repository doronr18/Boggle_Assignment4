import React, {useState} from 'react'



const StartStop = ({size, startCan, allowChange}) => {

    console.log(allowChange)
    const [StrStp, setStrStp] = useState(false)



    const handleClick = () => {
        if (StrStp == false && size != '') {
            setStrStp(true);
            startCan(true);
            allowChange(false);
        }else if (StrStp == true || size == ''){
            setStrStp(false);
            startCan(false);
        }

       

    }



    return(
         <div className="p-4 space-between align-bottom">
         
         {(StrStp==true)?  <button onClick={() => handleClick() } className="bg-red-700 hover:bg-red-600 text-white font-bold border-b-4 border-red-900 hover:border-red-700 rounded-full w-[200px] h-[80px] uppercase"> 
        STOP
        </button>
        :
        <button onClick={ () => handleClick()} className="bg-green-700 hover:bg-green-600 text-white 
          border-b-4 border-green-900 hover:border-green-700 rounded-full w-[200px] h-[80px] uppercase"> 
        START
        </button>
        }
        

        </div>
  )
}

export default StartStop