import React from 'react'
import Containar from '../../layout/Containar'

const Categories = () => {
  return (
    <section className='pt-[153px] pb-[95px]'>
        <Containar>
            <div className='flex items-center gap-x-4'>
                <div className='w-5 h-10 rounded bg-primary'></div>
                <p className='font-primary text-base leading-5 font-semibold text-primary'>Categories</p>
            </div>
            <div className='mt-3'>
                <h3 className='font-secondary font-semibold text-black text-4xl leading-12'>Browse By Category</h3>
            </div>
        </Containar>
    </section>
  )
}

export default Categories