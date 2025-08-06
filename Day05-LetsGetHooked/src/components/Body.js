import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    // Local state variable - Super powerful variable
    const [listOfRestaurants, setListOfRestaurants] = useState(restaurantList);

    return (
        <div className='body'>
            <div className='search'>
                <button
                    className="filter-btn"
                    onClick={() => {
                        console.log('btn pressed');                        
                        const filteredList = listOfRestaurants.filter(
                            (restaurant) => restaurant.data.avgRating > 4
                        );
                        setListOfRestaurants(filteredList);
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className='res-container'>
                {listOfRestaurants.map((restaurant) => {
                    return <RestaurantCard key={restaurant.data.id} resData={restaurant} />
                })}
            </div>
        </div>
    );
};

export default Body;