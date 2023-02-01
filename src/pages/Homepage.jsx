import React from 'react'
import Button from '../assets/components/general/Button'

function Homepage() {
  return (
    <main className='pt-[12vh]'>
        {/* Hero Section */}
        <section className='max-w-[1600px] lg:h-[88vh] mx-auto flex flex-col justify-center p-5'>
            <main className='flex md:flex-col md:gap-5 md:justify-center lg:flex-row lg:justify-around items-center'>
               {/* Text Area */}
                <section className='lg:w-[45%]'>
                    <h1 className='text-3xl lg:text-6xl font-extrabold w-full'>We design, develop and modernize software applications.</h1>
                    <br />
                    <p className='text-xl lg:text-3xl font-extralight w-full'>Engage Axon to build a remote, 
                      Agile software development team to co-create or update your digital product with the latest web, 
                      mobile and cloud technologies.
                    </p>
                    <br />
                    {/* CTA Buttons */}
                    <section className='flex flex-col md:flex-row gap-5'>
                      <div className='border border-[#f8a60a] text-[#f8a60a] hover:bg-[#f8a60a] hover:text-white ease duration-500 text-center'>
                        <Button text={`Explore Services`}/>
                      </div>
                      <div className='border border-[#f8a60a] text-[#f8a60a] hover:bg-[#f8a60a] hover:text-white ease duration-500 text-center'>
                        <Button text={`View Client Success Stories`}/>
                      </div>
                    </section>
                </section>

                {/* Form */}
                <section className='bg-[#1b5488] lg:w-[30%] h-full shadow-5xl hidden md:flex flex-col justify-center items-center px-5 py-8'>
                  <h1 className='text-[#f8a60a] text-4xl w-[85%] font-extrabold '>
                    Have A Project in Mind? Chat With Our Experts.
                  </h1>
                  <form action="" className='w-[85%]'>
                      <input type="text"  placeholder='NAME*' className='w-full px-2 py-4 my-5'/>
                        <input type="email"  placeholder='EMAIL*' className='w-full px-2 py-4 my-5'/>

                        <div className='w-full flex items-center gap-3 my-5'>
                          <select name="country-code" id="country-code" className='w-[30%] px-2 py-4'>
                            <optgroup>
                              <option value="+233">+233</option>
                            </optgroup>
                          </select>
                          <input type="email" className='w-[70%] px-2 py-4 my-2'/>
                        </div>

                        <textarea name="message" rows={4} className='w-full resize-none my-2'></textarea>

                        <div className='bg-[#f8a60a] text-center text-white font-extrabold text-xl'>
                        <Button text={`Get In Touch`}/>
                        </div>
                  </form>
                </section>
            </main>
        </section>
    </main>
  )
}

export default Homepage