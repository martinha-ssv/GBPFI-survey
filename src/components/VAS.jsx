import { useState } from 'react'

export function VAS(props) {
    const [value, setValue] = useState();
    return (
        <div className="slider-container">
            <input
                className="slider"
                type="range"
                min="0"
                max="1200"
                step="1"
                orient="vertical"
            />
            <p className="age-label">
                {props.age}
            </p>
        </div>
    );
}