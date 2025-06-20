import React from 'react'

const SubHeading = ({children}) => {
  return (
    <div className="mt-3">
          <h3 className="font-secondary font-semibold text-black text-4xl leading-12">
            {children}
          </h3>
        </div>
  )
}

export default SubHeading