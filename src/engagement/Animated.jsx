import React from "react";
import { useLayoutEffect,useRef } from "react";
import gsap from "gsap";
import Invite from "./Invite";
import borimg from './../assets/border.png'




export default function Animated() {
  const comp = useRef(null)

  useLayoutEffect(()=>{
    let anim =gsap.context(()=>{
      const t1=gsap.timeline()

      t1.from('#intro_slide',{
        xPercent:'-100',
        duration:0.7,
        delay:0.7
      }).from(['#title-1','#title-2','#title-3'],{
        opacity:0,
        y:'+30',
        stagger:0.9
      })
      .from('#borimg',{
        opacity:0.7,
        duration:.4
      })
    //   .to(['#title-1','#title-2','#title-3'],{
    //     opacity:0,
    //     y:-30,
    //     delay:.5,
    //     stagger:0.3,
    //   })
    .to('#intro_slide',{
        xPercent:-100,
        delay:1.6,
        duration:1.2
      })
    },comp)
    return () => anim.revert()
})

  return (
    <div className="relative" ref={comp}>

        <div id="intro_slide" className="w-screen h-screen  bg-blue-500 absolute top-0 left-0 z-10 flex flex-col gap-7 text-[5rem] tracking-tighter">

        <div
        className='h-[100vh] py-[5rem] w-[100vw] snap-center flex flex-col items-center  justify-between  '>
     

           
           <img className=' '  src={borimg} alt="" id='borimg' />

           
           
            <div className='flex flex-col items-center font-Cormorant ' id='namess'>
                <h1  id="title-1">Krishna Prasad</h1>
                <h1  id="title-2">&</h1>
                <h1  id="title-3">Kavya</h1>
            </div>
            
            <img className=' ' src={borimg} alt="" id='borimg' />

           {/* </div> */}
        </div>
        </div>

        <div className="w-screen h-screen flex items-center justify-center">
        <Invite/>
        </div>




    </div>
  );
}




















// // const { useEffect, useState } = React;
// import { useEffect,useState } from "react";
// import gsap from "gsap";


// export default function Animation_Gsap() {
  
//   // const onEnter = ({ currentTarget }) => {
//   //   gsap.to(currentTarget, { backgroundColor: "#e77614", scale: 1.2, rotate:10, translateY:200 });
//   // };
  
//   // const onLeave = ({ currentTarget }) => {
//   //   gsap.to(currentTarget, { backgroundColor: "#28a92b", scale: 1, rotate:0, translateY:0});
//   // };
  
//   return (
//     <div className="">
//       {/* <div className="box px-10 py-10" onMouseEnter={onEnter} onMouseLeave={onLeave}>
//         Hover Me
//       </div> */}

//     </div>
//   );
// }



//?  /////////REPO FOR STARTIG AN ANIMATION USING GSAP ANIMATION//////////////////////////

// import React from "react";
// import { useLayoutEffect,useRef } from "react";
// import gsap from "gsap";


// export default function Animation_Gsap() {
//   const comp = useRef(null)

//   useLayoutEffect(()=>{
//     let anim =gsap.context(()=>{
//       const t1=gsap.timeline()
//     },comp)
    

//     return () => anim.revert()
//   })

//   return (
//     <div className="relative" ref={comp}>

//         <div id="intro_slide" className="w-screen h-screen p-[5rem] bg-slate-500 absolute top-0 left-0 z-10 flex flex-col gap-7 text-[5rem] tracking-tighter">
//           <h1 id="title-1">SACHIN</h1>
//           <h1 id="title-2">Just NUKE It</h1>
//           <h1 id="title-3">center Div</h1>
//         </div>

//         <div className="w-screen h-screen flex items-center justify-center">
//           <h1 className="font-serif text-[4rem]">Welcome</h1>
//         </div>



//     </div>
//   );
// }
