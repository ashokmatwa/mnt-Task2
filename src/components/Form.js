import React, { useState } from 'react'


export default function Form() {

    const [number, setNumber] = useState(" ");
    const [string, setString] = useState(" ");

    function handleNumber(e){
        console.log("number");
        let newNumber = e.target.value;
        let regex = /^[0-9]+$/;
        if(newNumber.match(regex))
        // if(!isNaN(newNumber))
            setNumber(newNumber);
        else alert("not a number");
    }
    function handleString(e){
        console.log("string");
        let newString = e.target.value;
        let regex = /^[a-zA-Z]+$/;

        if(newString.match(regex))
        // if(isNaN(newString))
            setString(newString);
        else alert("not a string");
    }
    
    function myFunction(){
        console.log("function");
    }

    // function handleForm(e){ // to prevent in loading the page 
    //     e.preventDefault();
    // }


  return (
    <div>
      {/* <form onSubmit={handleForm}> */}
        <label for="number">input a number</label>
        <input type='text' id='number' name='number' onChange={handleNumber}></input>

        <br></br>
        <label for="string">input a string</label>
        <input type='text' id='string' name='string' onChange={handleString}></input>

        <br></br>
        <input type="submit" onClick={myFunction}></input>
      {/* </form> */}

      <div>
        <h4>Number={number}</h4>
        <h4>String={string}</h4>
      </div>
      
    </div>
  );
}