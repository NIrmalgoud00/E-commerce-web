import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';
// import { CartContext } from '../context/CartContext';
import type { UserTypes } from "../types";

const Navbar: React.FC<{ User: UserTypes }> = ({ User }) => {
    //   const { cart } = useContext(CartContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light w-100 px-3">
            <Link className="navbar-brand" to="/">ShopSphere</Link>

            {/* Mobile Toggle Button */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navContent">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navContent">
                {/* Search Bar - Centers on Desktop */}
                <form className="d-flex mx-auto w-50">
                    <input className="form-control me-2" type="search" placeholder="Search products..." />
                </form>

                {/* User Options */}
                <div className="navbar-nav align-items-center  gap-3">
                    {User.isLoggedIn ? (
                        <span className="nav-item">Hi, {User.userName}</span>
                    ) : (
                        <Link className="nav-item nav-link" to="/login">Sign In </Link>
                    )}

                    <Link className="nav-item nav-link" to="/wishlist"><FaHeart size={24} /></Link>

                    <Link className="nav-item nav-link position-relative" to="/cart">
                        <FaShoppingCart size={24} />
                        {/* {cart.length > 0 && ( */}
                        <span className="position-absolute top-1 start-100 translate-middle badge rounded-pill bg-danger">
                            {/* {cart.length} */}
                            3
                        </span>
                        {/* )} */}
                    </Link>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;