export function VASDescription(props) {
    return (
        <div className="description">
            <p><strong>Imagine a typical adult from the general population.</strong></p>
            <h2>Please indicate what you believe the {props.measurement} of a typical adult is at ages 20, 30, 40, 50, 60, 70, 80, and 90.</h2>
            <p>Respond by placing a mark on the vertical line at the point that best represents, in your opinion, the {props.measurementSecLabel} of that adult at each of the ages listed below, between “very low” and “very high”.</p>
        </div>
    )
}