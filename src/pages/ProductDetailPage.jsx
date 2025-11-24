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
    <div>
      <div className="min-w-screen h-auto bg-blue-300 flex items-center justify-between mt-20 py-5">
        <img src={singleItem.image} alt="" />

        <div className="flex flex-col pr-50">
          <h1>Tilte:{" " + singleItem.title}</h1>
          <h1>Category:{" " + singleItem.category}</h1>
          <h1>price:{" " + singleItem.price}</h1>
          <p>{singleItem.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage
