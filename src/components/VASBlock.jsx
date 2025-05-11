import { useRef, useEffect } from "react";
import { VASDescription } from "./VASDescription";
import { VASSet } from "./VASSet";

export function VASBlock(props) {
    const setRefs = useRef({});

    const registerSet = (refs) => {
        setRefs.current = refs;
        if (props.registerBlock) {
            props.registerBlock(setRefs.current);
        }
    }

    return (
        <div className="block">
            <VASDescription
                measurement={props.measurement}
                measurementSecLabel={props.measurementSecLabel}
            />
    
            <VASSet 
                measurement={props.measurement} 
                registerSet={registerSet}
            />
        </div>
    );
}