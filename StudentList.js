import React from "react";
const StudentTable = (props) => {
    const students=props.students;
    const title= props.title;
    return ( 
        <div className="stdtable" key={students.id}>
            <h1>{title}</h1>
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
     );
}
 
export default StudentTable;