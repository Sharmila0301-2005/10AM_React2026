import react,{ useEffect}from 'react';

export default function ExampleOne() {
   
   useEffect(() => {
        console.log("inside useEffect");
   }, [])
    return (
        <div>
            {console.log("inside return")}
            <h1>UseEffect</h1>
        </div>
    )}    