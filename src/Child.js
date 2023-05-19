import React from 'react'

const Child = () => {

  function handleException(){
    throw new Error("Exception Thrown");
  }

  return (
    <div className='btn' onClick={handleException}>Throw Exception</div>
  )

}

export default Child