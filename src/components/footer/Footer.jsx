import React from 'react'
import Container from "../container/Container.jsx";
import logo from "../../images/logo.png"
import {FaFacebookF} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import cart1 from "../../images/Western-union.png"
import cart2 from "../../images/Group 19.png"
import cart3 from "../../images/Paypal.png"
import cart4 from "../../images/Group 509.png"


const Footer = () => {
    return (
        <Container>
           <div className=" bg-blue-200 min-h-[600px] pt-[120px] pb-10">
               <div className="w-full flex justify-between items-start px-[100px] ">
                   <div className="max-w-[200px]">
                       <div className="mb-5">
                           <img src={logo} alt=""/>
                       </div>
                       <p className="text-zinc-800 text-s font-normal">Lorem ipsum dolor sit amet, elit. Fuga, iusto molestias perferendis quia
                           unde voluptas?</p>
                   </div>
                   <div className="max-w-[200px]">
                       <h3 className="text-zinc-800 text-2xl font-medium mb-8">Follow Us</h3>
                       <p className="text-zinc-800 text-s font-normal">Since the 1500s, when an unknown printer took a
                           galley of type and scrambled.</p>
                       <div className="w-full flex items-center gap-3 ">
                           <span className="text-blue-600"><FaFacebookF/></span> <span className="text-sky-500"><FaTwitter/></span>
                       </div>
                   </div>
                   <div className="max-w-[200px]">
                       <h3 className="text-zinc-800 text-2xl font-medium mb-8">Contact Us</h3>
                       <p className="text-zinc-800 text-s font-normal">E-Comm, 4578 Marmora Road, Glasgow D04 89GR</p>
                   </div>
               </div>
               <div className="mt-[180px] flex justify-center">
                   <div className=" w-11/12 bg-white h-[2px] "></div>
               </div>
               <div className="w-full flex justify-between items-center px-[100px] pt-8">
                   <div className="text-neutral-900 text-sm font-normal">© 2018 Ecommerce theme by www.bisenbaev.com</div>
                   <div className="w-[300px] flex justify-center items-center gap-4">
                       <img className="w-[50px]" src={cart1} alt=""/>
                       <img className="w-[50px]" src={cart2} alt=""/>
                       <img className="w-[50px]" src={cart3} alt=""/>
                       <img className="w-[50px]" src={cart4} alt=""/>
                   </div>
               </div>
           </div>
        </Container>
    )
}
export default Footer
