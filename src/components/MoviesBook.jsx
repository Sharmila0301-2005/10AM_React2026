import react from "react";
// export default function MoviesBook(props){ // props is an object that contains the properties passed to the component. In this case, it contains the name and rating properties.
//     return (
//         <div>
//             <h1>{props.name }</h1>
//             <h2>{props.rating}/10</h2>
            
//          </div>
//     )
// }


//*** another way to write the same code is by destructuring the props object and directly using the name and rating variables instead of props.name and props.rating. This can make the code cleaner and easier to read. Here's how you can do it:


export default function MoviesBook({name,rating , handledata}){
    const handleclick=()=>{
        handledata("Monkey D Luffy ");
    }
    
    
    
    return (
        <div>
            {/* <h1>{name }</h1>
            <h2>{rating}/10</h2>
             <button onClick={handleclick}>Send Data</button>
          */}
         <input placeholder="Enter"/>
         <br>
         <button onClick={handleclick}>Book Now</button>
         </br>
         <p>thanks for your Booking</p>
        </div>
    )
}