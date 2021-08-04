import React, { useCallback, useState } from 'react';
import { useCart, useDispatchCart } from '../utility/cart.context';
import PRODUCTS from '../database/products.json';

function gettingCheckoutItems(products, cartItems) {
  const productsInCart = products.filter(p => {
    return cartItems.some(item => {
      return item.id === p.id;
    });
  }); // filtering if the products in the cart from whole products list

  return productsInCart.map(product => {
    return {
      ...product,
      quantity: cartItems.find(item => {
        return item.id === product.id;
      }).quantity,
    };
  });
}

const Checkout = () => {
  const cart = useCart();
  const dispatchCart = useDispatchCart();
  const [products] = useState(PRODUCTS);

  const checkoutItems = gettingCheckoutItems(products, cart);

  const handleAdd = useCallback(
    id => {
      dispatchCart({ type: 'ADD_ITEM', id });
    },
    [dispatchCart]
  );

  const handleDeleteone = useCallback(
    id => {
      dispatchCart({ type: 'DELETE_ITEM', id });
    },
    [dispatchCart]
  );

  const handleRemoveAll = useCallback(
    id => {
      dispatchCart({ type: 'REMOVE_ALL', id });
    },
    [dispatchCart]
  );
  return (
    <div>
      {checkoutItems.map(el => {
        return (
          <div key={el.id}>
            <img src={el.thumbnail} alt={el.name} width={40} />
            <span>{el.name}</span>
            <span>
              | {el.currency} {el.price}
            </span>
            <span> | </span>
            <button
              type="button"
              onClick={() => {
                return handleDeleteone(el.id);
              }}
            >
              Remove One
            </button>
            <span> {el.quantity} </span>
            <button
              type="button"
              onClick={() => {
                return handleAdd(el.id);
              }}
            >
              Add One
            </button>
            <span> | </span>
            <button
              type="button"
              onClick={() => {
                return handleRemoveAll(el.id);
              }}
            >
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Checkout;
