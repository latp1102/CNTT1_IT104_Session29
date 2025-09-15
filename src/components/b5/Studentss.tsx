import React, { useEffect, useState } from 'react'
import axios from 'axios';

interface Studentss {
    id: number;
    name: string;
    age: number
}

export default function Studentss() {
    const [students, setStudents] = useState<Studentss | null>(null);

    const getStudentById = async (id: number) => {
        try {
            const response = await axios.get(`http://localhost:8080/studentss/${id}`);
            if(response.data){
                setStudents(response.data);
            } else {
                setStudents(null);
                alert("ko tìm thấy");
            }
        } catch(error) {
            console.log(error);
            setStudents(null);
            alert("ko tìm thấy");
        }
    }
    useEffect(() => {
        getStudentById(2);
    }, []);
  return (
    <div>
        <h2>Thông tin sinh viên</h2>
        {students && (
            <div>
                <p>id: {students.id}</p>
                <p>tên: {students.name}</p>
                <p>email: {students.age}</p>
            </div>
        )}
    </div>
  )
}
