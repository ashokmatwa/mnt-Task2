import React, { useState } from 'react'


export default function Form() {

    const [number, setNumber] = useState(" ");
    const [string, setString] = useState(" ");

    function handleNumber(){
        console.log("number");
        let newNumber = document.getElementById('number').value;
        if(!isNaN(newNumber))
            setNumber(newNumber);
        else alert("not a number");
    }
    function handleString(){
        console.log("string");
        let newString = document.getElementById('string').value;
        if(isNaN(newString))
            setString(newString);
        else alert("not a string");
    }
    
    function myFunction(){
        console.log("function");

        handleNumber();
        handleString();

       /* let newNumber = document.getElementById('number').value;

        // if(typeof newNumber==="string") alert("not a number");
        //if(newNumber==="string") alert("not a number");
        //if(number==0) alert("not a number");
        // if(typeof newNumber === "number")

        if(!isNaN(newNumber))
            setNumber(newNumber);
        else alert("not a number");

        let newString = document.getElementById('string').value;
        //if(typeof newString === "string")
        if(isNaN(newString))
            setString(newString);
        else alert("not a string");

        console.log(typeof newNumber);
        console.log(typeof newString); */
    }

    // const myFunction = () => {
    //     console.log("function")
    // }

    // function handleForm(e){ // to prevent in loading the page 
    //     e.preventDefault();
    // }


  return (
    <div>
      {/* <form onSubmit={handleForm}> */}
        <label for="number">input a number</label>
        {/* <input type='number' id='number' name='number'></input> */}
        <input type='text' id='number' name='number'></input>
        {/* <input type='text' id='number' name='number' onChange={handleNumber}></input> */}

        <br></br>
        <label for="string">input a string</label>
        {/* <input type='string' id='string' name='string'></input> */}
        <input type='text' id='string' name='string'></input>
        {/* <input type='text' id='string' name='string' onChange={handleString}></input> */}

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

// Form.propTypes = {
//     number : PropTypes.number,
//     string : PropTypes.string
// }