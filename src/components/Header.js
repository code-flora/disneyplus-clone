import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux';
import { selectHeaderMenu } from '../features/header/menuSlice';

function Header() {

    let items = useSelector(selectHeaderMenu);
    let menuList = items.map((item) => {
        return (
            <a href={item.url} key={item.id}>
                <img className="menu-icon" src={item.iconUrl} />
                <span>{item.name}</span>
            </a>
        );
    })

    return (
        <Nav>
            <Logo src="/images/logo.svg" />
            <NavMenu>
                {menuList}
            </NavMenu>
            <UserImg src="/images/Windows-Profile-Pic.jpg" />
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    height: 70px;
    background: #090b13;
    overflow-x: hidden;
`

const Logo = styled.img`
    width: 80px;
`

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 20px;
    text-transform: uppercase;
    letter-spacing: 1.4px;
    font-size: 13px;

    .menu-icon {
        height: 20px;
      }

    a {
        display: flex;
        align-items: center;
        padding: 0 14px;
        cursor: pointer;

        span {
            padding-left: 2px;
            position: relative;
            
            &:after{
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                transform-origin: left center;
                transform: scaleX(0);
                opacity: 0;
                transition: all 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            }
        }

        &:hover {
            span:after {
                transform: scaleX(1);
                opacity: 1;
            }           
        }
    }
`
const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
`