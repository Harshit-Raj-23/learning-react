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

            const menuItems = await json?.data?.cards.find(x=> x.groupedCard)?.
                            groupedCard?.cardGroupMap?.REGULAR?.
                            cards?.map(x => x.card?.card)?.
                            filter(x=> x['@type'] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")?.
                            map(x=> x.itemCards).flat().map(x=> x.card?.info) || [];
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
            <div>
                <h2>Recommended</h2>
                <h4>{restaurantMenu.length} ITEMS</h4>
                {/* <ul>{restaurantMenu.map((item) => (
                    <li key={item?.id}>{item?.id} - {item?.name} - ₹{item?.price / 100}</li>
                ))}</ul> */} // This code was taking some duplicate values so I used the below code.
                <ul>
                    {[...new Map(restaurantMenu.map(item => [item.id, item])).values()]
                        .map(item => (
                        <li key={item.id}>
                            {item.name} - ₹{item.price / 100}
                        </li>
                        ))}
                    </ul>
            </div>
        </div>
    );
};

export default RestaurantMenu;