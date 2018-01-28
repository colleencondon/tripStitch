import React, { Component } from 'react';
import logo from '../logo.svg';
import styled from "styled-components";

const HeaderContainer = styled.div`
    width: 100%;
    background-color: #1F90D8;
    height: 60px;
    color: #FFFFFF;
`

const Logo = styled.img`
    height: 50px;
    margin-left: 5px;
    margin-top: 5px;
`

class Header extends Component {
    render() {
        const username = this.props.username;
        return (
            <HeaderContainer>
                <Logo src={logo} className="App-logo" alt="logo"/>
            </HeaderContainer>
        )
    }
}

export default Header;
