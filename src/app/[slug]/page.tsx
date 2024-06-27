import Add from "../components/Add"
import CustomizeProducts from "../components/CustomizeProducts"
import ProductImages from "../components/ProductImages"

const SinglePage = () => {
    return(
        <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
            {/* Img */}
            <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
                <ProductImages />
            </div>
            {/* Text */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
                <h1 className="text-4xl font-medium">Product Name</h1>
                <p className="text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates quod at sed saepe ipsum quas illum exercitationem consequuntur commodi, cupiditate similique laudantium esse consectetur animi blanditiis, nisi sint, dolore earum.
                Dolores atque recusandae in quis, provident mollitia fugiat. Nisi, ab porro. Ducimus doloremque possimus hic, ut amet architecto mollitia at pariatur ipsum id, quos et eaque. Quis iure minus quidem.
                </p>
                <div className="h-[2px] bg-gray-200" />
                <div className="flex items-center gap-4">
                    <h3 className="text-xl text-gray-500 line-through">$45</h3>
                    <h2 className="font-medium text-2xl">$35</h2>
                </div>
                <div className="h-[2px] bg-gray-200" />
                <CustomizeProducts />
                <Add />
                <div className="h-[2px] bg-gray-200" />
                <div className="text-sm">
                    <h4 className="font-medium mb-4">Title</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing
                         elit. Id, eaque facilis deleniti alias asperiores ipsam itaque autem sint enim nihil pariatur libero nobis accusamus molestiae.
                    </p>
                </div>
                <div className="text-sm">
                    <h4 className="font-medium mb-4">Title</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing
                         elit. Id, eaque facilis deleniti alias asperiores ipsam itaque autem sint enim nihil pariatur libero nobis accusamus molestiae.
                    </p>
                </div>
                <div className="text-sm">
                    <h4 className="font-medium mb-4">Title</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing
                         elit. Id, eaque facilis deleniti alias asperiores ipsam itaque autem sint enim nihil pariatur libero nobis accusamus molestiae.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default SinglePage