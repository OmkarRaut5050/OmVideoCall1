import React, { useState } from 'react';


import Image1 from './ReactCodes/Assignment/clear Birthday/img/vin.jpg';
import Image2 from './ReactCodes/Assignment/clear Birthday/img/cris.jpg';
import Image3 from './ReactCodes/Assignment/clear Birthday/img/dipika.jpg';
import Image4 from './ReactCodes/Assignment/clear Birthday/img/hritik.jpg';
import Image5 from './ReactCodes/Assignment/clear Birthday/img/srk.jpg';
import Image6 from './ReactCodes/Assignment/clear Birthday/img/salman.jpg';


const Data = () => {
  const [data, setData] = useState(
    {
      image: Image1,
      name: 'Vin Diesel',
      birthDate: 'July 18, 1967'}
    // },
    // {
    //   image: Image2,
    //   name: 'Christopher Hemsworth',
    //   birthDate: 'September 25, 1968',
    // },
    // {
    //   image: Image3,
    //   name: 'Dipika Padukon',
    //   birthDate: 'May 2, 1972',
    // },
    // {
    //   image: Image4,
    //   name: 'Hritik Roshan',
    //   birthDate: '11 August 1983',
    // },
    // {
    //   image: Image5,
    //   name: 'Shahruk Khan',
    //   birthDate: '7 August 1975',
    // },
    // {
    //   image: Image6,
    //   name: 'Salman Khan',
    //   birthDate: '30 April 1985',
    // }
  );

  const clearAllData = () => {
    setData([]);
  };

  return (
    <div className="col">
      <center>
        <h1>My Fav Actors And Actress</h1>
      </center>
      <br /> <br />

      {data.map((item, index) => (
        <div className="p1" key={index}>
          <div className="box">
            <img src={item.image} alt={item.name} />
          </div>
          <div className="box">
            <h3>{item.name}</h3>
            <h6 className="birth">{item.birthDate}</h6>
          </div>
        </div>
      ))}

      <div className="p1">
        <button onClick={clearAllData}>Clear All</button>
      </div>
    </div>
  );
};

export default Data;
