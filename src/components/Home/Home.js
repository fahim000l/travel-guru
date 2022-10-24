import React, { useState } from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import PlaceCard from './PlaceCard/PlaceCard';
import { FaArrowRight } from 'react-icons/fa';


const Home = () => {
    const places = useLoaderData();
    const [placeDetails, setPlaceDetails] = useState(places[0].details);
    const [title, setTitle] = useState(places[0].name);
    const [placeId, setPlaceId] = useState(1);
    console.log(title, placeDetails);
    return (
        <div className='w-full lg:flex mt-[10%] overflow-y-auto'>
            <div className='lg:w-[40%] w-[90%] text-white mx-auto lg:ml-[150px] lg:mr-[50px] text-start'>
                <div>
                    <div className='font-bold text-5xl'>
                        {title}
                    </div>
                    <div>
                        {placeDetails.slice(0, 500) + '...'}
                    </div>
                    <div className='lg:w-[25%] text-black'>
                        <NavLink
                            to={`/bookinginfo/${placeId}`}
                            className={'flex items-center lg:justify-evenly justify-center px-5 py-2 bg-[#F9A51A] rounded-lg mt-10 font-bold'}><p>Booking</p><FaArrowRight className='mx-5'></FaArrowRight></NavLink>
                    </div>
                </div>
            </div>
            <div className='lg:w-[60%] w-[100%] lg:overflow-auto overflow-x-scroll mt-10 lg:mt-0 flex items-center'>
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