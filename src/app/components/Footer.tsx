import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    return(
        <div className="py-24 px-4 md:gap-x-8 lg:px-16 xl:px-64 bg-gray-200 text-sm mt-24">
            {/* Top */}
            <div className="flex flex-col md:flex-row justify-between gap-24">
                {/* Left */}
                <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
                    <Link href='/'>
                        <div className="text-2xl tracking-wide">eKart</div>
                    </Link>
                    <p>East Street, Pune, Maharashtra, India</p>
                    <span>abcd@gmail.com</span>
                    <span>+919999955555</span>
                    <div className="flex gap-6">
                        <Image src='/facebook.png' alt="" width={16} height={16}/>
                        <Image src='/instagram.png' alt="" width={16} height={16}/>
                        <Image src='/youtube.png' alt="" width={16} height={16}/>
                        <Image src='/x.png' alt="" width={16} height={16}/>
                        <Image src='/pinterest.png' alt="" width={16} height={16}/>
                    </div>
                </div>
                {/* Center */}
                <div className="w-1/2 hidden lg:flex justify-between">
                    <div className="flex flex-col justify-between">
                        <h1 className="font-medium text-lg">COMPANY</h1>
                        <div className="flex flex-col gap-6">
                            <Link href=''>About Us</Link>
                            <Link href=''>Careers</Link>
                            <Link href=''>Affiliated</Link>
                            <Link href=''>Blog</Link>
                            <Link href=''>Contact Us</Link>
                        </div>
                    </div>

                    <div className="flex flex-col justify-between">
                        <h1 className="font-medium text-lg">Shop`</h1>
                        <div className="flex flex-col gap-6">
                            <Link href=''>New Arrivals</Link>
                            <Link href=''>Mens</Link>
                            <Link href=''>Womens</Link>
                            <Link href=''>Accessories</Link>
                            <Link href=''>All Products</Link>
                        </div>
                    </div>

                    <div className="flex flex-col justify-between">
                        <h1 className="font-medium text-lg">HELP</h1>
                        <div className="flex flex-col gap-6">
                            <Link href=''>Customer Service</Link>
                            <Link href=''>My Account</Link>
                            <Link href=''>Find a store</Link>
                            <Link href=''>Legal & Privacy</Link>
                            <Link href=''>Redeem Vouchers</Link>
                        </div>
                    </div>
                </div>
                {/* Right */}
                <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
                    <h1 className="font-medium text-lg">SUBSCRIBE</h1>
                    <p>Be the first to get new products and discount updtates</p>
                    <div className="flex">
                        <input type="email" placeholder="Email Address" className="p-4 w-3/4"/>
                        <button className="w-1/4 bg-cartRed text-white ">JOIN</button>
                    </div>
                    <span className="font-semibold ">Secure Payments</span>
                    <div className="flex justify-between">
                            <Image src='/discover.png' alt="" width={40} height={20} />
                            <Image src='/skrill.png' alt="" width={40} height={20}/>
                            <Image src='/paypal.png' alt="" width={40} height={20}/>
                            <Image src='/mastercard.png' alt="" width={40} height={20}/>
                            <Image src='/visa.png' alt="" width={40} height={20}/>
                    </div>
                </div>
            </div>
            {/* Bottom */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
                <div className="">
                    © 2024 eKart Shopping
                </div>
                <div className="flex flex-col gap-8 md:flex-row">
                    <div className="">
                        <span className="text-gray-500 mr-4">Language</span>
                        <span className="font-medium ">India | English</span>
                    </div>

                    <div className="">
                        <span className="text-gray-500 mr-4">Currency</span>
                        <span className="font-medium ">INR | ₹</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer