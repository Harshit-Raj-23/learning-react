import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { BodyShimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import { RESTAURANT_API } from "../utils/constants";

const Body = () => {
    // Local state variable - Super powerful variable
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
    console.log("Body rendered");    

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            RESTAURANT_API
            // to bypass cors issue we can append "https://corsproxy.io/?" before our API url. But is has limit for API calls per mins to 40.
        )
        const json = await data.json();
        console.log(json);

        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    // Conditional rendering
    // if (listOfRestaurants.length === 0) {
    //     return <Shimmer />
    // }

    console.log(listOfRestaurants);

    return listOfRestaurants.length === 0 
    ? < BodyShimmer /> 
    :(
        <div>
            {/* Search & Filter Bar */}
            <div className="flex flex-wrap mt-8 px-6 md:px-16 justify-between items-center gap-4">
                {/* Search Input */}
                <div className="flex items-center space-x-2">
                <input
                    type="text"
                    className="border border-gray-300 rounded-md px-3 py-1 w-60 focus:outline-none focus:ring-2 focus:ring-green-400"
                    placeholder="Search restaurants..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button
                    className="bg-green-400 hover:bg-green-500 text-white rounded-lg px-4 py-1 transition"
                    onClick={() => {
                    const filtered = listOfRestaurants.filter((restaurant) =>
                        restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
                    );
                    setFilteredRestaurants(filtered);
                    }}
                >
                    Search
                </button>
                </div>

                {/* Top Rated Button */}
                <button
                className="bg-yellow-400 hover:bg-yellow-500 text-white rounded-lg px-4 py-1 transition"
                onClick={() => {
                    const filtered = listOfRestaurants.filter(
                    (restaurant) => restaurant.info.avgRating > 4
                    );
                    setFilteredRestaurants(filtered);
                }}
                >
                Top Rated Restaurants
                </button>
            </div>

            {/* Restaurant Cards */}
            <div className="flex flex-wrap px-6 md:px-12 py-8">
                {filteredRestaurants.map((restaurant) => (
                <Link
                    to={`/restaurant/${restaurant?.info?.id}`}
                    key={restaurant?.info?.id}
                >
                    <RestaurantCard resData={restaurant} />
                </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;