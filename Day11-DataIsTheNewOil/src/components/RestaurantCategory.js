import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
    const [ showItems, setShowItems ] = useState(false);

    return (
        <div key={data.title} className="bg-white shadow-lg rounded-xl p-6 mb-4">
            <div 
                className="flex justify-between items-center mb-4 cursor-pointer"
                onClick={() => (
                    setShowItems(!showItems)
                )}
            >
                <h2 className="text-2xl font-semibold">{data.title} ({data.itemCards.length})</h2>
                <span>🔻</span>
            </div>
            {showItems && <ItemList data={data.itemCards} />}
        </div>
    );
};

export default RestaurantCategory;