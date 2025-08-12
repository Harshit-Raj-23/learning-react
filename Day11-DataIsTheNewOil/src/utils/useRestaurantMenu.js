import { useState, useEffect } from "react";
import { RESTAURANT_MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
    const [ restaurantInfo , setRestaurantInfo ] = useState(null);
    const [ itemCategories, setItemCategories ] = useState([]);

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

                const itemCategories = await json?.data?.cards.find(x=> x.groupedCard)?.
                                        groupedCard?.cardGroupMap?.REGULAR?.cards?.
                                        filter(x=> x.card?.card?.['@type'] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") || [];
                console.log(itemCategories);        
                setItemCategories(itemCategories);
            }
        } catch (error) {
            setRestaurantInfo(null);
            setItemCategories([]);
            console.error(error);
            
        }
    };

    return [ restaurantInfo, itemCategories ];
};

export default useRestaurantMenu;