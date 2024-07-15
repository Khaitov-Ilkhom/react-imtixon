import React from 'react'
import Container from "../../components/container/Container.jsx";
import {Navbar} from "../../components/navbar/Navbar.jsx";
import HomeComponent from "../../components/home/HomeComponent.jsx"
import TopProducts from "../../components/topProducts/TopProducts.jsx";
import Footer from "../../components/footer/Footer.jsx";

const Home = () => {
    return (
        <Container>
            <Navbar/>
            <HomeComponent/>
            <TopProducts/>
            <Footer/>
        </Container>
    )
}
export default Home
