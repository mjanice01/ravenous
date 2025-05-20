import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';



const Business = ({ business }) => {
    return (
        <div>
            <img src={business.image} />
            <h1>{business.bName}</h1>
            <h2>{business.address}, {business.city} {business.zipCode}</h2>
            <h2>{business.category}</h2>
            <h3>Rating = {business.rating}, Review Count = {business.reviewCount}</h3>
        </div>
        );
    }
  
const BusinessList = ({ businesses }) => {
    return (
        <div>
            {businesses.map((business, index) => (
                <Business key={index} business={business} />
            ))}
        </div>
    );
}

  export default BusinessList;