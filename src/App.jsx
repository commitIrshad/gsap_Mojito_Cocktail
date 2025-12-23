import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all';
import { useGSAP } from '@gsap/react';

// Need to registeer them becausue they dont get automatically get activated. So, using registerPlugin().
// And below line make sure that ScrollTrigger and SplitText would be available globally throughout the app.
gsap.registerPlugin(ScrollTrigger, SplitText)   

const App = () => {

  useGSAP(

  );  

  return (
    <div className="flex-center h-[100vh]">
        <h1 className="text-3xl text-indigo-300">Hello GSAP</h1>

    </div>
  )
}

export default App