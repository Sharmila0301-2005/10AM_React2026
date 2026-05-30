import React, { useState , useEffect}from "react";
export default function ApiCallOne() {

    const [data, setData] = useState([]);//it is used to store the data that we get from the API call
    const handlefetch = async () =>{
        let res = await fetch("https://fakestoreapi.com/products");
        let data = await res.json();
        console.log("luffy");// it is used to log the data that we get from the API call 
        setData(data); // it is used to set the data that we get from the API call to the state variable data
    }
    useEffect(() => {
        handlefetch(  );

        return() => {
            
        }
    }, []) //  we need to pass an empty array as a second argument to the useEffect hook to avoid infinite loop of API calls
         
 return (

        <div>
            <h1>API Call One</h1>
            <div className="classpro">
        
        <div className="prowrap">
        {data.map((da,i) =>  (
            <div className ="cardpro">
                <img src={da.image}   height="100" width="100"/>
                 <h1>{da.title}</h1 >
                <h2> Price : {da.Price} </h2>
            </div>
        ))}
        
        </div>
        </div>
        </div>
    )
}


// function ApiCallOne() {
//     return (
//         <div>
//             <button>Call API</button>
//         </div>
//     )
// }

