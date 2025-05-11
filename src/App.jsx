import { useRef, useState } from "react";
import './App.css'
import { VAS } from './components/VAS'
import { VASSet } from './components/VASSet'
import { VASBlock } from './components/VASBlock'
import { Intro } from './components/Intro'

function App() {
  const blockRefs = useRef({});
  const [participantId, setParticipantId] = useState('');

  const registerBlock = (refs) => {
    blockRefs.current  = {
      ...blockRefs.current,
      ...refs,
    };
  };

  const handleSave = () => {
    if (!validParticipantId(participantId)) {
      alert('Please enter a valid participant ID');
      return;
    }
    const result = {};
    for (const id in blockRefs.current) {
      const getValue = blockRefs.current[id];
      const value = getValue();
      result[id] = Number(value);
    }
    result['participantId'] = Number(participantId);
    downloadData(result);

  };

  const blocks = [
    {
      measurement: "physical strength",
      measurementSecLabel: "strength capacity",
    },
    {
      measurement: "walking speed",
      measurementSecLabel: "walking speed",
    },
    {
      measurement: "balance",
      measurementSecLabel: "balance capacity",
    },
    {
      measurement: "flexibility",
      measurementSecLabel: "flexibility capacity",
    },
  ]

  return (
      <div>
        <div className="participant-id-container">
          <label htmlFor="participantId">Participant ID</label>
          <input type="text" defaultValue={'xx'} onChange={(e) => setParticipantId(e.target.value)}/>
        </div>
        <Intro />
        <div>
          <h1>Response Form</h1>
          {blocks.map((block, index) => (
            <VASBlock
              key={index}
              measurement={block.measurement}
              measurementSecLabel={block.measurementSecLabel}
              registerBlock={registerBlock}
            />
          ))}
        </div>
        <h2>Submit your responses by pressing the button below.</h2>
        <button onClick={handleSave} className="save-button">Submit Response</button>
      </div>
  )
}

export default App



function downloadData(result) {
  const blob = new Blob([JSON.stringify(result, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'response.json';
  a.click();
  URL.revokeObjectURL(url);

  console.log('Data saved successfully');
}

function validParticipantId(participantId) {
  const regex = /^\d{2}$/;
  return regex.test(participantId);
}