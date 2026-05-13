/*
填写 handleIncreaseClick 的逻辑，以便按下“+”时递增对应数字：
 */

import { useState } from "react";

interface Product {
  id: number;
  name: string;
  count: number;
}

const initialProducts: Product[] = [
  {
    id: 0,
    name: "Baklava",
    count: 1,
  },
  {
    id: 1,
    name: "Cheese",
    count: 5,
  },
  {
    id: 2,
    name: "Spaghetti",
    count: 2,
  },
];

export function ShoppingCart() {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  function handleIncreaseClick(productId: number) {
    // 1. 首先找到需要进行加法运算的商品
    // 2. 然后返回一个新的数组给 set 函数
    // 使用 map 函数创建一个新数组，然后使用 ... 对象展开语法为新数组创建一个变更后对象的拷贝值：
    setProducts(() => {
      const nextProducts = products.map((p) => {
        let nextP: Product;
        if (p.id === productId) {
          nextP = {
            ...p,
            count: p.count + 1,
          };
          return nextP;
        } else return p;
      });

      return nextProducts;
    });
  }

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} (<b>{product.count}</b>)
          <button
            className="primary-btn"
            onClick={() => {
              handleIncreaseClick(product.id);
            }}
          >
            +
          </button>
        </li>
      ))}
    </ul>
  );
}

function Challenge1_uais() {
  return (
    <div className="p-6">
      <h1 className="mb-10">第 1 个挑战 共 4 个挑战: 更新购物车中的商品</h1>
      <hr className="my-8 text-gray-300 " />
      <ShoppingCart />
    </div>
  );
}

export default Challenge1_uais;
