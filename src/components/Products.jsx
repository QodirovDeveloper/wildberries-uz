import { useContext, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/globalContext";


function Products({ products }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const {dispatch} = useContext(GlobalContext)

  return (
    <>
      <div className="mb-6">
        <div className="relative cursor-pointer rounded-xl border border-black/30">
          <Link to={`/singleProduct/${products.id}`}>
            <figure className="w-full h-[300px] overflow-hidden rounded-xl bg-gray-300 flex items-center justify-center">
              {!imageLoaded && (
                <div className="w-full h-full bg-[#EAEAEC] animate-pulse" />
              )}
              <img
                className={`card-image rounded-xl object-cover w-full h-full ${
                  imageLoaded ? "block" : "hidden"
                }`}
                src={products.thumbnail}
                alt="products"
                onLoad={() => setImageLoaded(true)}
              />
            </figure>
          </Link>

          <div className="absolute right-0 top-0 text-red-600 p-0.5 rounded-tr-xl text-2xl ">
            <FaRegHeart />
          </div>

          <div className="absolute bottom-2 left-3">
            <p className="text-white px-1.5 inline-block bg-red-500 rounded-sm">
              <span className="discount-price">
                {products.discountPercentage} %
              </span>
            </p>
            <p className="text-white px-1.5 text-sm bg-pink-400 mt-1 rounded-sm">
              ОТПУСКАЕМ ЦЕНЫ
            </p>
          </div>
        </div>

        <div>
          <span className="now-price text-red-500 text-lg">
            {(
              products.price -
              (products.price * products.discountPercentage) / 100
            ).toFixed(2)}{" "}
            ₽
          </span>
          <span className="price line-through opacity-50 text-sm">
            {products.price} ₽
          </span>
          <p className="text-sm text-red-500">с WB Кошельком</p>
          <p>
            <span className="brand text-sm">{products.brand}</span> /
            <span className="category text-sm opacity-50">
              {products.category}
            </span>
          </p>
          <p className="title truncate overflow-hidden whitespace-nowrap text-sm text-gray-900 w-full">
            {products.title}
          </p>
          <div className="flex flex-col items-start justify-start">
            <p className="line-clamp-2">
              ⭐️
              <span className="rating">{products.rating}</span> •
              <span className="comment line-clamp-1 opacity-50">
                {products.reviews[0]?.comment}
              </span>
            </p>
          </div>
          <button onClick={()=>dispatch({type:"ADD_PRODUCT"})} className="buy-button w-full cursor-pointer mt-4 text-white bg-[#A439F9] rounded-xl p-1">
            <i className="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default Products;
