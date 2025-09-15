
import React, { useEffect, useState } from 'react'
import axios from 'axios'
interface Student {
  id: number;
  student_name: string;
  email: string;
  address: string;
  phone: string;
  status: boolean;
  created_at: string;
}
export default function ListStudent() {
    const [students, setStudents] = useState<Student[]>([]);
    const getAllStudents = async () => {
        try {
            const response = await axios.get("http://localhost:8080/students");
            setStudents(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getAllStudents();
    }, []);

    const handleDelete = async (id: number) => {
        const isConfirmDelete = confirm(`ban chắc chắn muốn xóa ${id} ko`);
        if(isConfirmDelete){
            try {
                const response = await axios.get(`http://localhost:8080/students/${id}`);
                setStudents(response.data);
                if(response.status === 200){
                    alert("xóa thành công");
                    setStudents(students.filter(s => s.id !== id));
    
                }
            } catch (error) {
                console.log(error);
            }
        }
    }
  return (
    <div>
        <h2>Quản Lý sinh viên</h2>
        <button>Thêm sinh viên</button>
        <table border={1}>
            <thead>
                <tr>
                    <th>Tên</th>
                    <th>Email</th>
                    <th>Địa chỉ</th>
                    <th>Số điện thoại</th>
                    <th>Trạng thái</th>
                    <th>Lựa chọn</th>
                </tr>
            </thead>
            <tbody>
                {students.map((s) => (
                    <tr key={s.id}>
                        <td>{s.student_name}</td>
                        <td>{s.email}</td>
                        <td>{s.address}</td>
                        <td>{s.phone}</td>
                        <td>{s.status ? "hoạt động" : "ko hoạt động"}</td>
                        <td>
                            <button>Sửa</button>
                            <button onClick={() => handleDelete(s.id)}>Xóa</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
