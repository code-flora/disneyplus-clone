import React from 'react'
import styled from 'styled-components';

function Login() {
    return (
        <Container>
            <Content>
                <CTALogoOne src="https://firebasestorage.googleapis.com/v0/b/disney-plus-clone-e2d5c.appspot.com/o/DisneyClone_Assets%2Flogin%2Fcta-logo-one.svg?alt=media&token=dabe42fb-3d07-4257-9688-f610c9d686e9" />
                <SignUp>
                    GET ALL THERE
                </SignUp>
                <Description>
                    Get Premier Access to Raya and the last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundy will increase by $1.
                </Description>
                <CTALogoTwo src="https://firebasestorage.googleapis.com/v0/b/disney-plus-clone-e2d5c.appspot.com/o/DisneyClone_Assets%2Flogin%2Fcta-logo-two.png?alt=media&token=4f734a4e-41cc-47ee-84a5-d51107fa13c1" />
            </Content>
        </Container >
    )
}

export default Login

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: calc(100vh - 70px);
    overflow-x: hidden;

    &:before{
        content: "";
        background-image: url('https://firebasestorage.googleapis.com/v0/b/disney-plus-clone-e2d5c.appspot.com/o/DisneyClone_Assets%2Fgeneral%2Flogin-background.jpg?alt=media&token=b7d3ef4a-0b04-4998-ab7a-ee3afee2d57c');
        background-size: cover;
        background-repeat: no-repeat;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        opacity: 0.7;
        z-index: -1;
    }

`
const Content = styled.div`
    margin-top: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 650px;
    width: 90%;    
    padding: 80px 40px;
    
`

const CTALogoOne = styled.img`
    height: 100%;
    width: 100%;
`
const SignUp = styled.a`
    margin-top: 8px;
    margin-bottom: 12px;
    padding: 17px 0;
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    text-align: center;
    letter-spacing: 1.5px;
    color: #f9f9f9;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover{
        background-color: #0483ee;
    }
`

const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1px;
    text-align: center;
    line-height: 1.5;
`

const CTALogoTwo = styled(CTALogoOne)`
    margin-top: 5px;
    width: 90%;
`