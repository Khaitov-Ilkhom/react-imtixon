import saveToLocalStorage from "../../utils/LocalStorage.jsx";

export const initialState = JSON.parse(localStorage.getItem("product")) || []

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART": {
            let index = state.findIndex(product => product.id === action.data.id)
            if (index < 0) {
                state = [
                    ...state,
                    action.data

                ]
                saveToLocalStorage("product", state)
            } else {
                return state
            }
        }
        case "REMOVE_CARD": {
            const newState = state.filter(product => product.id !== action.id)
            saveToLocalStorage("product", newState)
            return newState
        }
        case "INCREMENT_STOCK": {
            return state.map(product => product.id === action.id ? {...product, stock: product.stock + 1} : product)
        }
        case "DECREMENT_STOCK": {
            return state.map(product => product.id === action.id ? {...product, stock: product.stock > 1 ? product.stock - 1 : product.stock} : product)
        }
        default: {
            return state
        }
    }
}

export default reducer