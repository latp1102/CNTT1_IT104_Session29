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
export async function getAllStudents(): Promise<Student[]> {
    try {
        const response = await axios.get("http://localhost:8080/students");
        console.log("Danh sách: ", response.data);
        return response.data;
    } catch (error) {
        console.log(error);
        return [];
        
    }
    
}