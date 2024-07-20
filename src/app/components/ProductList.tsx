import { myWixClientServer } from "@/lib/wixClientServer";
import { products } from "@wix/stores";
import Image from "next/image"
import Link from "next/link"
import DOMPurify from "isomorphic-dompurify";

const PRODUCTs_PER_PAGE = 20

const ProductList = async({categoryId, limit, searchParams} : {categoryId:string; limit?:number; searchParams?:any}) => {

    

    const wixClient = await myWixClientServer()

    const res = await wixClient.products.queryProducts().eq('collectionIds', categoryId).limit(limit || PRODUCTs_PER_PAGE).find()

    // console.log(res.items[0].price?.formatted?.price);
    

    return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-start flex-wrap">
        {res.items.map((product:products.Product) => (

            <Link href={"/"+product.slug} className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"> 
            <div className="relative w-full h-80">
                <Image 
                    // src='https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
                    src={product.media?.mainMedia?.image?.url || '/product.png'} 
                    alt="" 
                    fill sizes="25vw"
                    key={product._id}
                    className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                />
                {product.media?.items && (
                    <Image 
                        // src='https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
                        src={product.media?.items[1]?.image?.url || '/product.png'} 
                        alt="" 
                        fill sizes="25vw"
                        className="absolute object-cover rounded-md"
                    />
                )}
                
            </div>
            <div className="flex justify-between">
                <span className="font-medium">{product.name}</span>
                <span className="font-semibold">{product.price?.formatted?.price}</span>
            </div>
            <div className="text-sm text-gray-500" dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(product.additionalInfoSections?.find(
                    (section: any) => section.title === 'shortDesc'
                )?.description || "")}}>
                
            </div>
            <button className="rounded-2xl ring-1 ring-cartRed text-cartRed w-max py-2 px-4 text-xs hover:bg-cartRed hover:text-white">Add to Cart</button>
        </Link>
        ))}
    </div>
  )
}

export default ProductList