import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import Navbar from './components/navbar'
import Hero from './components/Hero'
import Cocktails from './components/Cocktails';


// Need to registeer them becausue they dont get automatically get activated. So, using registerPlugin().
// And below line make sure that ScrollTrigger and SplitText would be available globally throughout the app.
gsap.registerPlugin(ScrollTrigger, SplitText)   

const App = () => {


  return (
    <main>
      <Navbar/>
      <Hero/>
      <Cocktails/>
    </main>
  )
}

export default App