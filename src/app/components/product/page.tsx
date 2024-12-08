import Header from "../header/header";
import Image from "next/image";
import Sidebar from "../sidebar/page";
import Footer from "../footer/page";
import ProductList from "./comp/page";
export default function Products(){
    return(
        <>
        <Header/>
        <div className="w-[95%] m-auto">

        <div><h1>New(500) <span className="float-right flex">Hide Filter <Image src="/images/products/allproduct/filter.png" width={24} height={24} alt="not found"/>Sort By  </span> </h1></div>
        <div className="flex ">

            <div className="">
                <Sidebar/>
            </div>
            <div className="w-[80%] float-right">
                
            <ProductList/>
            </div>
        </div>
            <div>
                <Footer/>
            </div>
        </div>
        </>
    )
}