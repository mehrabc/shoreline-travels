import React from 'react'
import BoraBora from '../assets/borabora.jpg';
import BoraBora2 from '../assets/borabora2.jpg';
import Maldives from '../assets/maldives.jpg';
import Maldives2 from '../assets/maldives2.jpg';
import KeyWest from '../assets/keywest.jpg';

const Destinations = () => {
    return (
        <div className='flex flex-col justify-center max-w-[1240px] mx-auto py-16 px-4'>
            <h1 className='flex justify-center'>All-Inclusive Resorts</h1>
            <p className='flex justify-center py-2'>On the Shoreline's Best Beaches</p>
            <div className='grid grid-rows-none py-4 gap-2 md:grid-cols-5 md:gap-4'>
                <img className='w-full h-full object-cover col-span-2 row-span-2 md:col-span-3' src={BoraBora} alt="Borabora" />
                <img className='w-full h-full object-cover' src={BoraBora2} alt="Borabora2" />
                <img className='w-full h-full object-cover' src={Maldives} alt="Maldives" />
                <img className='w-full h-full object-cover' src={Maldives2} alt="Maldives2" />
                <img className='w-full h-full object-cover' src={KeyWest} alt="KeyWest" />
            </div>
        </div>

    )
}

export default Destinations