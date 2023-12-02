import React, { useEffect } from 'react'
import borimg from './../assets/border.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Invite() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div
 
    id='maindiv' className='mt-[200vh] flex flex-col items-center box-border px-[1rem] justify-center  font-GreatVibes '>
        <div 
          //  data-aos="flip-up" 
          //  data-aos-duration="2000"
        className='h-[100vh] w-[100vw]  flex flex-col items-center  justify-center '>
           <h1 className=' text-[5vw] text-center' id='inviting'> Inviting You To Celebrate Our Engagement</h1>
            
        </div>



        <div data-aos="fade-up" 
            data-aos-duration="2000"
            data-aos-anchor-placement="center-bottom"
        className='h-[100vh] py-[5rem] w-[100vw] snap-center flex flex-col items-center  justify-between  '>
           {/* <div className=''> */}

           
           <img className=' ' src={borimg} alt="" id='borimg' />

            <h1 className='font-Cormorant' id='we'> We Cordally Invite You For The Engagement Party Of</h1>
           
           
            <div className='flex flex-col items-center ' id='namess'>
                <h1>Krishna Prasad</h1>
                <h1>&</h1>
                <h1>Kavya</h1>
            </div>
            
            <img className=' ' src={borimg} alt="" id='borimg' />

           {/* </div> */}
        </div>



        <div className='h-[100vh] py-[5rem] w-[100vw] flex flex-col items-center  justify-between  '>
            <div className='font-Cormorant flex mb-10 p-9 text-[#CDDBE7] flex-col h-[40vh] text-[1.5rem] items-start justify-between'>
            <h1> Venue: At Brides Residence</h1>
            <h1>Address: Ketharam,Cheriyedath House Kadalundi Nagaram  P.O Vallikkunnu</h1>
            <h1> Date: 17th December 2023, Sunday</h1>
            <h1> Time: 10 - 10:30am</h1>

            </div>
            <h1  id='inviting'> Thank You</h1>
           <img className=' ' src={borimg} alt="" id='borimg' />

        </div>
    </div>
  )
}
