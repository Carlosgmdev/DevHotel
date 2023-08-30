import React, { useEffect, useState } from 'react';
import { Bedroom } from './Bedroom';


const Bedrooms = ({user}) => {
  const [bedrooms, setBedrooms] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/bedrooms')
      .then(response => response.json())
      .then(data => {
        setBedrooms(data);
      })
      .catch(error => {
        console.error('Error fetching bedrooms:', error);
      });
  }, []);

  return (
    <div className="bg-gray-100 h-screen p-6">
      <h2 className="text-2xl font-semibold mb-4">Bedrooms</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {bedrooms.map( bedroom => (
            <Bedroom bedroom={bedroom} key={bedroom.id} user={user}/>
        ))}
      </div>
    </div>
  );
};

export default Bedrooms;
