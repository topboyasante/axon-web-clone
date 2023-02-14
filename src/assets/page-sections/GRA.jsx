import React from 'react'
import Button from '../components/general/Button'

function GRA() {
  return (
    <main className='w-full h-full'>
    <section className='max-w-[1600px] mx-auto h-full py-5'>
      <h1 className='text-3xl xl:text-6xl font-extrabold p-5'>Leverage Our Data-Driven Approach to Separate Yourself From Your Competition</h1>
      <section className='xl:relative my-5 p-5'>
          <img src="https://www.netsolutions.com/assets/images/net-solutions-analytical-graphs-tablet-devices.webp" alt="hubpix" className=''/>

          <div className="xl:absolute bg-white bottom-0 left-[5em] xl:w-[40%] p-5 lg:p-[3em] flex flex-col justify-center items-center lg:items-start">
            <img src="https://ugmedicalcentre.org/front/images/ugmclogo.jpg" alt="hubpix" className='w-[200px]'/>
            <p className='font-extralight xl:text-xl my-5'>Here at Net Solutions, we practice what we preach. 
            We created a one-of-a-kind mobile monitoring platform that provides a 360° view of our own software company that provides our expert CXOs with cutting-edge data analytics and insights at the touch of a button. 
            Our expert team saw this project to the finish line, through multiple iterations, to ensure the best possible results internally and for clients.
            </p>
            <div className='text-xl border border-[#f8a60a] text-[#f8a60a] hover:bg-[#f8a60a] hover:text-white ease duration-500 text-center lg:w-[70%] font-bold'>
              <Button text={`Read the Success Story`}/>
            </div>
          </div>
      </section>
    </section>
  </main>
  )
}

export default GRA