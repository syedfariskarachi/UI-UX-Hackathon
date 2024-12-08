export default function Sidebar() {
    return (
      <div className="w-64 border-r border-gray-300 p-4">
        {/* Categories Section */}
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-4">Categories</h2>
          <ul className="space-y-2">
            {[
              "Shoes",
              "Sports Bras",
              "Tops & T-Shirts",
              "Hoodies & Sweatshirts",
              "Jackets",
              "Trousers & Tights",
              "Shorts",
              "Tracksuits",
              "Jumpsuits & Rompers",
              "Skirts & Dresses",
              "Socks",
              "Accessories & Equipment",
            ].map((category, index) => (
              <li key={index} className="text-gray-700 hover:text-black cursor-pointer">
                {category}
              </li>
            ))}
          </ul>
        </div>
  
        {/* Filters Section */}
        <div className="space-y-6">
          {/* Gender Filter */}
          <div>
            <h3 className="text-lg font-bold mb-2">Gender</h3>
            <ul className="space-y-2">
              {["Men", "Women", "Unisex"].map((gender, index) => (
                <li key={index}>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2 w-4 h-4 border-gray-300 rounded"
                    />
                    <span className="text-gray-700">{gender}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
  
          {/* Kids Filter */}
          <div>
            <h3 className="text-lg font-bold mb-2">Kids</h3>
            <ul className="space-y-2">
              {["Boys", "Girls"].map((kidType, index) => (
                <li key={index}>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2 w-4 h-4 border-gray-300 rounded"
                    />
                    <span className="text-gray-700">{kidType}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
  
          {/* Price Filter */}
          <div>
            <h3 className="text-lg font-bold mb-2">Shop By Price</h3>
            <ul className="space-y-2">
              {["Under ₹ 2,500.00", "₹ 2,501.00 - ₹"].map((priceRange, index) => (
                <li key={index}>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2 w-4 h-4 border-gray-300 rounded"
                    />
                    <span className="text-gray-700">{priceRange}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
  