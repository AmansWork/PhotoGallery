import Product from "./Product";
import { useState } from "react";
import { Button } from 'react-bootstrap';

function CustomerCard(props) {

    const [products, setProduct] = useState(false);

    function showproduct(){
        setProduct(!products);
    }
    return <>
        <div class="card" style={{width: "15rem"}}>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">{props.customerId}</li>
                <li class="list-group-item">{props.name}</li>
                <li class="list-group-item">{props.phoneNo}</li>
                <li class="list-group-item">{props.address}</li>

                <Button class="btn btn-primary" onClick={showproduct}>Show Products</Button>

               {products? props.product.map(createProduct) : null}
            </ul>
        </div>

    </>

    function createProduct(product) {
        return <Product
            key={product.productId}
            productId={product.productId}
            productName={product.productName}
            productPrice={product.productPrice}
            productDescription={product.productDescription}
        />
    }
}

export default CustomerCard;