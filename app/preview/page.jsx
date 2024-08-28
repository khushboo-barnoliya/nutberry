'use client'

import ProductOverview from "./[id]/page";
import menu from "@/components/Products/data";


export default function SomePage() {
  const [product, setProduct] = useState(menu);

  

  useEffect(() => {
    // Simulate fetching product data
    fetchProductData().then((data) => setProduct(data));
  }, []);

  if (!product) {
    return <p>Loading...</p>; // or return a spinner component
  }

  return <ProductOverview menu={product} />;
}
