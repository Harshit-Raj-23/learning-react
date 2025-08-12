import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    const { resId } = useParams();
    
    const [ restaurantInfo, itemCategories ] = useRestaurantMenu(resId);

    return (
        <div className="max-w-4xl mx-auto p-6 mt-8">
            <div className="bg-white shadow-lg rounded-xl p-6 mb-6 text-center">
                <h1 className="text-3xl font-bold mb-2">{restaurantInfo?.name}</h1>
                <h3 className="text-gray-600 mb-1">{restaurantInfo?.cuisines.join(", ")}</h3>
                <h4 className="text-gray-500 mb-3">{restaurantInfo?.costForTwoMessage}</h4>

                <div className="flex justify-center gap-6 text-sm text-gray-700">
                <span className="bg-yellow-100 px-3 py-1 rounded-full font-semibold">
                    ⭐ {restaurantInfo?.avgRating}
                </span>
                <span className="bg-green-100 px-3 py-1 rounded-full font-semibold">
                    ⏱ {restaurantInfo?.sla?.deliveryTime} min
                </span>
                </div>
            </div>

            {itemCategories?.map( (item) => (
                <RestaurantCategory 
                    key={item?.card?.card?.title} 
                    data={item?.card?.card} 
                />
            ))}
        </div>
    );
};

export default RestaurantMenu;