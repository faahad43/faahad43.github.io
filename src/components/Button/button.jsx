import React from 'react'

const button = ({label,onClick=''}) => {
  return (
    <div>
        <button className={`bg-[#82B6E3]  inline px-4 py-2 text-white shadow-md hover:shadow-xl rounded-3xl hover:scale-105 duration-200 ease`} onClick={onClick}>{label}</button>
    </div>
  )
}

export default button