import "./Home.css"
import Container from "../container/Container.jsx";
import hero from "../../images/hero-image.png";
import snieakers from "../../images/shoes.png"
import free from "../../images/shipping.png"
import refund from "../../images/refund.png"
import support from "../../images/support.png"
import {useFetch} from "../../hooks/useFetch.jsx";
import {AiFillStar, AiOutlineStar} from "react-icons/ai";
import {v4 as uuidv4} from 'uuid';
import {Link} from "react-router-dom";
import {useState} from "react";

const HomeComponent = () => {
    const [data, loading] = useFetch("products")

    function starsFunc(numString) {
        if (numString > 5) {
            numString = 5;
        }
        const munStars = 5 - Math.floor(numString);
        const stars = Array(Math.floor(numString)).fill(
            <AiFillStar className="fill-amber-500"/>
        );
        const starsE = Array(munStars).fill(
            <AiOutlineStar className="fill-amber-500"/>
        );
        return (
            <div className="starsWrapper flex items-center gap-2 mt-1">
                <div className="flex items-center gap-1 w-24">
                    {stars} {starsE}
                </div>
                <span className="text-sm">{numString}/5.0</span>
            </div>
        );
    }

    const [stock, setStock] = useState(8)


    return (
        <Container>
            <div className="w-full h-full bg-gradient-to-b from-black to-black rounded-[5px] mt-4">
                <img className="w-full" src={hero} alt="Hero image"/>
            </div>


            <div className="text-zinc-800 text-[35px] font-semibold font-['Poppins'] text-center my-[50px]">ALL PRODUCTS</div>
            <div className="w-full grid grid-cols-4 gap-3 my-[30px] px-[60px]">
                {
                    data?.slice(0, stock).map(product =>
                        <div className="w-full border-2" key={product.id}>
                            <Link className=" bg-[#E5E7EB] " to={`/single/${product.id}`}>
                                <img className="w-full h-[230px] object-contain" src={product.image} alt={product.name}/>
                            </Link>
                            <div className="card-body">
                                <div className="text-blue-950 text-lg font-bold font-['Poppins'] leading-[27px] tracking-wide">{product.name}</div>
                                {
                                    starsFunc(product.rating)
                                }
                                <div className="flex items-center gap-3">
                                <span
                                    className="text-sky-400 text-lg font-bold  leading-loose tracking-wide">${(product.price - (product.price * 24) / 100).toFixed(2)}</span>
                                    <span
                                        className="text-slate-400 text-sm font-normal  line-through leading-[21px] tracking-wide">${product.price}</span>
                                    <span
                                        className="text-rose-400 text-sm font-bold  leading-[21px] tracking-wide">24% Off</span>
                                </div>
                            </div>
                        </div>
                    )
                }


            </div>
            <div className="text-sky-400 text-xl font-medium text-center my-3 ">
                <button className="border-b-2 border-sky-400" onClick={() => setStock(stock + 4)}>Show more</button>
            </div>
            <div className="bg-sky-400 flex justify-between items-center w-full px-[60px] my-[80px]">
                <div className="w-[700px] h-[280px] ">
                    <div className="text-white text-[45px] font-medium">Adidas Men Running<br/>Sneakers</div>
                    <div className=" text-white text-2xl py-2 font-normal">Performance and design. Taken right to the edge.</div>
                    <div className="">
                        <button className=" border-b-2 text-white text-xl font-semibold">SHOP NOW</button>
                    </div>
                </div>
                <div>
                    <img className="w-[700px] pl-[40px]" src={snieakers} alt="Sneakers"/>
                </div>
            </div>

            <div className="w-full flex justify-between items-center text-center px-[60px]">
                <div className="max-w-[300px] flex justify-center items-center flex-col">
                    <div>
                        <img src={free} alt="Icon"/>
                    </div>
                    <h2 className=" text-zinc-800 text-[27px] font-medium pt-10 pb-5">Free Shipping</h2>
                    <p className="text-zinc-800 text-lg font-normal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, molestias.</p>
                </div>
                <div className="max-w-[300px] flex justify-center items-center flex-col">
                    <div>
                        <img src={refund} alt="Icon"/>
                    </div>
                    <h2 className=" text-zinc-800 text-[27px] font-medium pt-10 pb-5">100% Refund</h2>
                    <p className="text-zinc-800 text-lg font-normal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, molestias.</p>
                </div>
                <div className="max-w-[300px] flex justify-center items-center flex-col">
                    <div>
                        <img src={support} alt="Icon"/>
                    </div>
                    <h2 className=" text-zinc-800 text-[27px] font-medium pt-10 pb-5">Support 24/7</h2>
                    <p className="text-zinc-800 text-lg font-normal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, molestias.</p>
                </div>
            </div>
        </Container>
    )
}
export default HomeComponent
