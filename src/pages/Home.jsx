import { Link } from "react-router-dom";
import Products from "../components/Products";
import { useFetch } from "../hooks/useFetch";

function Home() {
  const { data: products, isPending } = useFetch(
    "https://dummyjson.com/product"
  );
  return (
    <section>
      <h1>home</h1>
      <div className="container mx-auto lg:pr-7  lg:pl-7 pr-4 pl-2 mt-10">
        <div className="grid xl:grid-cols-6 gap-4 lg:grid-cols-4 grid-cols-2 font-semibold">
          {products &&
            products.products.map((p) => {
              return (
                <Link key={p.id} to={`/singleProduct/${p.id}`}>
                  <Products products={p} />
                </Link>
              );
            })}
        </div>
      </div>
    </section>
  );
}

export default Home;
