import './App.css'
import { VAS } from './components/VAS'
import { VASSet } from './components/VASSet'
import { VASBlock } from './components/VASBlock'
import { Intro } from './components/Intro'

function App() {

  return (
      <div>
        <Intro />
        <VASBlock 
          measurement="physical strength" 
          measurementSecLabel='strength capacity'
        />
        <VASBlock
          measurement="walking speed"
          measurementSecLabel="walking speed"
        />
        <VASBlock
          measurement="balance"
          measurementSecLabel="balance capacity"
        />
        <VASBlock
          measurement="flexibility"
          measurementSecLabel="flexibility capacity"
        />
      </div>
  )
}

export default App
