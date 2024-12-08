import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <div className="max-w-xs border-2 border-purple-500 p-4 rounded-lg hover:shadow-lg transition-shadow">
      <div className="relative">
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={300}
          className="rounded"
        />
      </div>
      <div className="mt-4">
        <p className="text-orange-600 text-sm font-semibold">{product.label}</p>
        <h3 className="text-lg font-medium mt-1">{product.name}</h3>
        <p className="text-gray-600 text-sm">{product.category}</p>
        <p className="text-gray-600 text-sm">{product.color}</p>
        <p className="text-black font-semibold mt-2">MRP: {product.price}</p>
      </div>
    </div>
  );
}
