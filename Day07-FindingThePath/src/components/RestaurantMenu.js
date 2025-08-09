import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT_MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const [restaurantInfo, setRestaurantInfo] = useState(null);
    const [restaurantMenu, setRestaurantMenu] = useState([]);

    useEffect(() => {
        getRestaurantInfo()
    }, []);
    
    let getRestaurantInfo = async () => {
        try {
            const response = await fetch(RESTAURANT_MENU_API + resId);
            const json = await response.json();

            const restaurantData = json?.data?.cards[2]?.card?.card?.info;
            console.log(restaurantData);            
            setRestaurantInfo(restaurantData);

            const menuItems = await json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
            console.log(menuItems);
            setRestaurantMenu(menuItems);

        } catch (error) {
            console.log(error);            
        }
    }

    // const {
    //     name,
    //     cuisines,
    //     costForTwoMessage,
    //     avgRating,
    //     sla
    // } = restaurantInfo;

    return (
        <div>
            <div>
                <h1>{restaurantInfo?.name}</h1>
                <h3>{restaurantInfo?.cuisines.join(", ")}</h3>
                <h4>{restaurantInfo?.costForTwoMessage}</h4>
                <h4>{restaurantInfo?.avgRating} stars</h4>
                <h4>{restaurantInfo?.sla?.deliveryTime} min</h4>
            </div>
            <ul>

            </ul>
        </div>
    );
};

export default RestaurantMenu;