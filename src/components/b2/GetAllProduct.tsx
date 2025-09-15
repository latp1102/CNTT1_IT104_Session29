import React, { useEffect } from 'react'
import { getAllProduct, type Product } from './GetAll'

export default function GetAllProduct() {
    useEffect(() => {
        getAllProduct().then((products: Product[]) => {
          console.log("danh sách: ", products);
          
        })
    }, [])
  return (
    <div>
        <h1>Danh sách sản phẩm</h1>
    </div>
  )
}
