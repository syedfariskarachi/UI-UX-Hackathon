import ProductCard from "./productcard";

const products = [
  {
    id: 1,
    label: "Just In",
    name: "Nike Air Force 1 Mid '07",
    category: "Men's Shoes",
    color: "1 Colour",
    price: "₹ 10,795.00",
    image: "/images/products/allproduct/Rectangle.png",
  },
  {
    id: 2,
    label: "Just In",
    name: "Nike Court Vision Low Next Nature",
    category: "Men's Shoes",
    color: "1 Colour",
    price: "₹ 4,995.00",
    image: "/images/products/allproduct/Rectangle1.png",
  },
  {
    id: 3,
    label: "Just In",
    name: "Nike Air Force 1 PLT.AF.ORM",
    category: "Women's Shoes",
    color: "1 Colour",
    price: "₹ 8,695.00",
    image: "/images/products/allproduct/Rectangle2.png",
  },
  {
    id:4,
    label:"Just In",
    name:"Nike Air Force 1 React",
    category:"Men's Shoes",
    color:"1 colour",
    price:"₹ 13 295.00",
    image:"/images/products/allproduct/Rectangle4.png"
  },
  {
    id:5,
    label:"Promo Exclusion",
    name:"Air jordan 1 Elevate Low",
    category:"Women's Shoes",
    color:"1 colour",
    price:"₹ 11 895.00",
    image:"/images/products/allproduct/Rectangle5.png"
  },
  {
    id:6,
    label:"Just in",
    name:"Nike  Standard Issue",
    category:"Women's Basketball Jersey",
    color:"1 colour",
    price:"₹ 2 895.00",
    image:"/images/products/allproduct/Rectangle6.png"
  },
  {
    id:7,
    label:"Promo Exclusion",
    name:"Nike Dunk Low Retro SE",
    category:"Men's Shoes",
    color:"1 colour",
    price:"₹ 9 695.00",
    image:"/images/products/allproduct/Rectangle7.png"
  },
  {
    id:8,
    label:"Sustainable Materials",
    name:"Nike Dri-Fit UV Hyverse",
    category:"Men's Short Sleeve Graphics Fitness Top",
    color:"1 colour",
    price:"₹ 2 495.00",
    image:"/images/products/allproduct/Rectangle8.png"
  },
  {
    id:9,
    label:"Just in",
    name:"Men's Court Vision Low",
    category:" Men's Shoes",
    color:"1 colour",
    price:"₹ 5 995.00",
    image:"/images/products/allproduct/Rectangle9.png"
  },
  {
    id:10,
    label:"Just in",
    name:"Nike Dri-Fit Ready",
    category:"Men's Short Sleeve Fitness Top",
    color:"3 colour",
    price:"₹ 2 495.00",
    image:"/images/products/allproduct/Rectangle6.png"
  },
  {
    id:11,
    label:"Just in",
    name:"Nike One Leak Protection:Period",
    category:"Women's Mid-Rise 18cm(approx).biker Shorts",
    color:"2 colour",
    price:"₹ 3 395.00",
    image:"/images/products/allproduct/Rectangle11.png"
  },
  {
    id:12,
    label:"Just in",
    name:"Nike Air Force 1 LV8 3",
    category:"Older Kid's Shoe",
    color:"1 colour",
    price:"₹ 7 495.00",
    image:"/images/products/allproduct/Rectangle12.png"
  },
  {
    id:13,
    label:"Just in",
    name:"Nike  Blazer Low Platform",
    category:"Women's Shoes",
    color:"1 colour",
    price:"₹ 8 195.00",
    image:"/images/products/allproduct/Rectangle13.png"
  },
  {
    id:14,
    label:"Just in",
    name:"Nike Air Force 1 '07",
    category:"Women's Shoesy",
    color:"2 colour",
    price:"₹ 8 195.00",
    image:"/images/products/allproduct/Rectangle14.png"
  },
  {
    id:15,
    label:"Just in",
    name:" Nike Pro Dri-Fit",
    category:"Men's Tight Sleeveless Top",
    color:"1 colour",
    price:"₹ 1 495.00",
    image:"/images/products/allproduct/Rectangle15.png"
  },
  {
    id:16,
    label:"Just in",
    name:"Nike Dunk Low Retro",
    category:"Men's Shoes",
    color:"1 colour",
    price:"₹ 8 695.00",
    image:"/images/products/allproduct/Rectangle16.png"
  },
  {
    id:17,
    label:"Just in",
    name:"Nike Air Max SC",
    category:"Women's Shoes",
    color:"2 colour",
    price:"₹ 5 995.00",
    image:"/images/products/allproduct/Rectangle17.png"
  },
  {
    id:18,
    label:"Just in",
    name:"Nike Dri-Fit UV Miller ",
    category:"Men's Short Sleeve Running Top",
    color:"1 colour",
    price:"₹ 1 695.00",
    image:"/images/products/allproduct/Rectangle18.png"
  },
  {
    id:19,
    label:"Just in",
    name:"Nike Air Max SYSTM",
    category:"Older Kid's Shoes",
    color:"1 colour",
    price:"₹ 6 495.00",
    image:"/images/products/allproduct/Rectangle19.png"
  },
  {
    id:20,
    label:"Just in",
    name:"Nike Alate All U",
    category:"Women's Light-Support Lightly Lined U-Neck Printed Sports Bra",
    color:"1 colour",
    price:"₹ 2 195.00",
    image:"/images/products/allproduct/Rectangle20.png"
  },
  {
    id:21,
    label:"Just in",
    name:"Nike  Standard Issue",
    category:"Women's Basketball Jersey",
    color:"1 colour",
    price:"₹ 2 895.00",
    image:"/images/products/allproduct/Rectangle21.png"
  },
  {
    id:22,
    label:"Just in",
    name:"Nike Swoosh",
    category:"Women's Mediom-support Padded Sports Bra Tank",
    color:"2 colour",
    price:"₹ 3 095.00",
    image:"/images/products/allproduct/Rectangle6.png"
  },
  {
    id:23,
    label:"Just in",
    name:"Nike SB Zoom Janoski OG+",
    category:"Shoes",
    color:"1 colour",
    price:"₹ 8 595.00",
    image:"/images/products/allproduct/Rectangle23.png"
  },
  {
    id:24,
    label:"Just in",
    name:"Nike Dri-Fit Run Division Rise 365",
    category:"Men's Running Tank",
    color:"2 colour",
    price:"₹ 3 495.00",
    image:"/images/products/allproduct/Rectangle24.png"
  },
  {
    id:25,
    label:"Just in",
    name:"Nike Dri-Fit Challenger",
    category:"Men's 18cm(approx.)2-1n Versatile Shorts",
    color:"1 colour",
    price:"₹ 2 495.00",
    image:"/images/products/allproduct/Rectangle25.png"
},
{
  id:26,
  label:"Just in",
  name:"Jordan Series ES",
  category:"Men's Shoes",
  color:"2 colour",
  price:"₹ 7 495.00",
  image:"/images/products/allproduct/Rectangle26.png"
},
  {
    id:27,
    label:"Just in",
    name:"Nike Outdoor Play",
    category:"Older Kids' Oversized Woven jacket",
    color:"1 colour",
    price:"₹ 3 895.00",
    image:"/images/products/allproduct/Rectangle27.png"
  },
  {
    id:28,
    label:"Just in",
    name:"Nike Sportswear Trend",
    category:"Older Kids'(Girls) High Woven Shorts",
    color:"2 colour",
    price:"₹ 2 495.00",
    image:"/images/products/allproduct/Rectangle28.png"
  },
  {
    id:29,
    label:"Just in",
    name:"Nike Blazer Low '77 Jumbo",
    category:"Women's Shoes",
    color:"1 colour",
    price:"₹ 8 595.00",
    image:"/images/products/allproduct/Rectangle29.png"
  },
  {
    id:30,
    label:"Just in",
    name:"Nike Sb Force 58",
    category:"Skate Shoe",
    color:"1 colour",
    price:"₹ 5 995.00",
    image:"/images/products/allproduct/Rectangle30.png"
  },

];

export default function ProductList() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
