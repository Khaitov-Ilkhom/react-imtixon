import "./SinglePage.css"
import {Fragment, useContext, useState} from 'react'
import {useParams} from "react-router-dom";
import {useFetch} from "../../hooks/useFetch.jsx";
import {AiFillStar, AiOutlineStar} from "react-icons/ai";
import {v4 as uuidv4} from "uuid";
import {FaRegHeart, FaHeart, FaTwitter, FaFacebookF} from "react-icons/fa";
import {SlBasketLoaded} from "react-icons/sl";
import AppContext from "../../context/store/Index.jsx";


const SinglePage = () => {
    const [state, dispatch] = useContext(AppContext)

    const {id} = useParams()

    const [data, loading] = useFetch(`products/${id}`)

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
                    <Fragment key={uuidv4()}>{stars}</Fragment> <Fragment key={uuidv4()}>{starsE}</Fragment>
                </div>
            </div>
        );
    }

    const [like, setLike] = useState(false)
    const [stock, setStock] = useState(1)
    const addToCart = (data) => {
        dispatch({type: "ADD_TO_CART",  data: {...data, stock}})
    }

    return (
        <div className="min-h-[200px]">
            <div className="w-full flex justify-center gap-5 px-[60px] mt-[50px]">
                <div className="max-w-[600px]">
                    <img className="w-full" src={data.image} alt={data.name}/>
                </div>
                <div className="max-w-[700px] w-full">
                    <div className="border-b-2">
                        <h2 className="text-zinc-800 text-2xl font-medium ">{data.name}</h2>
                        <div className="flex items-center gap-4 py-3">
                            {
                                // starsFunc(data.rating)
                            }
                            <span className="text-neutral-300 text-base font-normal ">{data.numReviews} reviews</span>
                            <a className="text-sky-400 text-base font-normal"  href="#">Submit a review</a>
                        </div>
                    </div>
                    <div className="border-b-2 py-3">
                        <div className="flex items-center gap-3">
                                <span
                                    className="text-sky-400 text-lg font-bold  leading-loose tracking-wide">${(data.price - (data.price * 24) / 100).toFixed(2)}</span>
                            <span
                                className="text-slate-400 text-sm font-normal  line-through leading-[21px] tracking-wide">${data.price}</span>
                            <span
                                className="text-rose-400 text-sm font-bold  leading-[21px] tracking-wide">24% Off</span>
                        </div>
                        <div className="max-w-[300px] w-full text-neutral-800 text-lg font-normal">
                            <div className="w-full flex items-center justify-between py-1"><span>Availability:</span>
                                <span>In stock: {data.countInStock}</span></div>
                            <div className="w-full flex items-center justify-between py-1"><span>Category:</span>
                                <span>{data.brand}</span></div>
                            <span>Free Shipping</span>
                        </div>
                    </div>
                    <div className="h-[100px] border-b-2 w-full"></div>
                    <div className="py-3 border-b-2 ">
                        <div className="w-full flex justify-between items-center">
                            <div
                                className="bg-[#f6f7f8] max-w-[140px] w-full flex justify-between px-4 py-2 font-bold rounded-lg">
                                <button onClick={() => setStock(stock > 1 ? stock - 1 : stock)} className="text-sky-400">-</button>
                                <span>{stock}</span>
                                <button onClick={() => setStock(stock > 0 ? stock + 1 : stock)} className="text-sky-400">+</button>
                            </div>
                            <div className="flex items-center gap-4">
                                <button onClick={() => addToCart(data)}
                                    className="bg-sky-100 text-sky-400 py-2 px-4 flex items-center rounded-lg gap-3">
                                    <span><SlBasketLoaded/></span> Add To Cart
                                </button>
                                <button onClick={() => setLike(!like)}
                                        className="bg-sky-100 text-sky-400 p-3 rounded-lg">{like ?
                                    <span><FaRegHeart/></span> :
                                    <span className="text-red-600"><FaHeart/></span>}</button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-between items-center text-white gap-3 py-4">
                        <button
                            className="w-full py-2 px-4 flex justify-center items-center rounded-lg gap-3 bg-[#385c8e]">
                            <FaFacebookF/> <span>Share on Facebook</span></button>
                        <button
                            className="w-full py-2 px-4 flex justify-center items-center rounded-lg gap-3 bg-sky-600">
                            <FaTwitter/> <span>Share on Twitter</span></button>
                    </div>
                </div>
            </div>
            <div className="mx-[60px] mt-[50px] bg-[#fafafb] p-[40px]">
                <div className=" text-blue-500 text-lg border-b-2 max-w-[200px] border-blue-400">Product Infomation</div>
                <div className=" text-slate-400 text-sm font-normal py-5">{data.description}</div>
                <div className=" text-slate-400 text-sm font-normal">{data.richDescription}</div>
            </div>
        </div>
    )
}
export default SinglePage
