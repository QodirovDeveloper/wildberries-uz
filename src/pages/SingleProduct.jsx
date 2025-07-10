import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useState } from "react";

function SingleProduct() {
  const { id } = useParams();
  const { data: product, isPending } = useFetch(
    "https://dummyjson.com/product/" + id
  );

  const [mainImage, setMainImage] = useState(null);

  if (isPending) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }

  const handleImageClick = (imgUrl) => {
    setMainImage(imgUrl);
  };

  return (
    <>
      {product && (
        <div className="max-w-6xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left: Image Gallery */}
            <div className="flex flex-col gap-4 w-full lg:w-1/2">
              {/* Main Image */}
              <img
                src={mainImage || product.thumbnail}
                alt={product.title}
                className="w-full max-h-[400px] object-contain border rounded-lg shadow"
              />

              {/* Gallery Thumbnails */}
              <div className="flex gap-2 overflow-x-auto">
                {product.images?.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Gallery ${idx}`}
                    onClick={() => handleImageClick(img)}
                    className="w-20 h-20 object-cover rounded border cursor-pointer hover:border-blue-600"
                  />
                ))}
              </div>
            </div>

            {/* Right: Product Info */}
            <div className="w-full lg:w-1/2 flex flex-col gap-3">
              <h1 className="text-3xl font-bold">{product.title}</h1>
              <p className="text-gray-600 text-lg">{product.description}</p>

              <div className="text-xl font-semibold text-green-600">
                {(product.price - (product.price * product.discountPercentage / 100)).toFixed(2)} ₽
                <span className="text-sm line-through text-gray-400 ml-2">
                  {(product.price)} ₽
                </span>
              </div>

              <div className="text-yellow-500">⭐ {product.rating}</div>

              <ul className="text-sm text-gray-700 space-y-1 mt-2">
                <li><strong>Stock:</strong> {product.stock}</li>
                <li><strong>Brand:</strong> {product.brand}</li>
                <li><strong>Category:</strong> {product.category}</li>
                <li><strong>SKU:</strong> {product.sku}</li>
                {product.warrantyInformation && (
                  <li><strong>Warranty:</strong> {product.warrantyInformation}</li>
                )}
                {product.returnPolicy && (
                  <li><strong>Return Policy:</strong> {product.returnPolicy}</li>
                )}
              </ul>

              {product.dimensions && (
                <div className="mt-3">
                  <p className="font-semibold">Dimensions (cm):</p>
                  <ul className="text-sm text-gray-600 list-disc list-inside">
                    <li>Width: {product.dimensions.width}</li>
                    <li>Height: {product.dimensions.height}</li>
                    <li>Depth: {product.dimensions.depth}</li>
                  </ul>
                </div>
              )}

              {/* Tags */}
              {product.tags && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {product.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-gray-200 px-3 py-1 rounded-full text-xs text-gray-700"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Reviews */}
          {product.reviews && (
            <div className="mt-10">
              <h2 className="text-xl font-bold mb-3">Отзывы</h2>
              {product.reviews.map((rev, idx) => (
                <div key={idx} className="border-t pt-4 mt-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-sm">
                      {rev.reviewerName}
                    </span>
                    <span className="text-yellow-500 text-sm">⭐ {rev.rating}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{rev.comment}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default SingleProduct;
