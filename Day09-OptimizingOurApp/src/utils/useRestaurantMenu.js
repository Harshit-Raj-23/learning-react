import { useState, useEffect } from "react";
import { RESTAURANT_MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
    const [ restaurantInfo , setRestaurantInfo ] = useState(null);
    const [ restaurantMenu, setRestaurantMenu ] = useState([]);

    useEffect(() => {
        getRestaurantInfo(resId);
    }, []);

    const getRestaurantInfo = async (resId) => {
        try {
                const response = await fetch( RESTAURANT_MENU_API + resId);
            if (!response.ok) {
                const err = response.status;
                throw new Error(err);
            }else{
                const json = await response.json();
                const restaurantData = json?.data?.cards
                                    ?.map((x) => x.card)
                                    ?.find((x) => x && x.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant")?.card
                                    ?.info || null;
                console.log(restaurantData);        
                setRestaurantInfo(restaurantData)

                const menuItems = await json?.data?.cards.find(x=> x.groupedCard)?.
                                        groupedCard?.cardGroupMap?.REGULAR?.
                                        cards?.map(x => x.card?.card)?.
                                        filter(x=> x['@type'] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")?.
                                        map(x=> x.itemCards).flat().map(x=> x.card?.info) || [];
                console.log(menuItems);        
                setRestaurantMenu(menuItems);
            }
        } catch (error) {
            setRestaurantInfo(null);
            setRestaurantMenu([]);
            console.error(error);
            
        }
    };

    return [ restaurantInfo, restaurantMenu ];
};

export default useRestaurantMenu;