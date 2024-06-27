"use client"

import { useState } from "react"

const Add = () => {

  const stock = 4

  const [quantity, setQuantity] = useState(1)

  const handleQuantity = (type: 'i' | 'd') => {
    if(type === 'd' && quantity > 1){
      setQuantity((prev) => prev-1)
      
    }
    if(type === 'i' && quantity < stock){
      setQuantity((prev) => prev+1)
    }
  }
  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium">Quantity</h4>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-gray-300 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
            <button className="cursor-pointer text-xl" onClick={() => handleQuantity('d')}>-</button>
            {quantity}
            <button className="cursor-pointer text-xl" onClick={() => handleQuantity('i')}>+</button>
          </div>
        
      </div>
      <div className="text-xs">
        Last <span className="text-red-600">{stock} units</span> remaining <br /> Dont miss it
      </div>
      <button className="w-36 text-sm rounded-3xl ring-1 ring-cartRed text-cartRed py-2 px-4 hover:bg-cartRed hover:text-white disabled:cursor-not-allowed 
      disabled:bg-pink-200 disabled:text-white disabled:ring-none h-12">
        Add to Cart
      </button>
      </div>
    </div>
  )
}

export default Add