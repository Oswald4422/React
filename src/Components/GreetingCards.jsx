import React from 'react'

const GreetingCards = ({title, message}) => {
  return (
    <div className='border p-8 h-72 flex item-center '>
      <h1>{title}</h1>
      <p>{message}</p>
    </div>
  )
}

export default GreetingCards
