
function Product(props) {

    return (<>
        <div class="card" style={{ width: "15rem" }}>
            <div class="card-body">
                <p class="card-subtitle">{props.productId}</p>
                <h6 class="card-title">{props.productName}</h6>
                <p class="card-text">{props.productDescription}</p>
                <p class="card-subtitle">₹{props.productPrice}</p>
            </div>
        </div>
    </>);
}

export default Product;