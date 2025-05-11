import { useState, useEffect } from 'react'

export function VAS(props) {
    const [value, setValue] = useState(600);

    const id = `${props.measurement.toLowerCase().replace(/\s+/g, '_')}_${props.age}`;
    useEffect(() => {
        if (props.register) {
            props.register(id, () => value);
        }
    }, [value, props.register, id]);  

    const handleChange = (e) => setValue(e.target.value);

    return (
        <div className="slider-container">
            <input
                className="slider"
                type="range"
                min="0"
                max="1200"
                value={value}
                step="1"
                orient="vertical"
                onChange={handleChange}
            />
            <p className="age-label">
                {props.age}
            </p>
        </div>
    );
}  