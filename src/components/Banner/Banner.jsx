import React from 'react'
import Containar from '../../layout/Containar'
import BannerLeft from './BannerLeft'
import BannerRight from './BannerRight'

const Banner = () => {
  return (
    <section>
        <Containar>
            <div className="flex items-center justify-between pt-[40px]">
                <BannerLeft />
                <BannerRight />
            </div>
        </Containar>
    </section>
  )
}

export default Banner