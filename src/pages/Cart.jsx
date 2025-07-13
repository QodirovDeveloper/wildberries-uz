import { useContext } from "react";
import { GlobalContext } from "../context/globalContext";

function Cart() {
  const { basket } = useContext(GlobalContext);

  // Mahsulotlarni umumlashtiramiz
  const groupedItems = basket.reduce((acc, item) => {
    const key = item.id;
    if (!acc[key]) {
      acc[key] = { ...item, count: 1 };
    } else {
      acc[key].count += 1;
    }
    return acc;
  }, {});

  const groupedArray = Object.values(groupedItems);

  return (
    <div className="p-4 mt-48">
      <h2 className="text-xl font-bold mb-4">🛒 Ваша корзина</h2>
      {basket.length === 0 ? (
        <p>Корзина пустая</p>
      ) : (
        <ul className="space-y-2">
          {groupedArray.map((item) => (
            <li key={item.id} className="border p-2 rounded-md">
              <p className="font-semibold">{item.title}</p>
              <p className="text-sm text-gray-600">{item.brand}</p>
              <p>
                {item.price} ₽ × {item.count} ={" "}
                <span className="font-bold">
                  {(item.price * item.count).toFixed(2)} ₽
                </span>
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
