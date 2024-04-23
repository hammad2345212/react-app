import { useEffect, useState } from "react";
import React from "react";
import Studentform from "../Components/Studentform";

const Homepage = () => {
    const [Students, setStudents] = useState(null)
    useEffect(() => {
        const fetchstudent = async () => {
            const response = await fetch('/api/student')
            const json = await response.json()
            if (response.ok) {
                setStudents(json)
            }
        }
        fetchstudent()
    }, [])
    return (
        <div className="home">
            <div>
            <table className="studentslist">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Registration</th>
                    </tr>
                </thead>
                <tbody>
            {Students && Students.map((student) => {
                return<tr key={student._id}>
                    <td>{student.name}</td>
                    <td>{student.reg}</td>
                    </tr>;
            })}
            </tbody>
            </table>
        </div>
        <Studentform />
        </div>
    );
}

export default Homepage;