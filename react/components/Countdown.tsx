import React, { useState } from 'react';
import countdownSchema from '../schemas/countdown-schema';
import { TimeSplit } from '../typings/global';
import { tick } from '../typings/time';
import { useCssHandles } from 'vtex.css-handles';
import './styles.css';

type Props = {
    targetDate: string,
    textCountdown: string
}


function Countdown({ targetDate }: Props) {

    //States
    const [timeRemaining, setTimeRemaining] = useState<TimeSplit>({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00"
    });
    // Functions
    tick(targetDate, setTimeRemaining);

    // Handles Styles 
    const CSS_HANDLES = [
        'countdown__container',
        'countdown__container--text',
        'countdown__container--text-mobile',
        'countdown__container--time',
        'countdown__time--box',
        'countdown__box--number',
        'countdown__box--text'
    ];

    const handles = useCssHandles(CSS_HANDLES);

    return (
        <div className={`${handles['countdown__container']}`}>
            <h2 className={`${handles['countdown__container--text']}`}>
                <span className={`${handles['countdown__container--text-mobile']}`} >¡Aprovecha!</span> Te quedan:

            </h2>
            <div className={`${handles['countdown__container--time']}`}>
                <div className={`${handles['countdown__time--box']}`}>
                    <p className={`${handles['countdown__box--number']}`}>
                        {timeRemaining.days}
                    </p>
                    <p className={`${handles['countdown__box--text']}`}>DÍAS</p>
                </div>

                <div className={`${handles['countdown__time--box']}`}>
                    <p className={`${handles['countdown__box--number']}`}>
                        {timeRemaining.hours}
                    </p>
                    <p className={`${handles['countdown__box--text']}`}>HRS</p>
                </div>

                <div className={`${handles['countdown__time--box']}`}>
                    <p className={`${handles['countdown__box--number']}`}>
                        {timeRemaining.minutes}
                    </p>
                    <p className={`${handles['countdown__box--text']}`}>MIN</p>
                </div>

                <div className={`${handles['countdown__time--box']}`}>
                    <p className={`${handles['countdown__box--number']}`}>
                        {timeRemaining.seconds}
                    </p>
                    <p className={`${handles['countdown__box--text']}`}>SEG</p>
                </div>
            </div>
        </div>
    );
}

Countdown.schema = countdownSchema;
export default Countdown;