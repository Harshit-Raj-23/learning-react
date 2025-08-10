import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const { resId } = useParams();
    
    const [ restaurantInfo, restaurantMenu ] = useRestaurantMenu(resId);

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
                {/* This code was taking some duplicate values so I used the below code. */}
                {/* <ul>{restaurantMenu.map((item) => (
                    <li key={item?.id}>{item?.id} - {item?.name} - ₹{item?.price / 100}</li>
                ))}</ul> */}
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