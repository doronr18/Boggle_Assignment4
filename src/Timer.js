import React, {useState, useEffect} from 'react'
import useCountdown from './TimerFunction';

function Timer({choosenTime}){

    const endTime = new Date().getTime() + (60000 * 6);
    const [timeLeft, setEndTime] = useCountdown(endTime);

    const minutes = Math.floor(timeLeft / 60000) % 60;
    const seconds = Math.floor(timeLeft / 1000) % 60;



    return(
        <div className="justify-center shadow-inner bg-neutral-800 text-red-700 font-bold text-base w-[250px] h-[150px] rounded-3xl">
        <div className="absolute text-7xl right-[30px] bottom-[40px]">{"0"+minutes}:{seconds<10?"0"+seconds:seconds}</div>
        </div>
    )

    
}

export default Timer