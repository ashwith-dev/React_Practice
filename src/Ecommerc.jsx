import React from 'react'
import { useState , useEffect} from 'react'
import axios from 'axios';

function Ecommerce() {
    const [products,setProducts] = useState([]);

    const productApiCall = async () => {
        try{
            const response = await axios.get("https://api.escuelajs.co/api/v1/products");
            setProducts(response.data);
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        productApiCall();
    },[]);

   
    const priceSearch = async (event) => {
        try{
            const response = await axios.get(`https://api.escuelajs.co/api/v1/products/?price=${event.target.value}`);
            setProducts(response.data);
        }catch(error){
            console.log(error);
        }
    }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
        <h1 className='text-center m-5'>E-Commerce Website</h1>
        <div className="max-w-md mx-auto mb-8">
            <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
            onChange={priceSearch}
            />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.length > 1 ? (
                products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition">
                <img src={product.images[0]} alt={product.title} className="w-full h-60 object-cover"/>
                <div className="p-4">
                    <h1 className="text-lg font-semibold text-gray-800 mb-2">
                        {product.title}
                    </h1>
                    <h2 className="text-blue-600 font-bold text-md">
                        ₹{product.price}
                    </h2>
                </div>
            </div>
            ))
            ) : (
                <div className='flex flex-col justify-center items-center'>
                    <h1 className="text-red-600">No Products Available</h1>
                </div>
            )}
        </div>
    </div>
  )
}

export default Ecommerce