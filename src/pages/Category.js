import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import categories from '../database/categories.json';
import productslist from '../database/products.json';

const Category = () => {
  const { id } = useParams();
  // eslint-disable-next-line no-console
  console.log('id', id);

  const category = categories.find(cate => {
    return cate.id === id;
  });

  const [products] = useState(
    productslist.filter(prod => {
      return prod.categoryId === id;
    })
  );

  return (
    <div>
      <div>
        <h3>{category.name}</h3>
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
                  <img src={thumbnail} alt={name} width={50} />
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
                  <button type="button" disabled={!inStock}>
                    Add to cart
                  </button>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Category;
