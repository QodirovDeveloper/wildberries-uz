import { useContext } from "react";
import Products from "../components/Products";
import Search from "../components/Search";
import { useFetch } from "../hooks/useFetch";
import { GlobalContext } from "../context/globalContext";

function Home() {
  const { data: products, isPending } = useFetch(
    "https://dummyjson.com/products"
  );
  const { searchTerm } = useContext(GlobalContext);

  const filteredProducts =
    products?.products?.filter((p) =>
      p.title.toLowerCase().includes(searchTerm)
    ) || [];

  return (
    <section>
      <div className="container mx-auto lg:pr-7 mt-36 lg:mt-50 lg:pl-7 pr-4 pl-2">
        {isPending && (
          <div className="flex justify-center items-center mt-10">
            <span className="loading loading-spinner loading-xl"></span>
          </div>
        )}

        <div className="grid xl:grid-cols-6 gap-4 lg:grid-cols-4 grid-cols-2 font-semibold mt-4">
          {filteredProducts.map((p) => (
            <Products key={p.id} products={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
