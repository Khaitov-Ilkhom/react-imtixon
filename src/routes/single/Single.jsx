import React from 'react'
import Container from "../../components/container/Container.jsx";
import SinglePage from "../../components/singlePage/SinglePage.jsx";
import {Navbar} from "../../components/navbar/Navbar.jsx";
import Footer from "../../components/footer/Footer.jsx";
import TopProducts from "../../components/topProducts/TopProducts.jsx";

const Single = () => {
    return (
        <Container>
            <Navbar/>
            <div className="w-full h-[50px] bg-[#f6f7f8] my-[20px]"></div>
            <SinglePage/>
            <TopProducts/>
            <Footer/>
        </Container>
    )
}
export default Single
