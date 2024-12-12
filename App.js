import React from "react"
import ReactDOM from "react-dom/client"
import logo from "./Assets/logo.svg"


const Logo = () => (
    <a href="/">
        <img
            src={logo}
            alt="this is alt text for logo"
            className="logo"
        />
    </a>
)

const Header = () => {
    return (
        /***
         * 
         * Header 
         *  - Logo
         *  - Navigation Items
         *  - Cart
         * 
         * Body 
         *      - Search Bar 
         *      - Restaurant List
         *          - Restaurant Card
         *              - Image of Food 
         *              - Name of Restaurant
         *              - Rating
         *              - Cusines
         * 
         * Footer 
         */
        <React.Fragment>
            <nav>
                <Logo />
                <ul>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>About</li>
                    <li>Cart</li>
                </ul>
            </nav>
            <Header />
        </React.Fragment>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header />)