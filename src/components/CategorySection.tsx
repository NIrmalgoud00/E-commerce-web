import React, { useState } from 'react';
import { useNavigate } from 'react-router';

import CategoryCard from './CategoryCard';
import ProductCard from '../components/ProductCard';

import type { ProductTypes } from "../types";

interface CategorySectionProps {
    name: string;
    BannerPath: string;
}

const CategorySection: React.FC<CategorySectionProps> = ({ name, BannerPath }) => {
    const navigate = useNavigate();

    const [products, setProducts] = useState<ProductTypes[]>([
        {
            id: 1,
            image: "https://cdn.viously.com/video/0-SWRbimnsp/1-w240.webp",
            title: "T-shirt",
            category: "clothes",
            price: 332,
            rating: {
                rate: 3.5,
                count: 324
            },
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, quae?"
        },
        {
            id: 2,
            image: "https://cdn.viously.com/video/0-SWRbimnsp/1-w240.webp",
            title: "T-shirt",
            category: "clothes",
            price: 449,
            rating: {
                rate: 3.9,
                count: 112
            },
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, quae?"
        },
        {
            id: 3,
            image: "https://cdn.viously.com/video/0-SWRbimnsp/1-w240.webp",
            title: "T-shirt",
            category: "clothes",
            price: 499,
            rating: {
                rate: 3.3,
                count: 668
            },
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, quae?"
        },
        {
            id: 4,
            image: "https://cdn.viously.com/video/0-SWRbimnsp/1-w240.webp",
            title: "T-shirts mmcmkv",
            category: "clothes",
            price: 999,
            rating: {
                rate: 4.8,
                count: 412
            },
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, quae?"
        },
    ])

    // filter product a/c category //

    return (
        <div className='banner-section'>
            <CategoryCard name={name} BannerPath={BannerPath} />
            <div className="row g-4 product-list">
                {products.map((product) => <ProductCard key={product.id} product={product} />)}
            </div>
            <button className='rounded-5 bg-primary text-light mt-4 px-3 py-1'
                onClick={() => {
                    navigate('/products')
                }}>
                View All
            </button>
        </div>
    )
}

export default CategorySection



