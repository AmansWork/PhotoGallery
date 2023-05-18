import axios from "axios";
import { useState } from "react";
import { Button } from 'react-bootstrap';
import base_url from "../baseurls/baseurl.js";
import GetCustomer from "../backendMappings/GetCustomer";
import GetProducts from "../backendMappings/GetProducts";
import PostProduct from "../backendMappings/PostProduct";
import PostImages from "../backendMappings/PostImages";
import PostCustomerForm from "../backendMappings/PostCustomerForm";
import AdminShowImage from "../backendMappings/AdminShowImage";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



export default function AdminLogin() {
    const data = { userName: "", password: "" };
    const [inputData, setInputdata] = useState(data);
    const [bool, setBool] = useState(false);

    const handleData = (e) => {
        setInputdata({ ...inputData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${base_url}/gallery/admin`, inputData)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });

        setBool(true);
    };

    function AdminData() {

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

            <div className="container text-center">
                <div class="row">
                    <div className="col">
                        <Button className="mr-3 btn-block" onClick={showcustomerData}>Customers</Button>
                    </div>
                    <div className="col">
                        <Button className="mr-3 btn-block btn-danger" onClick={showproductData}> Products  </Button>
                    </div>
                    <div className="col">
                        <Button className="mr-3 btn-block btn-success" onClick={showAddProductData}>Add Products </Button>
                    </div>
                    <div>
                        <Button className="mr-3 btn-block btn-warning" onClick={addImageButton}>Add Image </Button>
                    </div>
                    <div className="col">
                        <Button className="mr-3 btn-block btn-info" onClick={addCustomerButton}>Add Customer </Button>
                    </div>
                    <div className="col">
                        <Button className="mr-3 btn-block btn-warning" onClick={showImageAdmin}> Images </Button>
                    </div>
                </div>
            </div>




            <Container style={{ padding: '10px' }}>
                <Row className="object-fit-contain" >

                    <Col >
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


    function AdminForm() {
        return (
            <>
                <div className="jumbotron jumbotron-fluid" style={{ backgroundColor: "white" }}>
                    <h1 style={{ textAlign: "center" }}>Login to View Data</h1>
                    <br />
                    <br />
                    <div className='card col d-flex justify-content-center mx-auto' style={{ width: "14rem" }}>
                        <label htmlFor="">Enter Id: </label>
                        <input type="text" name='userName' value={inputData.userName} onChange={handleData} />
                        <br />
                        <label htmlFor="">Enter Password: </label>
                        <input type="password" name='password' value={inputData.password} onChange={handleData} />
                        <br />
                        <div>
                            <Button className="mr-3 btn-block btn-success" onClick={handleSubmit}>Submit</Button>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            {bool ? <AdminData /> : <AdminForm />}
        </>
    );
}