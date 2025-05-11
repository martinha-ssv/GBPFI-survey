import { VAS }  from './VAS.jsx'
import { VASDescription } from './VASDescription.jsx'

import { useRef, useEffect } from 'react'

export function VASSet(props) {
    const vasRefs = useRef({});
    const register = (id, getValue) => {
        vasRefs.current[id] = getValue;
        if (props.registerSet) {
            props.registerSet(vasRefs.current);
        }
    };

    const ages = Array.from({length: 8}, (_, i) => 20 + i * 10);
    const VASs = ages.map((age, index) => {
        return (
            <VAS 
                key={props.measurement+'_'+index} 
                measurement={props.measurement} 
                age={age} 
                register={register}
            />
        )
    });



    return (
        <div className="set-container">
            <div className="label">
                <p>Very high {props.measurement}</p>
                <p>Very low {props.measurement}</p>
            </div>
            <div className="set">
                {VASs}
            </div>
        </div>
    )
}