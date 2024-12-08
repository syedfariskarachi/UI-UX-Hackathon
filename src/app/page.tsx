import Image from "next/image";
import Link from "next/link";
import Header from "./components/header/header";
import Footer from "./components/footer/page";

export default function Home() {
  return (
    <div>
      {/* Top section with logo and buttons */}
     <Header/>
      {/* App Section */}
      <div className="flex flex-col justify-center items-center bg-slate-200 py-3">
        <h1 className="text-xl font-semibold">Hello Nike App</h1>
        <p className="text-sm">
          Download the app to access everything Nike{" "}
          <a href="#" className="border-b-2 text-blue-500">
            Get Your Great
          </a>
        </p>
      </div>

      {/* Banner Image and Product Details */}
      <div>
        <Image
          src="/images/banner.png"
          width={1170}
          height={600}
          alt="Nike Air Max Pulse"
          className="mx-12 "
        />
        <div className="flex flex-col justify-center items-center py-6">
          <p className="text-sm">First Look</p>
          <h1 className="text-3xl font-semibold text-center">NIKE AIR MAX PULSE</h1>
          <p className="text-center text-sm">
            Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
            <br />
            <span className="flex items-center justify-center">
              - Designed to push you past your limits and help you go to the max.
            </span>
          </p>
          <div className="flex gap-4 py-4">
            <button className="bg-black text-white p-2 rounded">Notify Me</button>
            <button className="bg-black text-white p-2 rounded">Shop Air Max</button>
          </div>
        </div>

        {/* Product List */}
        <div className="mx-12">
          <h1 className="text-xl font-semibold ">
            Best of Air Max
            <span className="float-right text-sm text-blue-500 cursor-pointer">Man'sShop</span>
          </h1>
          <ul className="flex gap-4 py-6 mx-2">
            <li className="border-2 p-4">
              <Image
                src="/images/products/p1.png"
                width={400}
                height={400}
                alt="Nike Air Max Pulse"
              />
              <p className="text-sm mt-2">
                Nike Air Max Pulse{" "}
                <span className="float-right text-lg font-semibold">₹13,995</span>
                <br />
                <span className="text-opacity-60">Women's Shoes</span>
              </p>
            </li>
            <li className="border-2 p-4">
              <Image
                src="/images/products/p2.png"
                width={400}
                height={400}
                alt="Nike Air Max Pulse"
              />
              <p className="text-sm mt-2">
                Nike Air Max Pulse{" "}
                <span className="float-right text-lg font-semibold">₹13,995</span>
                <br />
                <span className="text-opacity-60">Women's Shoes</span>
              </p>
            </li>
            <li className="border-2 p-4">
              <Image
                src="/images/products/p3.png"
                width={400}
                height={400}
                alt="Nike Air Max Pulse"
              />
              <p className="text-sm mt-2">
                Nike Air Max Pulse{" "}
                <span className="float-right text-lg font-semibold">₹16 995</span>
                <br />
                <span className="text-opacity-60">Women's Shoes</span>
              </p>
            </li>
            {/* Add other products similarly */}
          </ul>
        </div>
        <div className="mx-12  flex flex-col justify-center items-center">
          <h1 className="text-xl font-semibold ">Featured</h1>
          <Image src="/images/products/featured.png" width={1150} height={680} alt="not found" className="mx-12"/>
          <h1 className="text-4xl">STEP INTO WHAT FEELS GOOD</h1>
          <p>Cause everyone should know the feeling of in that perfect pair</p>
          <button className="bg-black p-2 rounded text-white my-2">Find Your Shoe</button>
        </div>
          <div>
          <p className="font-semibold text-2xl mx-12">Gear Up</p>
        </div>
        <div className="flex gap-2 mx-12">

        <div className="flex flex-col w-[600]">
          <div className="w-[550px] ">
            <p className="float-right">Shop Men's </p>
           </div>
          <div className="flex gap-2 mx-3">
            <div>
            <Image src="/images/outfit/o1.png"width={290} height={300} alt="not found"/>
            <p>Nike Dri ADv TEchKnit Ultra <span className="float-right font-semibold">₹3 895</span><br /><span style={{opacity:0.5}}>Men's Short-Sleeve <br />Running</span></p>

            </div>
            <div>

            <Image src="/images/outfit/o2.png"width={285} height={300} alt="not found"/>
            <p>Nike Dri-Fit Challenger <span className="float-right font-semibold">₹2 495</span><br />
            <span style={{opacity:0.5}}>Men's 18cm(approx.)2- <br />in-1 versatile Shorts</span></p>
            </div>
          </div>
          </div>
        <div className="flex flex-col w-[600]">
          <div className="w-[550px] ">
            <p className="float-right">Shop Women's</p>
          </div>
          <div className="flex gap-2">
            <div>

            <Image src="/images/outfit/o3.png"width={285} height={300} alt="not found"/>
            <p>Nike Dri-FIT ADv Run Division <span>₹5 295</span> <br /><span style={{opacity:0.5}}>Women's Long-Sleeve <br />Running Top</span></p>
            </div>
            <div>

            <Image src="/images/outfit/o4.png"width={285} height={300} alt="not found"/>
            <p>Nike Fast <span>₹ 3 795</span> <br /><span style={{opacity:0.5}}>Women's Mid-Rise 7/8 Running <br />Legging with Pockets</span></p>
            </div>
          </div>
          </div>
        </div>
        <div>
          <h1 className="font-semibold text-2xl my-3 mx-12">
            Don't Miss
          </h1>
          <Image src="/images/outfit/dontmiss.png" width={1160} height={200}alt="not found" className="m-auto"/>
          <div className="flex flex-col justify-center items-center my-2">

          <h1 className="text-4xl">FLIGHT ESSENTIALS</h1><br />
          <p>Your built-to-last-week wears-but only Jordan Brand can deliver.</p><br />
          <button className="bg-black text-white rounded px-2">Shop</button>
          </div>
        </div>
        <div className="mx-2">
          <h1 className="font-semibold text-2xl mx-12">The Essentials</h1>
          <div className="flex gap-2 mx-12">
            <Image src="/images/es/es1.png" width={377.2} height={500} alt="not found"/>
            <Image src="/images/es/es2.png" width={377.2} height={500} alt="not found"/>
            <Image src="/images/es/es3.png" width={377.2} height={500} alt="not found"/>
          </div>
        </div>
        <div style={{width:"70%", marginTop:"30px"}} className=" m-auto py-16" >
          <ul className="grid grid-cols-4 font-semibold  ">
            <li>Icons</li>
            <li>Shoes</li>
            <li>Clothing</li>
            <li>Kid's</li>
          </ul>
          <ul className="grid grid-cols-4">
            <ul style={{opacity:"0.5"}}>
              <li>Air Force 1</li>
              <li>Huarache</li>
              <li>Air Max 90</li>
              <li>Air Max 95</li>
            </ul>
            <ul style={{opacity:"0.5"}}>
              <li>All Shoes</li>
              <li>Custom Shoes</li>
              <li>Jordan Shoes</li>
              <li>Running Shoes</li>
            </ul>
            <ul style={{opacity:"0.5"}}>
              <li>All Clothing</li>
              <li>Modest Wear</li>
              <li>Hoodies & Pullovers</li>
              <li>Shirt & Tops</li>
            </ul>
            <ul style={{opacity:"0.5"}}>
              <li>Infant & Toddler Shoes</li>
              <li>kid's Shoes</li>
              <li>Kid's Jordan Shoes</li>
              <li>Kid's Basketball Shoes</li>
            </ul>
          </ul>
        </div>
        <Footer/>
      </div>
    </div>
    
  );
}
