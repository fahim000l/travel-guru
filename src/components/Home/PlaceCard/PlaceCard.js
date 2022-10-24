import React from 'react';
import './PlaceCard.css'

const PlaceCard = ({ place, setTitle, setPlaceDetails, setPlaceId }) => {
    const { name, picture, details, id } = place;

    const handleCard = () => {
        setTitle(name);
        setPlaceDetails(details);
        setPlaceId(id);
    }

    return (
        <div onClick={handleCard} className={`text-white text-3xl bg-darker hover:border-[3px] w-[3000px] hover:border-solid hover:border-yellow-500 cursor-pointer font-bold px-5 text-start lg:w-[55%] h-[500px] rounded-lg mx-5`} style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${picture})`, backgroundSize: '320px 516px',
        }}>
            <p className='mt-[100%]'>{name}</p>
        </div>
    );
};
export default PlaceCard;