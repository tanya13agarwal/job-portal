import React from 'react'

function Tab({ tabData , field , setField , className = ""}) {
  return (
    <div
    style={{
      boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
    }}
    className={`flex bg-[#ffff] p-1 gap-x-1  my-6 rounded-full ${className ? className : "max-w-max"}`}>
      {
        tabData.map((tab) => (
          <button 
          key={tab.id}
          onClick={() => setField(tab.type)}
          className={`${
            field === tab?.type ? 
            "bg-customDarkBlue text-[#ffff]" 
            : "bg-transparent"
          } py-2 px-5 rounded-full transition-all duration-200 w-full`}>
            {tab?.tabName}
          </button>
        ))
      }
    </div>
  )
}

export default Tab