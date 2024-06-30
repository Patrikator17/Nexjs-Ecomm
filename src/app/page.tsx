// "use client"

// import { useContext, useEffect } from "react"
// import CategoryList from "./components/CategoryList"
// import ProductList from "./components/ProductList"
// import Slider from "./components/Slider"
// import { WixClientContext } from "./context/wixContext"

// const HomePage = () => {

//   const wixClient = useContext(WixClientContext)

//   useEffect(() => {
//     const getProducts = async() => {
//       const res = await wixClient.products.queryProducts().find();
//       console.log(res)
//     }

//     getProducts()
//   }, [wixClient])
  



//   return (
//     <div className=''>
//       <Slider />
//       <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
//         <h1 className="text-2xl">Trending Products</h1>
//         <ProductList />
//       </div>
//       <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
//         <h1 className="text-2xl mb-12">Categories</h1>
//         <CategoryList />
//       </div>
//       <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
//         <h1 className="text-2xl">Just In</h1>
//         <ProductList />
//       </div>
//     </div>
//   )
// }

// export default HomePage

"use client"

import { useContext, useEffect } from "react"
import CategoryList from "./components/CategoryList"
import ProductList from "./components/ProductList"
import Slider from "./components/Slider"
import { WixClientContext } from "./context/wixContext"

const HomePage = () => {
  const wixClient = useContext(WixClientContext)

  useEffect(() => {
    const getProducts = async () => {
      try {
        if (!wixClient || !wixClient.products) {
          throw new Error("Wix client or products module is not initialized correctly")
        }
        
        const res = await wixClient.products.queryProducts().find()
        console.log("Products:", res)
      } catch (error) {
        console.error("Error fetching products:", error)
      }
    }

    getProducts()
  }, [wixClient])

  return (
    <div>
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Trending Products</h1>
        <ProductList />
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl mb-12">Categories</h1>
        <CategoryList />
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Just In</h1>
        <ProductList />
      </div>
    </div>
  )
}

export default HomePage
