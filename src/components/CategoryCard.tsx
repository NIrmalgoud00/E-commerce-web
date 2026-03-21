// Use React Router to link entire category cards
import { Link } from 'react-router-dom';

interface CategoryCardProps {
    name: string,
    BannerPath: string
}
const CategoryCard: React.FC<CategoryCardProps> = ({ name, BannerPath }) => (
    <Link to='/products' className={`card border-0 bg-transparent h-100 text-center py-3 text-decoration-none text-white`}>
        <h3 className="card-title fw-bold text-black">{name}</h3>
        {/* <p className="fs-1 fw-bold">{discount}</p> */}
        <div className='discount-image-section w-100'>
            <img src={BannerPath} alt="HeroImage" />
        </div>
        {/* Optional: Add a simple "View More" label that shows on hover */}
    </Link>
);

export default CategoryCard;

// Usage in your Hero/Homepage component: