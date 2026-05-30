import react from "react";
export default function ApiCallTwo() {
  
    
    const [apidata, setapidata] = useState([]);
    const handlefetch=async () =>{
        let res= await fetch("api url")
        let data = await res.json();
        setapidata(data);
    }

    return (
        <div>
            <button onClick={handlefetch}>Call API 2</button>


            {apidata.map((da,i) =>(
                    <div>
                        <h1>
                            {da.name}
                        </h1>
                    </div>

                ))
            }
        </div>
    )
}