import "./Navbar.css"
import Container from "../container/Container.jsx";
import {Link} from "react-router-dom";
import logo from "../../images/logo.png"
import { FaUser } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import React, {useContext} from "react";
import AppContext from "../../context/store/Index.jsx";



export const Navbar = () => {

    const [state, dispatch] = useContext(AppContext)

    return (
        <Container>
           <div className="navbar mt-4 px-[30px]">
               <div className="font-medium">
                   <Link className="w-full flex justify-center items-center gap-2" to={"/profile"}><FaUser/> Manage </Link>
               </div>
               <div className="max-w-[150px]">
                   <Link to={"/home"}>
                       <img src={logo} alt="Logo"/>
                   </Link>
               </div>
               <div className="flex items-center gap-3 font-medium">
                   <Link className="hover:text-blue-800" to={"/"}> Register </Link>
                   <Link className="hover:text-blue-800" to={"/login"}> Log In </Link>
                   <Link className="relative" to={'/basket'}><SlBasket/> <span className="w-5 h-5 flex font-semibold items-center justify-center text-xs -top-3 -right-3  bg-rose-500 absolute rounded-full">{state.length !== 0 ? state.length : <></>}</span> </Link>
               </div>
           </div>
        </Container>
    )
}
