import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';

function Hero() {

  const videoRef = useRef(); // useRef using for video
  const isMobile = useMediaQuery({ maxWidth: 767 }); //media quesry for mobile

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
    .to('.left-leaf', {y:-200}, 0 );

    const startValue = isMobile ?  'top 50%' : 'center 60%'; //Incase of mobile measures changes, so we have dynamic condition
    const endValue = isMobile ? '120% top' : 'bottom top;';

    // video animation timeline
    //create the timeline with a default duration
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '#hero',
            start: startValue,
            end: endValue,
            scrub: true,
            pin: true, //this will make video stuck on the display untill user scrolls
        }
    })

    videoRef.current.onloadedmetadata = () => {
        tl.to( videoRef.current,{
            currentTime: videoRef.current.duration
        })
    }

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

    <div className='video absolute inset-0'>
        <video
            ref={videoRef}
            playsInline
            muted
            preload='auto'
            src="/videos/output.mp4"
            
        />
    </div>
   </>
  )
}

export default Hero