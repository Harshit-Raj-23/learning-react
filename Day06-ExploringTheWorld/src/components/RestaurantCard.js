import { IMAGE_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwoString,
        deliveryTime,
    } = resData?.data
    return (
        <div className='res-card' style={{backgroundColor: "#f0f0f0"}}>
            <img
                className='res-logo'
                alt='res-logo'
                src={IMAGE_URL + cloudinaryImageId}
                width={280}
                height={250}
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <p>{avgRating} stars</p>
            <p>{costForTwoString}</p>
            <p>{deliveryTime} minutes</p>
        </div>
    )
};

export default RestaurantCard;