import React, { useState } from 'react'
import Image1 from './ReactCodes/Assignment/clear Birthday/img/vin.jpg'
import Image2 from './ReactCodes/Assignment/clear Birthday/img/cris.jpg'
import Image3 from './ReactCodes/Assignment/clear Birthday/img/dipika.jpg'
import Image4 from './ReactCodes/Assignment/clear Birthday/img/hritik.jpg'
import Image5 from './ReactCodes/Assignment/clear Birthday/img/srk.jpg'
import Image6 from './ReactCodes/Assignment/clear Birthday/img/salman.jpg'


const Data = () => {
  const [data,setData] = useState('data')



  return (
      <div className ="col">
        <center><h1>My Fav Actors And Actress {Data.length}</h1></center><br /> <br />
        <div className ="p1">
            <div className ="box"><img src={Image1} alt="" /></div>
           <div className ="box"> <h3>Vin Diesel</h3>
            <h6 className ="birth">July 18, 1967</h6></div>
        </div>
        <div className ="p1">
           <div className ="box"> <img src={Image2} alt="" /></div>
           <div className ="box"> <h3>Christopher Hemsworth</h3>
            <h6 className ="birth">September 25, 1968</h6></div>
        </div>
        <div className ="p1">
           <div className ="box"> <img src={Image3} alt="" /></div>
           <div className ="box"> <h3>Dipika Padukon</h3>
            <h6 className ="birth">May 2, 1972</h6></div>
        </div>
        <div className ="p1">
           <div className ="box"> <img src={Image4} alt="" /></div>
           <div className ="box"> <h3>Hritik Roshan</h3>
            <h6 className ="birth">11 August 1983</h6></div>
        </div>
        <div className ="p1">
           <div className ="box"> <img src={Image5} alt="" /></div>
            <div className ="box"><h3>Shahruk Khan</h3>
            <h6 className ="birth">7 August 1975</h6></div>
        </div>
        <div className ="p1">
           <div className ="box"> <img src={Image6} alt="" /></div>
           <div className ="box"> <h3>Salman Khan</h3>
            <h6 className ="birth">30 April 1985</h6></div>
        </div>
        <div className ="p1">
            <button onClick={()=>setData([""])}>clear all</button>
        </div>
      </div>
  )
}

export default Data



// import React from 'react';
// import Data from './Data'; // Import the Data component

// function App() {
//   return (
//     <div className="App">
//       <Data /> {/* Use the Data component here */}
//     </div>
//   );
// }

// export default App;