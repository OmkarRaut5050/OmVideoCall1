// import { useEffect, useState } from "react";
// const App = () => {
//   const [data, setdata] = useState([]);
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
//       res.jsm().then((d) => setdata(d))
//     );
//   });
// };
// return (
//   <div className="Fetch">
//     {data &&
//       data.map((x) => {
//         return (
//           <section key={x.id}>
//             <p>
//               {x.name} <span>{x.email}</span>
//             </p>
//             <p>{x.address.zipcode}</p>
//           </section>
//         );
//       })}
//   </div>
// );
// export default App;

import React, { useState } from "react";
import { useEffect } from "react";
const Fetch = () => {
  const [data, setdata] = useState([]);
  const [search, setsearch] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
      res.jsm().then((d) => setdata(d))
    );
  });
};
return (
  <div className="Fetch">
    {data &&
      data.map((x) => {
        return (
          <section key={x.id}>
            <p>
              {x.name} <span>{x.email}</span>
            </p>
            <p>{x.address.zipcode}</p>
          </section>
        );
      })}
  </div>
);
export default App;
