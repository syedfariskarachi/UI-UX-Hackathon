import Image from "next/image"
export default function Header(){
    return(
        <>
        <div className="bg-slate-300 flex items-center justify-between px-6 py-2">
        <Image
          src="/images/logo/vector (1).png"
          alt="Logo"
          width={19.2}
          height={17.97}
          />
        <div className="flex gap-3 text-sm">
          <button>Find a Store</button>
          <span>|</span>
          <button>Help</button>
          <span>|</span>
          <button>Join Us</button>
          <span>|</span>
          <button>Sign In</button>
        </div>
      </div>
      <div className="flex items-center justify-between px-8 py-3 border-b-2">
      <Image
        src="/images/logo/vector.png"
        alt="Logo"
        width={58.85}
        height={20.54}
      />
      <ul className="flex gap-8 justify-center items-center text-sm font-medium text-gray-800">
        <li className="hover:underline cursor-pointer">New & Featured</li>
        <li className="hover:underline cursor-pointer">Men</li>
        <li className="hover:underline cursor-pointer">Women</li>
        <li className="hover:underline cursor-pointer">Kids</li>
        <li className="hover:underline cursor-pointer">Sale</li>
        <li className="hover:underline cursor-pointer">SNKRS</li>
      </ul>
      <div className="flex items-center gap-4">
        {/* <input
          type="text"
          placeholder="Search..."
          className="border rounded-l-md p-2 text-sm"
        /> */}
        <Image src="/images/search.png " width={180} height={40} alt="not found"/>
        <button className="border p-2 rounded-full">
          <Image
            src="/images/logo/vector (3).png"
            width={23}
            height={36}
            alt="not found"
            />
        </button>
        <button className="border p-2 rounded-full">
          <Image
            src="/images/logo/vector (4).png"
            width={23}
            height={36}
            alt="not found"
          />
        </button>
      </div>
    </div>
            </>
    )
}