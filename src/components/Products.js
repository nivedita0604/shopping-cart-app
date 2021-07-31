import React from 'react';

const Products = ({ products }) => {
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
                <button type="button" disabled={!inStock} onClick>
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
