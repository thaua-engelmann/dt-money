import React from 'react'
import "./header.scss";

import logoImg from "../../assets/logo.svg";

type HeaderProps = {
    setOpenTransactionModal: (openModal: boolean) => void;
}

const Header = ({setOpenTransactionModal}: HeaderProps) => {
    return (
        <header className="header">
            <div className="header-content">
                <div className="header-content-logo">
                    <img src={logoImg} alt="logo" />
                </div>
                <button type="button" className="header-content-button" onClick={() => setOpenTransactionModal(true)}>
                    New transaction
                </button>
            </div>
        </header>
    )
}

export default Header;
