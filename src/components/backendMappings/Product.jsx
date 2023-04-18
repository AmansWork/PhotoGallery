import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Product(props) {

    return (<>
        <Container style={{padding: '10px'}}>
            <Row className="object-fit-contain border" >

                <Col sm={3} style={{padding: '10px'}} className="object-fit-contain border border-primary">
                    <div>
                        <h6>Product ID: </h6>
                    </div>
                    <div>
                        <h6>Product Name: </h6>
                    </div>
                    <div>
                        <h6>Product Price Rs: </h6>
                    </div>
                    <div>
                        <h6>Product Description: </h6>
                    </div>
                </Col>
                <Col sm={9} style={{padding: '10px'}} className="object-fit-contain border border-warning">
                    <div>
                        <h6>{props.productId}</h6>
                    </div>
                    <div>
                        <h6>{props.productName}</h6>
                    </div>
                    <div>
                        <h6>{props.productPrice}</h6>
                    </div>
                    <div>
                        <h6>{props.productDescription}</h6>
                    </div>
                </Col>

            </Row>
        </Container>
    </>);
}

export default Product;