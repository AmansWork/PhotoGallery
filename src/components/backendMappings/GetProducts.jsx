import axios from "axios";
import { useEffect, useState } from "react";
import Product from "./Product";
import base_url from "../baseurls/baseurl.js";
function GetProducts() {

    const [userData, setData] = useState();

    useEffect(() => {
        axios.get(`${base_url}/gallery/product/get`)
            .then((response) => {
                console.log(response);
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    function createProduct(data) {

        return (<div className="col" key={data.productId}>
            <Product
                productId={data.productId}
                productName={data.productName}
                productPrice={data.productPrice}
                productDescription={data.productDescription}
            />
            <br />
        </div>
        );
    }

    return (
        <div className='row'>
            {userData ? userData.map(createProduct) : null}
            <br />
        </div>
    );
}

export default GetProducts;