import { IMAGE_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwoString,
        sla,
    } = resData?.info;
    return (
        <div className="rounded-2xl shadow-md w-[320px] h-[340px] m-4 hover:shadow-2xl transition-shadow duration-300 bg-white overflow-hidden">
            <img
                className="w-full h-48 object-cover rounded-t-2xl"
                alt="res-logo"
                src={IMAGE_URL + cloudinaryImageId}
            />
            <div className="p-4">
                <h3 className="text-xl font-semibold truncate">{name}</h3>
                <h4 className="text-sm text-gray-600 truncate">{cuisines.join(", ")}</h4>
                <p className="text-sm text-gray-500">{avgRating} ⭐</p>
                <p className="text-sm text-gray-500">{costForTwoString}</p>
                <p className="text-sm text-gray-500">{sla?.deliveryTime} minutes</p>
            </div>
        </div>
    )
};

// Higher Order Component

// input - RestaurantCard => RestaurantCardOpen

// Since our API doesn't have isPromoted field... I used isOpen field to test this Higher Order Function.

export const isOpenLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
                    Open
                </label>
                <RestaurantCard {...props} />
            </div>
        );
    }
};

export default RestaurantCard;