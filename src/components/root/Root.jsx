import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Banner from "../banner/Banner";
import Category from "../category/Category";
import FeaturedJobs from "../featuredjobs/FeaturedJobs";



const Root = () => {
    return (
        <div>
            <div className='container mx-auto'>
                <Outlet></Outlet>
                <Header></Header>
                <Banner></Banner>
                <Category></Category>
                <FeaturedJobs></FeaturedJobs>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;