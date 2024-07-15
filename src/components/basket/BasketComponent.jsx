import React, {useContext, useState} from 'react'
import Container from "../container/Container.jsx";
import AppContext from "../../context/store/Index.jsx";
import { CiCircleRemove } from "react-icons/ci";


const BasketComponent = () => {

    const [state, dispatch] = useContext(AppContext)
    const removeCard = (id) => {
        dispatch({type: "REMOVE_CARD", id})
    }

    const incrementStock = (id) => {
        dispatch({type: "INCREMENT_STOCK", id})
    }
    const decrementStock = (id) => {
        dispatch({type: "DECREMENT_STOCK", id})
    }


    return (
        <Container>
            <div>
                <table className="px-[60px] w-full my-[20px]">
                    <tbody className="w-full">
                    <tr className="w-full justify-around items-center border-b-2">
                        <th className="max-w-[300px] py-3 text-zinc-800 text-xl font-medium">PRODUCT</th>
                        <th className="max-w-[300px] py-3 text-zinc-800 text-xl font-medium">PRICE</th>
                        <th className="max-w-[300px] py-3 text-zinc-800 text-xl font-medium">QTY</th>
                        <th className="max-w-[300px] py-3 text-zinc-800 text-xl font-medium">UNIT PRICE</th>
                    </tr>
                    {
                        state?.map(product =>
                            <tr key={product.id} className="w-full border-b-2 justify-around items-center min-h-[200px] text-neutral-800 text-lg font-normal">
                                <td className=" max-w-[400px] pl-[30px] py-5">
                                    <div className="flex items-center gap-5">
                                        <button className="font-2xl text-red-600" onClick={() => removeCard(product.id)}><CiCircleRemove/></button>
                                        <img className="max-w-[200px] max-h-[150px] object-contain" src={product.image}
                                             alt={product.name}/>
                                        <span>{product.name}</span>
                                    </div>
                                </td>
                                <td className="max-w-[200px] text-center">
                                    ${product.price}
                                </td>
                                <td className="max-w-[300px] w-full px-[10px] flex justify-center items-center">
                                    <div
                                        className="bg-[#f6f7f8] max-w-[140px] w-full flex justify-between items-center px-4 py-2 mt-[50px] font-bold rounded-lg">
                                        <button onClick={() => decrementStock(product.id)} className="text-sky-400">-
                                        </button>
                                        <span>{product.stock}</span>
                                        <button onClick={() => incrementStock(product.id)} className="text-sky-400">+
                                        </button>
                                    </div>
                                </td>
                                <td className="max-w-[200px] text-center ">${product.price * product.stock}</td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
                <div className="w-full grid grid-cols-2 gap-5 my-[50px]">
                    <div></div>
                    <div className="max-w-[400px] w-full">
                        <div className="w-full text-neutral-800 text-lg font-normal border-b-2">
                            <div className="w-full flex justify-between items-center">
                                <span>Subtotal</span> <span>${state.reduce((sum, a) => sum + a.price, 0)}</span>
                            </div>
                            <div className="w-full flex justify-between items-center py-3">
                                <span>Shipping fee</span> <span>$20</span>
                            </div>
                            <div className="w-full flex justify-between items-center pb-3">
                                <span>Coupon</span>
                                <select>
                                    <option value="No">No</option>
                                    <option value="Yes">Yes</option>
                                </select>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="w-full py-5 flex justify-between items-center text-zinc-800 text-3xl font-medium ">
                                <span>Tootal</span> <span>${state.reduce((sum, a) => sum + a.price, 0) + 20}</span>
                            </div>
                            <button className="w-full bg-sky-400 text-white text-lg font-medium py-2 rounded">Check out</button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}
export default BasketComponent
