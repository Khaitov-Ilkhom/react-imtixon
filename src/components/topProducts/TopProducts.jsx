import React from 'react'
import Container from "../container/Container.jsx";
import {useFetch} from "../../hooks/useFetch.jsx";
import {AiFillStar, AiOutlineStar} from "react-icons/ai";
import {v4 as uuidv4} from "uuid";

const TopProducts = () => {
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
            <div className="starsWrapper flex items-center gap-2 my-4">
                <div className="flex items-center gap-1 w-24">
                    {stars} {starsE}
                </div>
                <span className="text-sm">{numString}/5.0</span>
            </div>
        );
    }

    return (
        <Container>
            <div className="text-zinc-800 text-[35px] font-semibold text-center mt-[80px]">MOST TOP RATED PRODUCTS</div>
            <div className="grid grid-cols-3 w-full gap-3 my-[60px] px-[60px]">
                {
                    data?.sort((a, b) => b.rating - a.rating).slice(0, 3).map(product =>
                        <div key={product.id} className=" border-2 w-full flex justify-center items-center">
                            <div className=" bg-[#E5E7EB]" >
                                <img className="w-full h-[230px] object-contain" src={product.image} alt={product.name}/>
                            </div>
                            <div className="card-body max-w-[180px]">
                                <div className="text-blue-950 text-lg font-bold leading-[27px] tracking-wide">{product.name}</div>
                                {
                                    starsFunc(product.rating)
                                }
                                <div className="flex items-center gap-2">
                                <span
                                    className="text-sky-400 text-lg font-bold  leading-loose tracking-wide">${(product.price - (product.price * 24) / 100).toFixed(2)}</span>
                                    <span
                                        className="text-slate-400 text-sm font-normal  line-through leading-[21px] tracking-wide">${product.price}</span>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </Container>
    )
}
export default TopProducts
