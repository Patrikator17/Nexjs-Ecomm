// "use client"

import { Suspense, useContext, useEffect } from "react"
import CategoryList from "./components/CategoryList"
import ProductList from "./components/ProductList"
import Slider from "./components/Slider"
import { WixClientContext } from "./context/wixContext"
import { useWixClient } from "@/hooks/useWixClient"
import { myWixClientServer } from "@/lib/wixClientServer"

// const HomePage = () => {
//   const wixClient = useWixClient() // custom hook

//   useEffect(() => {
//     const getProducts = async () => {
//       try {
//         if (!wixClient || !wixClient.products) {
//           throw new Error("Wix client or products module is not initialized correctly")
//         }
        
//         const res = await wixClient.products.queryProducts().find()
//         console.log("Products:", res)
//       } catch (error) {
//         console.error("Error fetching products:", error)
//       }
//     }

//     getProducts()
//   }, [wixClient])

const HomePage = async() => {
  // const wixClient = await myWixClientServer()

  // const res = await wixClient.products.queryProducts().find()
  // console.log(res);
  

  return (
    <div>
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Trending Products</h1>
        <Suspense fallback={"loading"}>
          <ProductList categoryId={process.env.FEATURED_PRODUCTS_CATEGORY_ID!} limit = {4}/>
        </Suspense>
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl mb-12">Categories</h1>
        <Suspense fallback={"loading"}>
          <CategoryList />
        </Suspense>
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Just In</h1>
        <ProductList categoryId={process.env.FEATURED_PRODUCTS_CATEGORY_ID!} limit = {4}/>
      </div>
    </div>
  )
}

export default HomePage
