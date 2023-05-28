import axios from "axios";
import { useState } from "react";
import { Button } from 'react-bootstrap';
import base_url from "../baseurls/baseurl.js";
function CustomerForm() {

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
                alert("Your Information has been saved.");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    
    return (

        <>
            <div className='card col d-flex justify-content-center mx-auto' style={{width: "15rem" }}>
                <label htmlFor="">Enter Name:</label>
                <input type="text" name='name' value={inputData.name} onChange={handleData} />
                <br />
                <label htmlFor="">Enter Phone Number:</label>
                <input type="text" name='phoneNo' value={inputData.phoneNo} onChange={handleData} />
                <br />
                <label htmlFor="">Enter Adress:</label>
                <input type="text" name='address' value={inputData.address} onChange={handleData} />
                <br />
                <div>
                    <Button className="mr-3  btn-block btn-success" onClick={handleSubmit}>Submit</Button>
                </div>  
            </div>
           
        </>

    );
}

export default CustomerForm;