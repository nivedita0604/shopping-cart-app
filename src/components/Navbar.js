import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../utility/cart.context';
import CartImg from '../image/shopping-cart.png';

const LINKS = [
  { link: '/', text: 'Home' },
  { link: '/category', text: '' },
  { link: '/checkout', text: 'Checkout' },
];

const Navbar = () => {
  const cart = useCart();
  const totalCartItems = cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
  const totalCartValue = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  return (
    <div>
      {LINKS.map(({ link, text }) => {
        return (
          <div>
            <Link to={link}>{text}</Link>
          </div>
        );
      })}
      <div>
        {totalCartItems}
        <img src={CartImg} width={40} alt="cart" />
        {totalCartValue}
      </div>
    </div>
  );
};

export default Navbar;
