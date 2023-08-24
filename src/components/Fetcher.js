import React, { useEffect, useState } from 'react'

const Fetcher = () => {
    useEffect(()=>{
        getData();
    },[]);

    let [object,setObject] = useState("");

    const getData = ()=>{
        fetch('https://dummyjson.com/products')
        .then((response)=>response.text())
        .then((data)=>setObject(data))
        .catch(error=>console.log("Error", error))
    }

    return (
        <div>
            <div>
                {
                    !object && <h1>loading..</h1>
                }
            </div>
            {
                object && <pre>{object}</pre>
            }
        </div>
    )
}

export default Fetcher