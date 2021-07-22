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
      return prod.price < 100;
    });
  }
  if (filters.pricehigh) {
    res = res.filter(prod => {
      return prod.price >= 100;
    });
  }
  // eslint-disable-next-line no-console
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
  const [filter, dispatchFilter] = useFilter({
    delivery: false,
    inStock: false,
    pricecheap: false,
    pricehigh: false,
  });
  const filteredProducts = filteringTheProducts(products, filter);

  const onCheckClick = useCallback(
    ev => {
      const checkbox = ev.target;

      dispatchFilter({
        type: 'SET',
        filterName: checkbox.name,
        value: checkbox.checked,
      });
    },
    [dispatchFilter]
  );
  return (
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
        <div>
          <div>
            <h3>{categoryTilte}</h3>
          </div>
          <Products products={filteredProducts} />
        </div>
      </div>
    </div>
  );
};

export default Category;
