/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';
import Filter from '../components/Filter';
import Products from '../components/Products';
import { useFilter } from '../utility/useFilter';
import categories from '../database/categories.json';
import productslist from '../database/products.json';

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
  const categoryTilte = category.name;
  const [filter, dispatchfilter] = useFilter();
  const handlefilter = value => {
    // calling dispatch for filters
    dispatchfilter(
      { filterType: 'DELIVERY', filterAction: value },
      { filterType: 'INSTOCK', filterAction: value },
      { filterType: 'PRICEHIGH', filterAction: value },
      { filterType: 'PRICELOW', filterAction: value }
    );

    // updating products state
  };
  const onCheckClick = () => {};

  return (
    <div>
      <div>
        <div>
          <h6>Filters</h6>
          <Filter
            id="delivery"
            name="delivery"
            label="Delivery"
            onChange={onCheckClick}
          />
          <Filter
            id="inStock"
            name="inStock"
            label="In Stock"
            onChange={onCheckClick}
          />
          <Filter
            id="pricecheap"
            name="pricecheap"
            label="Price below 100$"
            onChange={onCheckClick}
          />
          <Filter
            id="pricehigh"
            name="pricehigh"
            label="Price above 100$"
            onChange={onCheckClick}
          />
        </div>
      </div>
      <div>
        <Products />
      </div>
    </div>
  );
};

export default Category;
