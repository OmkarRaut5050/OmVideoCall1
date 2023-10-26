// 1
// import { useState } from 'react'

// function App() {

//     const[count , setCount] = useState(0);
//     const[price , setPrice] = useState(0);
//     const[text , setText] = useState('Buy');

//   return (
//     <div className="App">
//       <button onClick={()=>setCount(count+1)}>+</button>
//       <span>{count}</span>
//       <button onClick={()=>setCount(count-1)}>-</button>
//       <h2></h2>
//       <button onClick={()=>setPrice(count*50)}>total</button>
//       <span>{price}</span>
//       <h2></h2>
//       <button onClick={()=>setText('Thanks For Visiting')}>{text}</button>

//     </div>
//   )
// }

// export default App

// 2
// import React, { Component } from "react";

// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = { count: 0, color: "red" };
//   }
//   change() {
//     this.setState({ count: this.state.count + 1 });
//   }
//   color() {
//     this.setState({ color: "green" });
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={() => this.change()}>+</button>
//         <button onClick={() => this.color()}>Change Color</button>
//         <button onClick={() => this.generateColor()}>RandomColor</button>
//       </div>
//     );
//   }
// }

// 3
// import { useEffect, useState } from "react";
// const App=()=>
// {
//   const{count,setcount}useState(0)
//   useEffect()=>{
//     document.title=`${count}`
//   }.{count}
//   }
//   return(
//     <div className="App"></div>
//     <button onClick={}></button>
//   )
// }

// 4
// import { useEffect, useState } from "react";
// const App = () => {
//   const [Name, setName] = useState("");
//   useEffect(() => {
//     document.title = `${Name}`;
//   });
//   return (
//     <div>
//       <input type="text" onChange={(e) => setName(e.target.value)} />
//       <h1>{"my name is ${Name"}</h1>
//     </div>
//   );
// };
// export default App;

// 5
// import { useEffect } from "react";
// const App = () => {
//   useEffect(() => {
//     let a = document.getElementById("btn1");
//     a.addEventListener("click", () => {
//       window.print();
//     });
//   });
//   return (
//     <div>
//       <button id="btn1">Click</button>
//     </div>
//   );
// };
// export default App;

// 7
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

// import data from './data.js'
// function App=()=>{
//     const [data, setdata] = useState('data');
//     return(
//         <div>
//         {data &&
//                   data.map(() => {
//                     return (

//                     );
//                   })}
//         </div>
//     )
// }

import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

function randomID(len) {
  let result = "";
  if (result) return result;
  var chars = "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP",
    maxPos = chars.length,
    i;
  len = len || 5;
  for (i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return result;
}

export function getUrlParams(url = window.location.href) {
  let urlStr = url.split("?")[1];
  return new URLSearchParams(urlStr);
}

export default function App() {
  const roomID = getUrlParams().get("roomID") || randomID(5);
  let myMeeting = async (element) => {
    // generate Kit Token
    const appID = 200321891;
    const serverSecret = "7925905ffaa80faf528f1e2139320ef7";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      randomID(5),
      randomID(5)
    );

    // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    // start the call
    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Personal link",
          url:
            window.location.protocol +
            "//" +
            window.location.host +
            window.location.pathname +
            "?roomID=" +
            roomID,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
      },
    });
  };

  return (
    <div
      className="myCallContainer"
      ref={myMeeting}
      style={{ width: "100vw", height: "100vh" }}
    ></div>
  );
}
