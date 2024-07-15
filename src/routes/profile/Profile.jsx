import React from 'react'
import Container from "../../components/container/Container.jsx";
import {Navbar} from "../../components/navbar/Navbar.jsx";
import ManageProducts from "../../components/manageProducts/ManageProducts.jsx";

const Profile = () => {


    return (
        <Container>
            <Navbar/>
            <ManageProducts/>
        </Container>
    )
}
export default Profile
