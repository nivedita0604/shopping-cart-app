/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';
import Filter from '../components/Filter';
import Products from '../components/Products';
import { useFilter } from '../utility/useFilter';
import categories from '../database/categories.json';
import productslist from '../database/products.json';

function filteringTheProducts(products, filters) {
  let res = [...products];
  // console.log(products);
  if (filters.delivery) {
    res = res.filter(prod => {
      return prod.delivery === true;
    });
  }
  if (filters.inStock) {
    res = res.filter(prod => {
      return prod.inStock === true;
    });
  }
  if (filters.pricecheap) {
    res = res.filter(prod => {
      return prod.pricecheap < 100;
    });
  }
  if (filters.pricehigh) {
    res = res.filter(prod => {
      return prod.pricehigh >= 100;
    });
  }
  console.log(res);
  return res;
}

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
  const [filter, dispatchfilter] = useFilter(false);
  const filteredProducts = filteringTheProducts(products, filter);
  const onCheckClick = ev => {
    // calling dispatch for filters
    const checkbox = ev.target;
    dispatchfilter({
      filterType: 'SET',
      filterName: checkbox.filter,
      value: checkbox.checked,
    });

    // updating products state
  };

  return (
    <div>
      <div>
        <div>
          <h6>Filters</h6>
          <Filter
            id="delivery"
            name="delivery"
            label="Delivery"
            checked={filter.delivery}
            onChange={onCheckClick}
          />
          <Filter
            id="inStock"
            name="inStock"
            label="In Stock"
            checked={filter.inStock}
            onChange={onCheckClick}
          />
          <Filter
            id="pricecheap"
            name="pricecheap"
            label="Price below 100$"
            checked={filter.pricecheap}
            onChange={onCheckClick}
          />
          <Filter
            id="pricehigh"
            name="pricehigh"
            label="Price above 100$"
            checked={filter.pricehigh}
            onChange={onCheckClick}
          />
        </div>
      </div>
      <div>
        <div>
          <h3>{categoryTilte}</h3>
        </div>
        <Products products={filteredProducts} />
      </div>
    </div>
  );
};

export default Category;
