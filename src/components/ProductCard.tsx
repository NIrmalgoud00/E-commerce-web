import React from 'react';
import { useNavigate } from 'react-router-dom';

import { FaShoppingCart, FaRegHeart } from 'react-icons/fa';
import type { ProductTypes } from "../types";

interface ProductCardProps {
    product: ProductTypes
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        // Navigates to /product/1, /product/2, etc.
        navigate(`/product/${product.id}`);
    };
    return (
        <div className="col-lg-3 col-md-6 col-sm-12"
            onClick={handleCardClick}
        >
            <div className="card border-0 shadow-sm product-card">
                {/* Product Image */}
                <div className="position-relative overflow-hidden">
                    <img
                        src={product.image}
                        className="card-img-top p-3"
                        alt={product.title}
                        style={{ objectFit: 'contain' }}
                    />
                    {/* Wishlist Overlay */}
                    <button className="btn btn-light position-absolute top-0 end-0 m-3 rounded-circle shadow-sm">
                        <FaRegHeart className="text-danger" />
                    </button>
                </div>

                {/* Product Details */}
                <div className="card-body pt-0 d-flex flex-column">
                    {/* <p className="text-muted small mb-1">{product.category}</p> */}
                    <h5 className="card-title text-start fw-bold text-dark text-truncate">
                        {product.title}
                    </h5>

                    <div className="mt-auto">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <span className="fs-5 fw-bold text-primary">${product.price}</span>
                            {/* Simple Rating Badge */}
                            <span className="badge bg-warning text-dark">★ {product.rating.rate} ({product.rating.count})</span>
                        </div>

                        <button className="btn btn-primary w-100 d-flex align-items-center justify-content-center gap-2 py-2 fw-semibold"
                            onClick={(e) => {
                                e.stopPropagation();
                                console.log("add to cart")
                            }}
                        >
                            <FaShoppingCart /> Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;

