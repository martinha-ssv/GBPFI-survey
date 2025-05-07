import { VASDescription } from "./VASDescription";
import { VASSet } from "./VASSet";

export function VASBlock(props) {
    return (
        <div className="block">
            <VASDescription
                measurement={props.measurement}
                measurementSecLabel={props.measurementSecLabel}
            />
    
            <VASSet measurement={props.measurement} />
        </div>
    );
}