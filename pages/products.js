import { fetchProducts } from "@/lib/shopify";
import ProductCard from "@/components/ProductCard";

export default function Products({ products }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const products = await fetchProducts();
  return { props: { products }, revalidate: 60 };
}
