import React from "react";
import axios from 'axios';
import { useEffect, useState } from 'react';
import CustomerCard from "./CustomerCard";
import base_url from "../baseurls/baseurl.js";
function GetCustomer(){

    const [data, setData] = useState();
    
    useEffect(()=>{
       axios.get(`${base_url}/gallery/customer`)
      .then((response)=>{
          console.log(response);
          setData(response.data);
      })
      .catch((error)=>{
          console.log(error);
      })
    
  },[]);

    function createCustomer(data){
        return <CustomerCard
            key={data.customerId}
            customerId = {data.customerId}
            name = {data.name}
            address = {data.address}
            phoneNo = {data.phoneNo}
            product = {data.product}
            
        />
        
    }

    return (
        <div>
           {data ? data.map(createCustomer) : null }
        </div>
    );
}

export default GetCustomer;