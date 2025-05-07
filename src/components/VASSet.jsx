import { VAS }  from './VAS.jsx'
import { VASDescription } from './VASDescription.jsx'

export function VASSet(props) {
    const ages = Array.from({length: 8}, (_, i) => 20 + i * 10);
    const VASs = ages.map((age, index) => {
        return (
            <VAS 
                key={props.measurement+'_'+index} 
                measurement={props.measurement} 
                age={age} 
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