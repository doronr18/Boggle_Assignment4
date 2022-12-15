import { clear } from '@testing-library/user-event/dist/clear';
import React, { useState, useEffect } from 'react';

const calcTimeLeft = t => {
    if(!t) return 0;

    const left = t - new Date().getTime();

    if(left < 0) return 0;

    return left;
};

export default function useCountdown(endTime){

    const [end, setEnd] = useState(endTime);
    const [timeLeft, setTimeLeft] = useState(() => calcTimeLeft(end));

    useEffect(() => {
        setTimeLeft(calcTimeLeft(end));

        const timer = setInterval(() => {
            const tLeft = calcTimeLeft(end);
            setTimeLeft(tLeft);

            if (tLeft == 0){
                clearInterval(timer);
            }
        });

        return () => clearInterval(timer);
    }, [end]);

    return [timeLeft, setEnd];
}