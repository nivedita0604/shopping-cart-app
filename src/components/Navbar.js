import React from 'react';
// import { Link } from 'react-router-dom';
import { Nav, Container } from 'react-bootstrap';
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
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            {LINKS.map(({ link, text }) => {
              return (
                <Nav.Item eventKey={link}>
                  <Nav.Link href={link}>{text}</Nav.Link>
                </Nav.Item>
              );
            })}
            <div>
              <Nav.Link href="/checkout">
                {totalCartItems}
                <img src={CartImg} width={40} alt="cart" />
                {totalCartValue}
              </Nav.Link>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbar;
