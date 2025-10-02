import React from 'react'
import singupimg from '../assets/singupimg.png'

const Registration = () => {
  return (
    <section className='pt-[60px] pb-[140px]'>
        <div className='flex'>
        <div>
            <img src={singupimg} alt="" />
        </div>
        <div className='ml-[129px] mt-[125px]'>
            <h2 className='font-secondary font-medium text-[36px] leading-[30px]'>Create an account</h2>
            <p className='font-primary text-[16px] leading-[24px] mt-[24px]'>Enter your details below</p>
            <form>
                <input type="text" placeholder='Name' />
                <input type="text" placeholder='Name' />
                <input type="text" placeholder='Name' />
                <input type="text" placeholder='Name' />
            </form>
        </div>
    </div>
    </section>
  )
}

export default Registration