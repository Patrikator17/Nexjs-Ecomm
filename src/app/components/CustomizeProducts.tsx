const CustomizeProducts = () => {
  return (
    <div className="flex flex-col gap-6">
      {/* Colors */}
        <h4 className="font-medium ">Color Options</h4>
        <ul className="flex items-center gap-3">
          {/* Selected Option*/}
          <li className="w-8 h-8 rounded-full ring-1 ring-gray-400 cursor-pointer relative bg-red-500">
            <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
          </li>
          {/* Unselected Options */}
          <li className="w-8 h-8 rounded-full ring-1 ring-gray-400 cursor-pointer relative bg-blue-500">
          </li>
          {/* Out of Stock */}
          <li className="w-8 h-8 rounded-full ring-1 ring-gray-400 cursor-not-allowed relative bg-green-500">
            <div className="absolute w-10 h-[2px] bg-red-400 rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
          </li>
        </ul>
        {/* Sizes */}
        
        <h4 className="font-medium">Size Options</h4>
        <ul className="flex items-center gap-3">
          <li className="ring-1 ring-cartRed text-cartRed rounded-md py-1 px-4 text-sm cursor-pointer w-20 h-10 flex items-center justify-center">Small</li>
          <li className="ring-1 ring-cartRed text-white bg-cartRed rounded-md py-1 px-4 text-sm cursor-pointer w-20 h-10 flex items-center justify-center">Medium</li>
          <li className="ring-1 ring-pink-200 text-white bg-pink-200 rounded-md py-1 px-4 text-sm cursor-not-allowed w-20 h-10 flex items-center justify-center">Large</li>
        </ul>
    </div>
  )
}

export default CustomizeProducts