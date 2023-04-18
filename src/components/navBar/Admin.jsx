
import { useState } from "react";
import GetCustomer from "../backendMappings/GetCustomer";
import GetProducts from "../backendMappings/GetProducts";
import PostProduct from "../backendMappings/PostProduct";
import PostImages from "../backendMappings/PostImages";
import PostCustomerForm from "../backendMappings/PostCustomerForm";
import AdminShowImage from "../backendMappings/AdminShowImage";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';

export default function Admin() {

    const [customerData, setcustomerData] = useState(true);
    const [productData, setproductData] = useState(false);
    const [addProductData, setaddProductData] = useState(false);
    const [addImage, setAddImage] = useState(false);
    const [addCustomer, setAddCustomer] = useState(false);
    const [showImage, setShowImage] = useState(false);

    function showcustomerData() {
        setcustomerData(!customerData);
        setaddProductData(false);
        setproductData(false);
        setAddImage(false);
        setAddCustomer(false);
        setShowImage(false);
    }



    function showAddProductData() {
        setaddProductData(!addProductData);
        setcustomerData(false);
        setproductData(false);
        setAddImage(false);
        setAddCustomer(false);
        setShowImage(false);
    }



    function showproductData() {
        setproductData(!productData);
        setaddProductData(false);
        setcustomerData(false);
        setAddImage(false);
        setAddCustomer(false);
        setShowImage(false);
    }

    function addImageButton() {
        setAddImage(!addImage);
        setproductData(false);
        setaddProductData(false);
        setcustomerData(false);
        setAddCustomer(false);
        setShowImage(false);
    }

    function addCustomerButton() {
        setAddCustomer(!addCustomer);
        setAddImage(false);
        setproductData(false);
        setaddProductData(false);
        setcustomerData(false);
        setShowImage(false);
    }

    function showImageAdmin() {
        setShowImage(!showImage);
        setAddCustomer(false);
        setAddImage(false);
        setproductData(false);
        setaddProductData(false);
        setcustomerData(false);
    }
    return (<>
        <Container style={{ padding: '10px' }}>
            <Row className="object-fit-contain" >

                <Col style={{ padding: '10px' }} sm={2} className="object-fit-contain border border-info-subtle">
                    <div>
                        <Button className="mr-3 btn-block" onClick={showcustomerData}>show Customers</Button>
                    </div>
                    <br />
                    <div>
                        <Button className="mr-3 btn-block btn-danger" onClick={showproductData}>show Products  </Button>
                    </div>
                    <br />
                    <div>
                        <Button className="mr-3 btn-block btn-success" onClick={showAddProductData}>Add Products </Button>
                    </div>
                    <br />
                    <div>
                        <Button className="mr-3 btn-block btn-warning" onClick={addImageButton}>Add Image </Button>
                    </div>
                    <br />
                    <div>
                        <Button className="mr-3 btn-block btn-info" onClick={addCustomerButton}>Add Customer </Button>
                    </div>
                    <br />

                    <div>
                        <Button className="mr-3 btn-block btn-warning" onClick={showImageAdmin}>Show Images </Button>
                    </div>
                    <br />

                </Col>
                <Col sm={10} className="object-fit-contain border border-info-subtle">
                    <div>
                        {customerData ? <GetCustomer /> : null}
                    </div>
                    <div>
                        {productData ? <GetProducts /> : null}
                    </div>
                    <div>
                        {addProductData ? <PostProduct /> : null}
                    </div>

                    <div>
                        {addImage ? <PostImages /> : null}
                    </div>

                    <div>
                        {addCustomer ? <PostCustomerForm /> : null}
                    </div>

                    <div>
                        {showImage ? <AdminShowImage /> : null}
                    </div>

                </Col>

            </Row>
        </Container>
    </>);
}
