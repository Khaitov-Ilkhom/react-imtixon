import saveToLocalStorage from "../../utils/LocalStorage.jsx";

export const initialState = JSON.parse(localStorage.getItem("product")) || []

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART": {
            const newState = [ ...state, action.data]
            saveToLocalStorage("product", newState)
            return newState
        }
        case "REMOVE_CARD": {
            const newState = state.filter(product => product.id !== action.id)
            saveToLocalStorage("product", newState)
            return newState
        }
        case "INCREMENT_STOCK": {
            const index = state.findIndex(product => product.id === action.id)
            console.log(index)
            return [...state, state[index] = {...state[index], stock: state[index].stock > 0 ? state[index].stock + 1 : state[index].stock } ]
        }
        case "DECREMENT_STOCK": {
            const index = state.findIndex(product => product.id === action.id)
            console.log(index)
            return [...state, state[index] = {...state[index], stock: state[index].stock > 1 ? state[index].stock - 1 : state[index].stock } ]
        }
        default: {
            return state
        }
    }
}

export default reducer