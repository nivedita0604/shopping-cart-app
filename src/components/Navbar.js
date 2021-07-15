import React from 'react';
import { Link } from 'react-router-dom';

const LINKS = [
  { link: '/', text: 'Home' },
  { link: '/category', text: 'Category' },
  { link: '/checkout', text: 'Checkout' },
];

const Navbar = () => {
  return (
    <div>
      {LINKS.map(({ link, text }) => {
        return (
          <div>
            <Link to={link}>{text}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Navbar;
