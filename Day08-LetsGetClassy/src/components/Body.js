import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
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

    return listOfRestaurants.length === 0 
    ? <Shimmer /> 
    :(
        <div className='body'>
            <div className='search-container'>
                <div className="search">
                    <input
                        type="text"
                        className="search-box"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    ></input>
                    <button
                        className="search-btn"
                        onClick={() => {
                            const filteredRestaurants = listOfRestaurants.filter(
                                (restaurant) => restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setFilteredRestaurants(filteredRestaurants);
                        }}
                    >
                        Search
                    </button>
                </div>
                <div className="filter">
                    <button
                        className="filter-btn"
                        onClick={() => {
                            console.log('btn pressed');                        
                            const filteredRestaurants = listOfRestaurants.filter(
                                (restaurant) => restaurant.info.avgRating > 4
                            );
                            setFilteredRestaurants(filteredRestaurants);
                        }}
                    >
                        Top Rated Restaurants
                    </button>
                </div>
            </div>
            <div className='res-container'>
                {filteredRestaurants.map((restaurant) => {
                    return (
                        <Link 
                            to={"/restaurant/" + restaurant?.info?.id}
                            key={restaurant?.info?.id}
                        >
                            <RestaurantCard resData={restaurant} />
                        </Link>
                    )
                })}
            </div>
        </div>
    );
};

export default Body;