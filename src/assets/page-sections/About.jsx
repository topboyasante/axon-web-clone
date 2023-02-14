import React from 'react'
import Button from '../components/general/Button'

function About() {
  return (
    <main className='max-w-[1600px] mx-auto h-full p-5'>
        <section className='w-full h-full'>
            <img src="https://nearindex.com/img/D_ki7DCsLA9yIz_Ur5VQ50JVZIEwsnbVaXFAuzesfR0192SGS8OG4a7h0D9Br4TYOPbOxmFv6PYNwPDNZLadyCFeVdpQ81MjJqUuYb86laaoJzbKQkdKNMDpxXzVdXXBZgtxIrxCh7J1taL2XsfEEKhL25tQ596rSXhwq_Fn3pqAtSxFPvGCNYG3TzUQ576SrRoLWheybvwb8utHd2zojnOtqJp4qOdT9mi1lA4gc8TmknEHBXGfAw3uddaREovi" 
            alt="about"
            className='w-screen'/>
           <section className='flex flex-col lg:flex-row items-center'>
            <section className='bg-[#f9d94e] lg:w-[50%] p-5'>
                    <h1 className='text-xl xl:text-xl tracking-widest font-extrabold'>CREATE SOFTWARE AND APPS TO MEET YOUR CUSTOMER NEEDS</h1>
                    <br />
                    <p className='text-2xl xl:text-5xl font-extralight'>Work with a software company that develops products & platforms that elevate your customers’ 
                        experience, earn their loyalty & grow your business.
                    </p>
                </section>
                <section className='lg:w-[50%] p-5'>
                        <p>Axon is transforming the identity of the traditional software company. 
                        We’re taking the conventional developer “design and build” model and flipping it on its head.</p>
                        <br />
                        <p>Few custom software development companies offer an innovative, end-to-end agile development process. 
                        Our transformative solutions excite users and drive revenue while reducing your development headaches.</p>
                        <br />
                        <div className='text-xl border border-[#f8a60a] text-[#f8a60a] hover:bg-[#f8a60a] hover:text-white ease duration-500 text-center lg:w-[70%] font-bold'>
                            <Button text={`Learn About our Capabilities and Culture`}/>
                        </div>
                </section>
           </section>
        </section>
    </main>
  )
}

export default About