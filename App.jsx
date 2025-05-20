import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg';
import BusinessList from './Buisness.jsx';
import SearchBar from './SearchBar.jsx';



function App() {
  const newBusinesses = [
    {
    image:' https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    bName:'MarginOtto Pizzeria',
    address:'1010 Paddington Way',
    city: 'Flavortown',
    state:'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
    },
  
    {
      image:' https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
      bName:'MarginOtto Pizzeria',
      address:'1010 Paddington Way',
      city: 'Flavortown',
      state:'NY',
      zipCode: '10101',
      category: 'Italian',
      rating: 4.5,
      reviewCount: 90
    },
    {
        image:' https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
        bName:'MarginOtto Pizzeria',
        address:'1010 Paddington Way',
        city: 'Flavortown',
        state:'NY',
        zipCode: '10101',
        category: 'Italian',
        rating: 4.5,
        reviewCount: 90
     }]

  return (
    <div>
      <SearchBar />
      <BusinessList businesses = {newBusinesses} />
    </div>
  )
}

export default App;

