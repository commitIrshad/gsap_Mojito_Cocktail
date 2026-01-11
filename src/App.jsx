import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import Navbar from './components/navbar'
import Hero from './components/Hero'
import Cocktails from './components/Cocktails';
import About from './components/About';
import Art from './components/Art'


// Need to registeer them becausue they dont get automatically get activated. So, using registerPlugin().
// And below line make sure that ScrollTrigger and SplitText would be available globally throughout the app.
gsap.registerPlugin(ScrollTrigger, SplitText)   

const App = () => {


  return (
    <main>
      <Navbar/>
      <Hero/>
      <Cocktails/>
      <About/>
      <Art />
    </main>
  )
}

export default App