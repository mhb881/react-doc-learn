/*
现在购物车有了一个正常工作的“+”按钮，但是“-”按钮却没有任何作用。
你需要为它添加一个事件处理程序，以便按下它时可以减少对应商品的 count。
如果在数字为 1 时按下“-”按钮，商品需要自动从购物车中移除。确保商品计数永远不出现 0。

答案：
你可以先使用 map 生成一个新数组，然后使用 filter 移除 count 被设置为 0 的商品：
 */

import { useState } from "react";
import type { Product } from "../../../types/types";

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
  const [products, setProducts] = useState(initialProducts);

  function handleIncreaseClick(productId: number) {
    setProducts(
      products.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            count: product.count + 1,
          };
        } else {
          return product;
        }
      }),
    );
  }

  /*
  // 假设你用 useImmer 定义状态：const [products, updateProducts] = useImmer([])
  function handleDecreaseClick(productId: number) {
    updateProducts((draft) => {
      // 找到目标商品
      const target = draft.find((item) => item.id === productId);
      if (target) {
        target.count -= 1;
        // 数量≤0时，从数组中删除
        if (target.count <= 0) {
          draft.splice(draft.indexOf(target), 1);
        }
      }
    });
  }
   */

  /*
  官方答案
  function handleDecreaseClick(productId) {
    let nextProducts = products.map(product => {
      if (product.id === productId) {
        return {
          ...product,
          count: product.count - 1
        };
      } else {
        return product;
      }
    });
    nextProducts = nextProducts.filter(p =>
      p.count > 0
    );
    setProducts(nextProducts)
  }
   */

  function handleDecreaseClick(productId: number) {
    // 1. 使用回调参数 prevProducts（正确的函数式更新）
    setProducts((prevProducts) => {
      return (
        prevProducts
          .map((product) => {
            // 找到目标商品，数量-1
            if (product.id === productId) {
              return { ...product, count: product.count - 1 };
            }
            return product;
          })
          // 2. 链式调用 filter，过滤掉数量 ≤0 的商品（自动删除）
          .filter((product) => product.count > 0)
      );
    });
  }

  return (
    <ul>
      {products.map((product) => (
        <li className="flex items-center gap-2" key={product.id}>
          {product.name} (<b>{product.count}</b>)
          <button
            className="primary-btn"
            onClick={() => {
              handleIncreaseClick(product.id);
            }}
          >
            +
          </button>
          <button
            className="primary-btn"
            onClick={() => {
              handleDecreaseClick(product.id);
            }}
          >
            –
          </button>
        </li>
      ))}
    </ul>
  );
}

function Challenge2_uais() {
  return (
    <div className="p-6">
      <h1 className="mb-10">第 2 个挑战 共 4 个挑战: 删除购物车中的商品</h1>
      <hr className="my-8 text-gray-300 " />
      <ShoppingCart />
    </div>
  );
}

export default Challenge2_uais;
