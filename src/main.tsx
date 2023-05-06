import '@/styles/index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import studio from '@theatre/studio'
import {Canvas} from '@react-three/fiber'
import extension from '@theatre/r3f/dist/extension'
import { HomeScene } from '@/scenes'

studio.initialize()
studio.extend(extension)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Canvas gl={{preserveDrawingBuffer: true}} >
      <HomeScene />
    </Canvas>
  </React.StrictMode>
)
