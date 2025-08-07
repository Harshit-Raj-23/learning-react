import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

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
            "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=12.97530&lng=77.59100&carousel=true&third_party_vendor=1"
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
                                (restaurant) => restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
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
                                (restaurant) => restaurant.data.avgRating > 4
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
                    return <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                })}
            </div>
        </div>
    );
};

export default Body;