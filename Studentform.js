import { useState } from "react";
import React from "react";
const Studentform = () => {
    const [name, Setname] = useState('');
    const [reg, Setreg] = useState('');
    const [error, Seterror] = useState(null);


    const handlesubmit= async(e)=>{
        e.preventDefault()
        const student={name,reg}

        try{
            const response= await fetch('/api/student',{
            method: 'POST',
            body: JSON.stringify(student),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const json=await response.json()

        if(!response.ok){
            Seterror(json.error)
        }else{
            Setname('')
            Setreg('')
            Seterror(null)
            console.log('New Student added',json)
        }
    }
    catch(error){
        console.error('Error:', error);
        Seterror('Failed to submit the form. Please try again.');
    }
    }
    return ( 
        <form onSubmit={handlesubmit}>
            <h1>Student Creation form</h1>
            <label>Name</label>
            <input 
            type="text"
            onChange={(e)=> Setname(e.target.value)}
            value={name} 
            />
            <label>Registration Number</label>
            <input 
            type="text"
            onChange={(e)=> Setreg(e.target.value)}
            value={reg} 
            />
            <button>Add Student</button>
            {error && <div className="error">{error}</div>}
        </form>
     );
}
 
export default Studentform;