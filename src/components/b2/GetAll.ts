interface Product {
  id: number;
  product_name: string;
  image: string;
  price: number;
  quantity: number;
  created_at: string; 
}

export async function getAllProduct(): Promise<Product[]> {
  try {
    const response = await fetch("http://localhost:8080/product");
    const data: Product[] = await response.json();
    return data;
  } catch (error) {
    console.error("error", error);
    return [];
  }
}
