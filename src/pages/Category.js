import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Filter from '../components/Filter';
import categories from '../database/categories.json';
import productslist from '../database/products.json';
// to do --> add filtering functionality & strcture components
const Category = () => {
  const { id } = useParams();

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
        <div>
          <h6>Filters</h6>
          <Filter id="delivery" name="delivery" label="Delivery" />
          <Filter id="inStock" name="inStock" label="In Stock" />
          <Filter id="pricecheap" name="pricecheap" label="Price below 100$" />
          <Filter id="price" name="price" label="Price above 100$" />
        </div>
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
