import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux';
import { selectHeaderMenu } from '../features/header/menuSlice';
import { selectUserName, selectUserPhoto, setUserLogin, setUserSignOut } from '../features/user/userSlice';
import { auth, provider } from '../firebase'
import { useNavigate } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Header() {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);
    const navigate = useNavigate();

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                }))
                navigate("/");
            }
        })
    }, [])

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                let user = result.user;
                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                }))
                navigate(-2);
            })
    }

    const signOut = () => {
        auth.signOut()
            .then(() => {
                dispatch(setUserSignOut());
                navigate("/login");
            })
    }

    let items = useSelector(selectHeaderMenu);
    let menuList = items.map((item) => {
        return (
            <a href={item.linkUrl} key={item.id}>
                <img className="menu-icon" src={item.iconUrl} alt="" />
                <span>{item.name}</span>
            </a>
        );
    })

    const [menuOpen, setMenu] = useState(false);

    return (
        <Nav>
            <Logo src="https://firebasestorage.googleapis.com/v0/b/disney-plus-clone-e2d5c.appspot.com/o/DisneyClone_Assets%2Fgeneral%2Flogo.svg?alt=media&token=f35382de-6475-4e68-bfa1-90690ba9ce23" />

            <MediaQuery minWidth={1000}>

                {!userName ? (
                    <Login onClick={signIn}>Login</Login>) :
                    <>
                        <NavMenu>
                            {menuList}
                        </NavMenu>

                        <UserImg src={userPhoto} onClick={signOut} />
                    </>

                }
            </MediaQuery>

            <MediaQuery maxWidth={999}>

                {!userName ? (
                    <Login onClick={signIn}>Login</Login>) :
                    <>
                        <Wrapper>
                            <UserImg src={userPhoto} onClick={signOut} />
                            {!menuOpen ? <BurgerMenuIcon onClick={() => setMenu(!menuOpen)} /> : <CloseMenuIcon onClick={() => setMenu(!menuOpen)} />}
                        </Wrapper>

                        {menuOpen ? (<NavToggleMenu >
                            {menuList}
                        </NavToggleMenu>) : ""}



                    </>

                }

            </MediaQuery>

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

const Wrapper = styled.div`
    display: flex;
    align-items: center;
`

const Logo = styled.img`
    width: 80px;
`

const Login = styled.div`

    padding: 6px 20px;
    border: 1px solid #fff;
    border-radius: 10px;
    background-color: rgba(0,0,0,0.6);
    text-transform: uppercase;
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &:hover{
        background-color: #f9f9f9;
        color: black;
        border-color: transparent;
    }
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
        text-decoration: none;
        color: white;

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

const NavToggleMenu = styled(NavMenu)`
    position: absolute;
    width: 100%;
    top: 70px;
    right: 0;
    padding: 20px 5px;
    flex-direction: column;
    align-items: center;
    z-index: 2;
    background-color: rgba(0,0,0,0.7);
    

    a{
        margin-bottom: 10px;
    }
`
const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
`
const BurgerMenuIcon = styled(MenuIcon)`
    margin-left: 10px;
    cursor: pointer;
`
const CloseMenuIcon = styled(CloseIcon)`
    margin-left: 10px;
    cursor: pointer;
`