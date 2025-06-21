export default function ProductCard({ product }) {
    return (
      <div className="p-4 shadow-md rounded-lg">
        <img src={product.images[0]?.edges[0]?.node.originalSrc} alt={product.title} />
        <h3 className="text-lg font-bold">{product.title}</h3>
        <p className="text-green-700">{product.variants[0]?.edges[0]?.node.price} ₴</p>
        <a href={`/product/${product.handle}`} className="mt-2 inline-block text-violet-600 underline">
          Подробнее
        </a>
      </div>
    );
  }
  