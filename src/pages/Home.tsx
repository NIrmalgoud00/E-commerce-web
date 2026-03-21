import React from 'react'
import CosmaticsBanner from "../assets/CosmaticsBanner.png";
import ElectronicsBanner from "../assets/ElectronicsBanner.png";
import JewelleryBanner from "../assets/JewelleryBanner.png";
import ClothesBanner from "../assets/ClothesBanner.png";
import "../styles/home.css"
import CategorySection from '../components/CategorySection';

const Home: React.FC = () => {

    return (
        <div className='home-section w-100 h-100'>
            <CategorySection name="electronics" BannerPath={ElectronicsBanner} />
            <CategorySection name="cosmetics" BannerPath={CosmaticsBanner} />
            <CategorySection name="jewellery" BannerPath={JewelleryBanner} />
            <CategorySection name="clothes" BannerPath={ClothesBanner} />

        </div>
    )
}

export default Home;
