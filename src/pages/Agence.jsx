import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger";


const Agence = () => {

  gsap.registerPlugin(ScrollTrigger);

  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

  const imageArray = [
    'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg'
  ];

  useGSAP(function () {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        //markers: true,
        start: 'top -0',
        end: 'top -150%',
        pinSpacing: true,
        pinReparent:true,
        pinType: 'transform',
        pin: true,
        scrub: 1,
        anticipatePin:1,
        invalidateOnRefresh:true,
        onUpdate: (elem)=>{
          let imageIndex;
          if(elem.progress < 1){
            imageIndex = Math.floor(elem.progress * imageArray.length);
          } else {
            imageIndex = imageArray.length - 1; 
          }
          imageRef.current.src = imageArray[imageIndex]

        }
      }
    })
  })

  return (
    <div>
      <div className='section1 relative py-1'>
        <div ref={imageDivRef} className='absolute overflow-hidden rounded-3xl h-[20vw] w-[15vw] top-[10vw] left-[30vw]'>
          <img ref={imageRef} className='h-full w-full object-cover' src='https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg'></img>
        </div>
        <div className='relative font-[font2]'>
          <div className='mt-[55vh]'>
            <h1 className='text-[20vw] text-center uppercase leading-[17vw]'>Soixan7e <br />
              Douze</h1>
          </div>
          <div className='pl-[40%] mt-20'>
            <p className='text-5xl '>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux
              gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité,
              une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on
              la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour
              bâtir des marques influentes.</p>
          </div>
        </div>
      </div>
      <div className="section2 h-screen">

      </div>
    </div>
  )
}

export default Agence
