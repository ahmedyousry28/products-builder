import ProductCard from "./components/ProductCard";
import { productList } from "./Data";

function App() {
  const renderProductList = productList.map((item) => (
    <ProductCard key={item.id} product={item} />
  ));
  return (
    <main className="container mx-auto">
      <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-clos-3 xl:grid-cols-4 p-2 gap-2 md:gap-4 rounded-md">
        {renderProductList}
      </div>
    </main>
  );
}

export default App;
