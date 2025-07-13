import { useContext } from "react";
import { GlobalContext } from "../context/globalContext";

function Cart() {
  const { basket, dispatch } = useContext(GlobalContext);

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

  // Umumiy summa hisoblash
  const totalPrice = groupedArray.reduce(
    (sum, item) => sum + item.price * item.count,
    0
  );
  const discount = totalPrice * 0.4; // 40% chegirma
  const finalTotal = totalPrice - discount;

  return (
    <div className="p-4 mt-48 grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="lg:col-span-2">
        <h2 className="text-xl font-bold mb-4">🛒 Ваша корзина</h2>
        {basket.length === 0 ? (
          <p>Корзина пустая</p>
        ) : (
          <ul className="space-y-4">
            {groupedArray.map((item) => (
              <li
                key={item.id}
                className="border rounded-xl p-4 flex items-center gap-4"
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-[100px] h-[100px] object-cover rounded-lg"
                />
                <div className="flex-1">
                  <p className="font-bold text-black text-base">
                    {item.title}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">{item.brand}</p>
                  <p className="text-xs text-gray-500 mb-1">1000 мл</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      className="w-7 h-7 rounded bg-gray-100 text-xl"
                      onClick={() =>
                        dispatch({ type: "DECREMENT_PRODUCT", payload: item })
                      }
                    >
                      –
                    </button>
                    <span>{item.count}</span>
                    <button
                      className="w-7 h-7 rounded bg-gray-100 text-xl"
                      onClick={() =>
                        dispatch({ type: "ADD_PRODUCT", payload: item })
                      }
                    >
                      +
                    </button>
                    <button
                      className="text-red-500 ml-4"
                      onClick={() =>
                        dispatch({ type: "REMOVE_PRODUCT", payload: item })
                      }
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                  <p className="text-red-500 font-bold mt-1">
                    {item.price} ₽ 
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="bg-white border rounded-xl p-4 shadow-sm h-fit">
        <p className="text-purple-600 font-semibold mb-2">
          Выбрать адрес доставки
        </p>
        <div className="flex justify-between">
          <p>Товары, {basket.length} шт.</p>
          <p>{totalPrice.toFixed(0)} ₽</p>
        </div>
        <div className="flex justify-between text-gray-500">
          <p>Моя скидка</p>
          <p>-{discount.toFixed(0)} ₽</p>
        </div>
        <div className="flex justify-between font-bold text-xl mt-2">
          <p>Итого</p>
          <p>{finalTotal.toFixed(0)} ₽</p>
        </div>
        <button className="mt-4 w-full bg-purple-500 text-white font-bold rounded-xl py-3">
          Заказать
        </button>
      </div>
    </div>
  );
}

export default Cart;
