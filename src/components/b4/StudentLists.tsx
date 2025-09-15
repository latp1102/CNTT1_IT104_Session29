import React, { useEffect } from 'react'
import { getAllStudents } from './Student'

export default function StudentLists() {
    useEffect(() => {
        getAllStudents();
    })
  return (
    <div>
        <h2>Danh sách sinh viên</h2>
    </div>
  )
}
