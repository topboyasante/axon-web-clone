import React, { useState } from 'react'
import {BiMenuAltLeft} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import Button from './Button'

function Navbar() {
    const [navIsOpen, setNavIsOpen] = useState(false)

    function toggleNav(){
        setNavIsOpen(!navIsOpen)
    }

    const largeNavLinks = [
        {
            id:1,
            title:'Services'
        },
        {
            id:2,
            title:'Industries'
        },
        {
            id:3,
            title:'Work'
        },
        {
            id:4,
            title:'About'
        },
    ]

    const smallNavLinks = [
        {
            id:1,
            title:'Process'
        },
        {
            id:2,
            title:'Clients'
        },
        {
            id:3,
            title:'Insights'
        },
        {
            id:4,
            title:'Careers'
        },
        {
            id:5,
            title:'Knowledge Hub'
        },
        {
            id:6,
            title:'Newsletter'
        },
    ]

  return (
    <>
    <nav className='flex justify-between items-center shadow fixed w-full z-[20] top-0 left-0 h-[7vh] bg-white p-3'>
        {/* Logo */}
        <section>
            <img src="http://axoninfosystems.com/v4/wp-content/uploads/2018/07/axon-logo.png" alt="logo" className='w-[120px] lg:w-[200px]'/>
        </section>
        <section className='flex items-center gap-5'>
            <div className='hidden md:block bg-[#f8a60a] text-white'>
                <Button text={'Get a Free Consultation'}/>
            </div>
            {navIsOpen?<AiOutlineClose size={50} onClick={toggleNav}/>:<BiMenuAltLeft size={50} onClick={toggleNav}/>}
        </section>

       
    </nav>
     {/* Links */}
     <section className={navIsOpen?'fixed w-screen h-screen bg-black top-0 left-0 z-[40] ease duration-500'
     :'fixed w-screen h-screen bg-black top-[-100vh] left-0 z-[30] ease duration-500'}>
            <div className='flex justify-end text-white p-3 gap-5 items-center'>
                <div className='hidden md:block bg-white text-black'>
                    <Button text={'Get a Free Consultation'}/>
                </div>
                <AiOutlineClose size={40} onClick={toggleNav}/>
            </div>

            <section className='flex flex-col justify-center items-center h-[90vh] text-white'>
                <section className='flex flex-row lg:flex-col lg:gap-10 justify-around w-full items-center'>
                    <div className='flex flex-col lg:flex-row gap-10'>
                        {largeNavLinks.map((link)=>{
                            return(
                                <div key={link.id}>
                                    <h1 className='text-3xl lg:text-5xl font-extralight'>{link.title}</h1>
                                </div>
                            )
                        })}
                    </div>
                    
                    <div className='flex flex-col lg:flex-row gap-8'>
                        {smallNavLinks.map((link)=>{
                            return(
                                <div key={link.id}>
                                    <h1 className='text-xl lg:text-2xl font-extralight'>{link.title}</h1>
                                </div>
                            )
                        })}
                    </div>
                </section>
            </section>
     </section>
     </>
  )
}

export default Navbar