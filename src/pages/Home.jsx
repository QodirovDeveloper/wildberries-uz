import { Link } from "react-router-dom";
import Products from "../components/Products";
import { useFetch } from "../hooks/useFetch";

function Home() {
  const { data: products, isPending } = useFetch(
    "https://dummyjson.com/product"
  );
  return (
    <section>
      <div className="container mx-auto lg:pr-7  lg:pl-7 pr-4 pl-2 mt-10">
        {isPending && (
          <div className="flex justify-center items-center mt-50">
            <span className="loading loading-spinner loading-xl"></span>
          </div>
        )}
        <div className="grid xl:grid-cols-6 gap-4 lg:grid-cols-4 grid-cols-2 font-semibold">
          {products &&
            products.products.map((p) => {
              return <Products key={p.id} products={p} />;
            })}
        </div>
      </div>
    </section>
  );
}

export default Home;
