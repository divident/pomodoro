import { useEffect, useState } from 'react';
import './CircleProgress.css';

function CircleProgress(props) {

    const { stroke, radius } = props;
    const normalizedRadius = radius - stroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        setProgress(circumference - (props.progress / 100 * circumference))
    }, [props.progress]);

    return (
        <svg
            height={radius * 2}
            width={radius * 2}
        >
            <circle className="circle"
                stroke="var(--text-primary)"
                strokeDasharray={`${circumference} ${circumference}`}
                style={{ strokeDashoffset: progress }}
                strokeWidth={stroke}
                fill="transparent"
                r={normalizedRadius}
                cx={radius}
                cy={radius}
            />
        </svg>
    )
}

export default CircleProgress