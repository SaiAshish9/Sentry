import React from 'react'
import * as Sentry from "@sentry/react";

const Child = () => {

  function handleException(){
    Sentry.captureMessage("this is a debug message", "debug");
    console.log("Test")
    // throw new Error("Exception Thrown");
  }

  return (
    <div className='btn' onClick={handleException}>Throw Exception</div>
  )

}

export default Child