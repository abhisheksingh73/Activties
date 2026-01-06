import React,{useState} from "react";
import Form from './Form.jsx'

function ControlledForm(){

    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    

    const [display,setDisplay] = useState(false)
    function handleSubmit(e){
        e.preventDefault()
        setDisplay(true)
    }
  

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label>Enter your Name: </label>
                <input type="text" name="username" value={name} onChange={(e)=>{setName(e.target.value)}}></input>
                <br></br>
                <label>Enter email: </label>
                <input type="email" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
                <button type="submit">Submit</button>
            </form>
            {display && (<Form na={name} em={email} />)}
        </>
    );
}

export default ControlledForm;