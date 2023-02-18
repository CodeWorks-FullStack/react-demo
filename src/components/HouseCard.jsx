/* eslint-disable react/prop-types */
import React from 'react';
import './styles/HouseCard.scss';

export default function HouseComponent({ house }) {

 

  return (

    <div className="HouseComponent">
      {house?.description} - {house?.price}
    </div>
  )

}