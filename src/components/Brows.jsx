import React, { useState ,useEffect} from 'react';
import Header from './Header';
import useApiFetch from '../utils/useFetchApi';
import {API_URL,API_OPTIONS } from '../utils/constant'

const Brows = () => {
 const {data, isLoading, error } = useApiFetch(API_URL,API_OPTIONS)
 console.log(data);

  return (
    <div className='bg-black h-screen'>
      <Header />
      
    </div>
  );
};

export default Brows;
