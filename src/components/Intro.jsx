export function Intro(props) {
    return (
        <div>
            <div>
                <p>
                    This questionnaire is about your opinion regarding the quality of physical abilities at different ages. For each statement, we ask you to imagine a typical individual from the general population. You only need to place a mark on the response scale (as shown in the example below), <u>which reflects your own opinion about the quality of this individual’s physical abilities at various ages</u>.
                </p>
                <p>
                    <u><strong>
                        This example is just to show you how to respond, not where you should respond. You are free to place your mark anywhere on the scale, depending on your perception.
                    </strong></u>
                </p>
            </div>


            <div className="example">
                <h2>Example</h2>
                <p><strong>Your opinion on the endurance of a typical individual from the general population</strong></p>
                <div className="example-sliders">
                    <div className="set-container">
                        <div className="label" >
                            <p>Very high endurance</p>
                            <p>Very low endurance</p>
                        </div>
                        <input type="range" defaultValue={20} orient="vertical"/>
                    </div>

                    <div className="set-container">
                        <div className="label" >
                            <p>Very high endurance</p>
                            <p>Very low endurance</p>
                        </div>
                        <input type="range" defaultValue={95} orient="vertical"/>
                    </div>
                </div>
                <p>If someone places a mark at the spot seen on the left, this means they think the endurance is rather low, though not extremely low.</p>
                <p>If someone places a mark on the scale at the spot seen on the right, this means they think the individual’s endurance is very high.</p>
            </div>

            <hr />
        </div>
    )
    

}