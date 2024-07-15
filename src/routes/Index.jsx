import {Navigate, Route, Routes} from "react-router-dom";
import Home from "./home/Home.jsx";
import Basket from "./basket/Basket.jsx";
import Single from "./single/Single.jsx";
import Profile from "./profile/Profile.jsx";
import NotFound from "./notFound/NotFound.jsx";
import Register from "./register/Register.jsx";
import Login from "./login/Login.jsx";

const Index = () => {
    return (
        <Routes>
            <Route path="/" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/basket" element={<Basket/>}/>
            <Route path="/single/:id" element={<Single/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/not-found" element={<NotFound/>}/>
            <Route path="*" element={<Navigate to="not-found"/>}/>
        </Routes>
    )
}
export default Index
