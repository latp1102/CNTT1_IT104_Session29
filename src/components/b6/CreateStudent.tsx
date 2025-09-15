import React, { useEffect } from "react";
import axios from "axios";

interface Student {
  id: number;
  student_name: string;
  email: string;
  address: string;
  phone: string;
  status: boolean;
  created_at: string;
}

export default function CreateStudent() {
  const createStudent = async () => {
    const newStudent: Student = {
      id: Math.floor(Math.random() * 1000), 
      student_name: "Nguyen Van A",
      email: "vana@example.com",
      address: "Hà Nội",
      phone: "0123456789",
      status: true,
      created_at: new Date().toISOString(),
    };

    try {
      const response = await axios.post("http://localhost:8080/students", newStudent);
      console.log("Kết quả từ server:", response.data);
    } catch (error) {
      console.error("error:", error);
    }
  };

  useEffect(() => {
    createStudent();
  }, []);

  return (
    <div>
      <h2>Thêm mới sinh viên</h2>
    </div>
  );
}
