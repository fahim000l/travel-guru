import React, { useState } from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import PlaceCard from './PlaceCard/PlaceCard';
import { FaArrowRight } from 'react-icons/fa';


const Home = () => {
    const places = useLoaderData();
    const [placeDetails, setPlaceDetails] = useState(places[0].details);
    const [title, setTitle] = useState(places[0].name);
    const [placeId, setPlaceId] = useState(0);

    return (
        <div className='w-full flex mt-[10%]'>
            <div className='w-[40%] text-white ml-[150px] mr-[50px] text-start'>
                <div>
                    <div className='font-bold text-5xl'>
                        {title}
                    </div>
                    <div>
                        {placeDetails.slice(0, 500) + '...'}
                    </div>
                    <div className='w-[25%] text-black'>
                        <NavLink
                            to={`/bookinginfo/${placeId}`}
                            className={'flex items-center justify-evenly px-5 py-2 bg-[#F9A51A] rounded-lg mt-10'}><p>Booking</p><FaArrowRight></FaArrowRight></NavLink>
                    </div>
                </div>
            </div>
            <div className='w-[60%] flex items-center'>
                {
                    places.map(place => <PlaceCard
                        key={place.id}
                        place={place}
                        setPlaceDetails={setPlaceDetails}
                        setTitle={setTitle}
                        setPlaceId={setPlaceId}
                    ></PlaceCard>)
                }
            </div>
        </div>
    );
};

export default Home;