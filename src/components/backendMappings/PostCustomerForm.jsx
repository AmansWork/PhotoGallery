import axios from "axios";
import { useState } from "react";
import { Button } from 'react-bootstrap';
import base_url from "../baseurls/baseurl.js";
function PostCustomerForm() {

    const data = { customerId: "", name: "", phoneNo: "", address: "" };
    const [inputData, setInputdata] = useState(data);

    const handleData = (e) => {
        setInputdata({ ...inputData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${base_url}/gallery/customer`, inputData)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleChange = (e) => {
        e.preventDefault();
        axios.put(`${base_url}/gallery/customer`, inputData)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };



    const handleDelete = (e) => {
        e.preventDefault();
        axios.delete(`${base_url}/gallery/customer/${inputData.customerId}`)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (

        <>
            <div className='card' style={{width: "20rem"}}>
                <label htmlFor="">Enter Customer ID:</label>
                <input type="text" name='customerId' value={inputData.customerId} onChange={handleData} />
                <br />
                <label htmlFor="">Enter Customer Name:</label>
                <input type="text" name='name' value={inputData.name} onChange={handleData} />
                <br />
                <label htmlFor="">Enter Customer Phone Number:</label>
                <input type="text" name='phoneNo' value={inputData.phoneNo} onChange={handleData} />
                <br />
                <label htmlFor="">Enter Customer Adress:</label>
                <input type="text" name='address' value={inputData.address} onChange={handleData} />
                <br />
                <div>
                    <Button className="mr-3  btn-block btn-success" onClick={handleSubmit}>Submit</Button>
                    <Button className="mr-3  btn-block" onClick={handleChange}>Update</Button>
                    <Button className="mr-3  btn-block btn-danger" onClick={handleDelete}>Delete</Button>
                </div>
            </div>
        </>

    );
}

export default PostCustomerForm;