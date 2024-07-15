import Container from "../../components/container/Container.jsx";
import {Navbar} from "../../components/navbar/Navbar.jsx";
import Footer from "../../components/footer/Footer.jsx";
import BasketComponent from "../../components/basket/BasketComponent.jsx";

const Basket = () => {




    return (
        <Container>
            <Navbar/>
            <BasketComponent/>
            <Footer/>
        </Container>
    )
}
export default Basket
