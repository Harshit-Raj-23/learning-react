import { IMAGE_URL } from "../utils/constants";

const ItemList = ({ data }) => {
    return (
        <div className="space-y-6">
            {data.map((item) => (
                <div
                    key={item?.card?.info?.id}
                    className="flex justify-between items-start border-b pb-4"
                >
                    <div className="flex-1 pr-4">
                        <h1 className="text-lg font-semibold">{item?.card?.info?.name}</h1>
                        <span className="text-green-600 font-medium">
                            ₹{item?.card?.info?.price ? item?.card?.info?.price / 100 : item?.card?.info?.defaultPrice / 100}
                        </span>
                        <p className="text-gray-500 text-sm mt-1">{item?.card?.info?.description}</p>
                    </div>
                    {item?.card?.info?.imageId ? (
                        <img
                            src={IMAGE_URL + item?.card?.info?.imageId}
                            alt={item?.card?.info?.name}
                            className="w-28 h-28 object-cover rounded-lg"
                        />
                    ) : (
                        <div
                            className="bg-gray-100 w-28 h-28 object-cover rounded-lg">
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ItemList;
