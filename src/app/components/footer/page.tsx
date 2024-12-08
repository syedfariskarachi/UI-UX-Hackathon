import Image from "next/image"
export default function Footer(){

    return(
        <div className="bg-black w-[100%] h-auto  text-white gap-4">
            <div className="w-[95%] m-auto flex gap-16 my-3 ">
              
                <ul className="py-2">
                    <li className="my-3">Find A STORE</li>
                    <li className="my-3">BECOME A MEMBER</li>
                    <li className="my-3">SIGN UP FOR EMAIL</li>
                    <li className="my-3">Send Us Feedback</li>
                    <li className="my-3">STUDENT DISCOUNT</li>
                </ul>
                <ul className="py-5">
                    <li>GET HELP</li>
                    <li style={{opacity:"0.5"}}>Order Status</li>
                    <li style={{opacity:"0.5"}}>Delivery</li>
                    <li style={{opacity:"0.5"}}>Returns</li>
                    <li style={{opacity:"0.5"}}>Payment Option</li>
                    <li style={{opacity:"0.5"}}>Contacat us on Nike.com Inquiries</li>
                    <li style={{opacity:"0.5"}}>Contact Us On All Other inquiries</li>
                </ul>
                <ul className="py-5">
                    <li>About Nike</li>
                    <li style={{opacity:"0.5"}}>News</li>
                    <li style={{opacity:"0.5"}}>Careers</li>
                    <li style={{opacity:"0.5"}}>Investors</li>
                    <li style={{opacity:"0.5"}}>Sustainability</li>
                </ul>
                <div >
                    <ul className="flex gap-6 m-auto py-5 ">
                        <li><Image src="/images/frame/Frame.png" width={30} height={30} alt="not found"/></li>
                        <li><Image src="/images/frame/frame2.png" width={30} height={30} alt="not found"/></li>
                        <li><Image src="/images/frame/frame3.png" width={30} height={30} alt="not found"/></li>
                        <li><Image src="/images/frame/frame4.png" width={30} height={30} alt="not found"/></li>
                        
                    </ul>
                </div>
            </div>
            <div className="w-[95%]  m-auto h-auto my-3 flex gap-96 py-3">
                <div>
            <p className="flex"> <Image src="/images/frame/frame5.png" alt="not found" width={17} height={13}/> India <span  style={{opacity:"0.5"}}> 2023 Nike,Inc.All Rights Reserved</span> </p>

                </div>
                <div>

            <ul style={{opacity:"0.5"}} className="justify-end items-end flex gap-10" >
                <li >Guides</li>
                <li>Terms of Sale</li>
                <li>Terms of use</li>
                <li>Nike Privacy Policy</li>
            </ul>
                </div>
            </div>

        </div>
    )
}