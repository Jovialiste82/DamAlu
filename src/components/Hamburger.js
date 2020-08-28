import React from "react";
// import '../style/global.css';
import styled from 'styled-components'


const Button = styled.button`
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
    margin-right: 3vh;
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