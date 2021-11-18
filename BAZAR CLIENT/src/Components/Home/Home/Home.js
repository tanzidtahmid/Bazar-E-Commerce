import React from 'react';
import FashionForMen from '../../FashionForMen/FashionForMen';
import HomeAppliance from '../../HomeAppliance/HomeAppliance';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <FashionForMen></FashionForMen>
            <HomeAppliance></HomeAppliance>
            <Footer></Footer>
        </div>
    );
};

export default Home;