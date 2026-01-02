import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
function Hero() {
  
  useGSAP( ()=>{
    const heroSplit = new SplitText('.title', { type: 'chars, words'} ); // SplitTet is Pluggin to split the text and application of animation.
    const paragraphSplit = new SplitText('.subtitle', { type: 'lines'}); // splitting first on the basis of lines.
    heroSplit.chars.forEach((char)=> char.classList.add('text-gradient')); // this is adding some gradient color to MOJITO text, nothing more than that. 
    
    //animation for MOJITO text
    gsap.from(heroSplit.chars, 
        {
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.07
        }
    );

    gsap.from(paragraphSplit.lines,
        {
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06,
            delay: 1,  // this will delay paragraph text 1sec, visible after MOJITO text complete its animation time
        }
    );

    gsap.timeline({
        scrollTrigger:{
            trigger: "#hero",
            start:'top top',
            end: 'bottom top',
            scrub: true
        }
    })
    .to('.right-leaf', {y:200}, 0)
    .to('.left-leaf', {y:-200}, 0 )

}, []); //useGSAP ends


  return (
   <>
    <section id='hero' className='noisy'>
      <h1 className="title">MOJITO</h1>

      <img
       src="/images/hero-left-leaf.png"
       alt="left-leaf"
       className='left-leaf'
      />

      <img
        src="/images/hero-right-leaf.png"
        alt="right-leaf"
        className="right-leaf"
      />

      <div className='body'>
        <div className='content'>
            <div className='space-y-5 hiden md:block'>
             <p>Cool. Crisp. Classic.</p>
             <p className='subtitle'>
                Sip the Spirit <br /> of Summer.
             </p>
            </div>

            <div className='view-cocktails'>
                <p className='subtitle'>Every cocktail on our menu is a blend of premium ingredients,
                creative flair, and timeless reciepes - designed to delight your senses.</p>
                <a href="#cocktails">View Cocktails</a>
            </div>
        </div>
      </div>
    </section>
   </>
  )
}

export default Hero