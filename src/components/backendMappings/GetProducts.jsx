import axios from "axios";
import { useEffect, useState } from "react";
import Product from "./Product";
import base_url from "../baseurls/baseurl.js";
function GetProducts(){

    const [userData, setData] = useState();

    useEffect(()=>{
        axios.get(`${base_url}/gallery/product/get`)
        .then((response)=>{
            console.log(response);
            setData(response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    }, []);

    function createProduct(data){

        return(
            <Product 
                key = {data.productId}
                productId = {data.productId}
                productName = {data.productName}
                productPrice = {data.productPrice}
                productDescription = {data.productDescription}
            />
        );
    }

    return(
        <div>
        {userData? userData.map(createProduct): null}
        </div>
    );
}

export default GetProducts;