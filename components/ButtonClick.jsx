import React from 'react'

export const ButtonClick = ({text, className, handler}) => {
  return (
    <button onClick={handler} className={className}>
      {text}
    </button>
  )
}



