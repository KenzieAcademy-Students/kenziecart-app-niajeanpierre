import React, { useContext } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons/faShoppingBag';
import { useUI } from 'hooks';
import CartSidebar from 'components/CartSidebar';
import { useProvideCart } from 'hooks';
import { Button } from 'react-bootstrap';
import { getAllProducts } from 'utils/axiosService';


const Header = () => {
  const { openSidebar } = useUI();
  const { toggleCurrency } = useProvideCart()
  const handleToggle = () => {
    toggleCurrency()
  }
  return (
    <>
      <CartSidebar />
      <Navbar expand='lg' style={{ backgroundColor: '#1D3868' }}>
        {/* Currency toggle button */}
        <Button
          className='d-flex align-items-center ml-1'
          style={{ color: 'white', cursor: 'pointer', marginRight: '20px' }}
        onClick={handleToggle}
        >
          Toggle Currency
        </Button>
        {/* Other header content */}
        <Navbar.Brand>
          <LinkContainer to={'/'}>
            <Nav.Link>
              <img src='/logo.png' alt='logo' width='142px' />
            </Nav.Link>
          </LinkContainer>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto mr-5' style={{ justifyContent: 'center' }}>
            <LinkContainer
              className='d-flex align-items-center'
              to={`/`}
              style={{ color: 'white', marginRight: '20px' }}
            >
              <Nav.Link>Shop</Nav.Link>
            </LinkContainer>
            <div
              className='d-flex align-items-center ml-1'
              onClick={openSidebar}
              style={{ color: 'white', cursor: 'pointer', marginRight: '20px' }}
            >
              Cart
              <FontAwesomeIcon
                className='ml-2 mb-1'
                icon={faShoppingBag}
                style={{ color: 'white' }}
              />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;