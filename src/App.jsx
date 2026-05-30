import React,{ useCallback, useEffect, useState}from "react";
import TicketBook from "./components/TicketBook";
import "./App.css";
import ApiCallOne from "./components/ApiCallOne";
import ApiCallTwo from "./components/ApiCallTwo";
import ExampleOne from "./components/ExampleOne";
import MoviesBook from "./components/MoviesBook";

function App() {

  const [islog, setislog] = useState(true);
  const [names, setnames] = useState([""]);
  
  
  const handlelog =() =>{
    setislog(false);
  }

  const handledata =(a) => {
console.log(a );
setnames([a]);
  }
// const handlemultiple =useMemo((no1,no2)=>{//usememo is a hook that allows you to memoize a value so that it is only recalculated when its dependencies change. In this case, we are memoizing the value 72, which will only be recalculated if the dependencies of the usememo hook change. Since there are no dependencies in this case, the value will only be calculated once and will be returned as 72 every time the handlemultiple function is called.
//  let a= no1*no2;
//   return a
// },[no1,no2])

const handlemultiple =useCallback((no1,no2)=>{
  //usecallback is a hook that allows you to memoize a function so that it is only recreated when its dependencies change. In this case, we are memoizing the handlemultiple function, which will only be recreated if the dependencies of the usecallback hook change. Since there are no dependencies in this case, the function will only be created once and will be returned every time it  is called.
 let a= no1*no2;
  return a
},[])


  return (
    <div>

      <h1>Welcome to the Ticket Booking Application- {names}</h1>
      <p>Book your tickets now!</p> 
      
      
      
      {/* <TicketBook /> */}
      {/* <ApiCallOne /> */}


      {/* {islog ? <ApiCallOne />: [null]} */}


      {/* <button onClick={handlelog}>Log Out</button> */}


      {/* <ApiCallTwo /> */}
      {/* <ExampleOne /> */}
      <MoviesBook  name="Karuppu" rating="8" handledata={handledata} />
      <MoviesBook  name="Sillunuu Oru Kadhal" rating="7" handledata={handledata} /> 
    </div>
  );
}

export default App;
//  