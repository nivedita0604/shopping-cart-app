import React from 'react';
import { Link } from 'react-router-dom';

import categories from '../database/categories.json';

const Home = () => {
  return (
    <div>
      <div>
        {categories.map(cate => {
          return (
            <Link key={cate.id} to={`/category/${cate.id}`}>
              <h2 className="h3">{cate.name}</h2>
              <p>{cate.description}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
