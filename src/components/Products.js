import React, { useCallback } from 'react';
import { useDispatchCart } from '../utility/cart.context';

// count not increasing
const Products = ({ products }) => {
  const dispathCart = useDispatchCart();
  const onClickAddItem = useCallback(
    (id, price, inStock) => {
      if (!inStock) {
        // eslint-disable-next-line no-useless-return
        return;
      }
      dispathCart({ type: 'ADD_ITEM', id, price });
    },
    [dispathCart]
  );
  if (products.length === 0) {
    return <div>No Products available ...</div>;
  }

  return (
    <div>
      <div>
        {products.map(
          ({
            currency,
            delivery,
            inStock,
            name,
            price,
            thumbnail,
            ...restOfProduct
          }) => {
            return (
              <div key={restOfProduct.id}>
                <img src={thumbnail} alt={name} width="50%" />
                <div>{name}</div>
                <div>
                  {currency} {price}
                </div>
                <div>
                  {delivery ? (
                    <div>Delivery available</div>
                  ) : (
                    <div>Delivery not available</div>
                  )}
                </div>
                <div>
                  {inStock ? (
                    <div style={{ color: 'green' }}>In Stock</div>
                  ) : (
                    <div style={{ color: 'red' }}>Out of Stock</div>
                  )}
                </div>
                <button
                  type="button"
                  disabled={!inStock}
                  onClick={() => {
                    return onClickAddItem(restOfProduct.id, price, inStock);
                  }}
                >
                  Add to cart
                </button>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Products;
