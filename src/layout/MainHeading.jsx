import React from 'react'

const MainHeading = ({children}) => {
  return (
    <div className="flex items-center gap-x-4">
          <div className="w-5 h-10 rounded bg-primary"></div>
          <p className="font-primary text-base leading-5 font-semibold text-primary">
            {children}
          </p>
        </div>
  )
}

export default MainHeading