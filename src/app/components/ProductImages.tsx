"use client"

import Image from "next/image"
import { useState } from "react";

// const images = [
//     {
//         id: 1, url: 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
//     },
//     {
//         id: 2, url: 'https://images.pexels.com/photos/161573/background-water-breakfast-bright-161573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
//     },
//     {
//         id: 3, url: 'https://images.pexels.com/photos/1630588/pexels-photo-1630588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
//     },
//     {
//         id: 4, url: 'https://images.pexels.com/photos/952365/pexels-photo-952365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
//     },
// ]



const ProductImages = ({items}:{items:any}) => {

    const [index, setIndex] = useState(0);

  return (
    <div className="">
      <div className="h-[500px] relative">
        <Image
          src={items[index].image?.url}
          alt=""
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex justify-start gap-4 mt-8">
        {items.map((item:any, i:number) => (
          <div
            className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"
            key={item._id}
            onClick={() => setIndex(i)}
          >
            <Image
              src={item.image?.url}
              alt=""
              fill
              sizes="30vw"
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductImages