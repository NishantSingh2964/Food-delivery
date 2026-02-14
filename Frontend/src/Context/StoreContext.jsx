import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});
    const [token, setToken] = useState("");
    const [food_list, setFoodList] = useState([]);

    const url = "https://food-delivery-ten-chi-34.vercel.app";

    // ADD TO CART
    const addToCart = async (itemId) => {
        setCartItems(prev => ({
            ...prev,
            [itemId]: prev[itemId] ? prev[itemId] + 1 : 1
        }));

        if (token) {
            await axios.post(
                url + "/api/cart/add",
                { itemId },
                { headers: { token } }
            );
        }
    };

    // REMOVE FROM CART
    const removeFromCart = async (itemId) => {
        setCartItems(prev => {
            const updated = { ...prev };
            if (updated[itemId] > 1) {
                updated[itemId]--;
            } else {
                delete updated[itemId];
            }
            return updated;
        });

        if (token) {
            await axios.post(
                url + "/api/cart/remove",
                { itemId },
                { headers: { token } }
            );
        }
    };

    // TOTAL CART AMOUNT 
    const getTotalCartAmmount = () => {
        let totalAmount = 0;

        for (const item in cartItems) {
            const itemInfo = food_list.find(
                product => product._id === item
            );
            if (itemInfo) {
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount;
    };

    // FETCH FOOD LIST
    const fetchFoodList = async () => {
        const response = await axios.get(url + "/api/food/list");
        console.log(response.data.data)
        setFoodList(response.data.data);
    };

    // LOAD CART DATA 
    const loadCartData = async (token) => {
        const response = await axios.get(
            url + "/api/cart/get",
            { headers: { token } }
        );

        if (response.data.success) {
            setCartItems(response.data.cartData);
        }
    };

    useEffect(() => {
        fetchFoodList();

        const storedToken = localStorage.getItem("token");
        if (storedToken) {
            setToken(storedToken);
            loadCartData(storedToken);
        }
    }, []);

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmmount, 
        url,
        token,
        setToken
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
