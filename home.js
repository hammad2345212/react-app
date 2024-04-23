import React from "react";
import { useState } from "react";
import StudentList from './StudentList';

const Home = () => {
    const [students, setstudents]=useState([
        {id:1, name:'Hammad ali' ,Registration:'L1F20BSCS0667' ,Faculty:'Faculty of Information technology'},
        {id:2, name:'Rafia Ahmed' ,Registration:'L1F20BSCS0618', Faculty:'Faculty of Information technology'},
        {id:3, name:'Samran Khalil' ,Registration:'L1F20BSCS0432', Faculty:'Faculty of Information technology'},
    ])

    const [name, setname]= useState('Justin')
    const handlesubmit=()=>{
        setname('Justin Beiber')
    }
    const Hsubmit=(operation)=>{
        console.log('data is '+operation)
    }
    
    return ( 
        <div>
        <p>{name}</p>
        <button type="submit" onClick={handlesubmit}>Click me</button>
        <button type="submit" onClick={()=>{
            Hsubmit('good')
        }}>aGAIN</button>
        <StudentList students={students} title="Student List"/>
        <StudentList students={students.filter((Student)=> Student.name === 'Hammad ali')} title="Hammad's Info"/>
        </div> 
    );
}
 
export default Home;
