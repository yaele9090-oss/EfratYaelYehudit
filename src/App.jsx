import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import {StudyTime} from './components/StudyTime'
import {Motivation} from './components/Motivation'
import { StudyChecklist } from './components/StudyChecklist'


function App() {
  return (
    <>
   <h1>YALLA SONG</h1>
   <p>this is a good project</p>
   <StudyTime/>
   <StudyChecklist/>
   <Motivation/>
    </>
  )
}

export default App
