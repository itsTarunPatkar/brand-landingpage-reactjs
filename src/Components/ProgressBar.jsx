import React, { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


export default function ProgressBar({ text, percent }) {
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            if (percentage < percent) {
                setPercentage(percentage + 1);
            }
        }, 50);
        // eslint-disable-next-line
    }, [percentage]);

    return (
        <div style={{ textAlign: "center" }}>

            <CircularProgressbar styles={{ path: { stroke: `#791792, ${percentage / 100})` } }} value={percentage} text={`${percentage}%`} />
            <div className='mt-3 fs-5'>{text}</div>
        </div>
    );
}

