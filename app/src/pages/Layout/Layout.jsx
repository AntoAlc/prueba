import React from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import './Layout.css'

const Layout = (props) => {

    return (
        <>
            <Header />
                <div className="general-container">
                    {props.children}
                </div>
            <Footer />
        </>
    )

}

export default Layout
