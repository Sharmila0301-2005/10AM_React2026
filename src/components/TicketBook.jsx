import React ,{ useState }from "react";
import { HomeForm } from "./HomeForm";

function TicketBook() {
  const [count,setCount] = useState(1);
  

  const handleadd = () => {
    console.log("Ticket Booked");
 

  };

  return (
    <div>

      <HomeForm/>
      <h1 className="luff">Ticket Booking App - {count}</h1>
      <button onClick = {handleadd}> Book Ticket </button>
    </div>

  );
}

export default TicketBook; 