
import React from 'react'

const NewForm = () => {

    function handle(){
        console.log("function clicked");
    }

  return (
    <div>
        TEXT: <input type='text'></input>
        NUMBER: <input type='number'></input>
        <input type='submit' onClick={handle}></input>
    </div>
  )
}

export default NewForm
