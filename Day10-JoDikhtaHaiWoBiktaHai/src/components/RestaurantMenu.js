import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const { resId } = useParams();
    
    const [ restaurantInfo, restaurantMenu ] = useRestaurantMenu(resId);

    return (
        // <div>
        //     <div>
        //         <h1>{restaurantInfo?.name}</h1>
        //         <h3>{restaurantInfo?.cuisines.join(", ")}</h3>
        //         <h4>{restaurantInfo?.costForTwoMessage}</h4>
        //         <h4>{restaurantInfo?.avgRating} stars</h4>
        //         <h4>{restaurantInfo?.sla?.deliveryTime} min</h4>
        //     </div>
        //     <div>
        //         <h2>Recommended</h2>
        //         <h4>{restaurantMenu.length} ITEMS</h4>
        //         {/* This code was taking some duplicate values so I used the below code. */}
        //         {/* <ul>{restaurantMenu.map((item) => (
        //             <li key={item?.id}>{item?.id} - {item?.name} - ₹{item?.price / 100}</li>
        //         ))}</ul> */}
        //         <ul>
        //             {[...new Map(restaurantMenu.map(item => [item.id, item])).values()]
        //                 .map(item => (
        //                 <li key={item.id}>
        //                     {item.name} - ₹{item.price / 100}
        //                 </li>
        //                 ))}
        //             </ul>
        //     </div>
        // </div>
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

            <div className="bg-white shadow-lg rounded-xl p-6">
                <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold">Recommended</h2>
                <h4 className="text-gray-500">{restaurantMenu.length} ITEMS</h4>
                </div>

                <ul className="divide-y divide-gray-200">
                {[...new Map(restaurantMenu.map(item => [item.id, item])).values()]
                    .map(item => (
                    <li key={item.id} className="py-3 flex justify-between items-center">
                        <span className="font-medium">{item.name}</span>
                        <span className="text-gray-700 font-semibold">₹{item.price / 100}</span>
                    </li>
                    ))}
                </ul>
            </div>
</div>

    );
};

export default RestaurantMenu;