import Product from "./Product";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function CustomerCard(props) {

    return <>
        <Container style={{padding: '10px'}} >
            <Row className="object-fit-contain border">

                <Col sm={3} className="object-fit-contain border">
                    <div>
                        <h6>Customer Id: </h6>
                    </div>
                    <div>
                        <h6>Customer Name: </h6>
                    </div>
                    <div>
                        <h6>Customer Phone: </h6>
                    </div>
                    <div>
                        <h6>Customer Address: </h6>
                    </div>
                </Col>
                <Col sm={9} className="object-fit-contain border">
                    <div>
                        <h6>{props.customerId}</h6>
                    </div>
                    <div>
                        <h6>{props.name}</h6>
                    </div>
                    <div>
                        <h6>{props.phoneNo}</h6>
                    </div>
                    <div>
                        <h6>{props.address}</h6>
                    </div>
                </Col>
                {props.product ? props.product.map(createProduct) : null}
            </Row>
        </Container>



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