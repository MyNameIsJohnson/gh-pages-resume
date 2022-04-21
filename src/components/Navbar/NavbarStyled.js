import React, { useState } from 'react';
import {
  Nav,
  NavLink,
  NavMenu,
  Bars,
  Times, 
  NavList,
  NavListItem,
} from './NavbarElements';
import './Navbar.css';
import Dropdown from './Dropdown';

const NavbarStyled = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => !click ? setClick(true) : setClick(false);

  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  return (
    <>
      <Nav className='navbar'>
        <NavMenu>
          {!click ? (
            <Bars onClick={handleClick} />
          ) : (
            <Times onClick={handleClick}/>
          )}       

          <NavList openMenu={click}>
            <NavListItem >
              <NavLink to='/' onClick={closeMobileMenu}>
                Home
              </NavLink>
            </NavListItem>
            <NavListItem
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <NavLink
                to='/services'              
                onClick={closeMobileMenu}
              >
                Services <i className='fas fa-caret-down' />
              </NavLink>
              {dropdown && <Dropdown />}
            </NavListItem>
            <NavListItem >
              <NavLink
                to='/projects'              
                onClick={closeMobileMenu}
              >
                Projects
              </NavLink>
            </NavListItem>
            <NavListItem >
              <NavLink
                to='/contact-us'              
                onClick={closeMobileMenu}
              >
                Contact Me
              </NavLink>
            </NavListItem>
          </NavList>
        </NavMenu>
      </Nav>

    </>
  );
};

export default NavbarStyled;