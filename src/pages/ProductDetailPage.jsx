import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchStore } from '../stores/fetchStore'

const ProductDetailPage = () => {
    const {id}=useParams()
     const {fetchSingleItem,singleItem}=fetchStore()
     useEffect(() => {
       fetchSingleItem(id);
     }, [fetchSingleItem]);
     console.log(singleItem)
    
  return (
    <div className="flex justify-center mt-20 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-6 max-w-4xl w-full flex flex-col md:flex-row gap-8">
        {/* Product Image */}
        <div className="flex-shrink-0 flex justify-center items-center">
          <img
            src={singleItem.image}
            alt={singleItem.title}
            className="w-64 h-64 object-contain rounded-xl bg-gray-100 p-4"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-between">
          <h1 className="text-3xl font-bold text-gray-800 mb-3">
            {singleItem.title}
          </h1>

          <p className="text-sm text-gray-500 mb-2">
            Category:{" "}
            <span className="font-medium text-gray-700">
              {singleItem.category}
            </span>
          </p>

          <p className="text-lg font-semibold text-blue-600 mb-4">
            ₹ {singleItem.price}
          </p>

          <p className="text-gray-600 leading-relaxed">
            {singleItem.description}
          </p>

          
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage
