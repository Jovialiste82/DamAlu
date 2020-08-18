import React from "react";
// import '../style/global.css';
import styled from 'styled-components'


const Button = styled.button`
    position: fixed;
    top: 30px;
    right: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 24px;
    width: 36px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    box-sizing: border-box;
`



const HamburgerButton = ({openNav}) => {

    return (
        <Button className="toggle-button" onClick={openNav}>
            <div className="toggle-button-line" />
            <div className="toggle-button-line" />
            <div className="toggle-button-line" />
        </Button>
    )

}

export default HamburgerButton