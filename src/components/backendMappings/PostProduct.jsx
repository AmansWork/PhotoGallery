import  axios from "axios";
import { useState } from "react";
import { Button } from 'react-bootstrap';
import base_url from "../baseurls/baseurl";
export default function PostProduct(){

    const data = {productId : "", productName : "", productPrice : "", productDescription : ""};
    const [inputData, setInputdata] = useState(data);

    const handleData = (e)=>{
        setInputdata({...inputData,[e.target.name]:e.target.value});
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post(`${base_url}/gallery/product/add`, inputData)
        .then((response) =>{
            console.log(response);
        })
        .catch((error)=>{
            console.log(error);
        });
    };

    const handleChange = (e)=>{
        e.preventDefault();
        axios.put(`${base_url}/gallery/product/change`, inputData)
        .then((response)=>{
            console.log(response);
        })
        .catch((error)=>{
            console.log(error);
        });
    };


   
    const handleDelete = (e)=>{
        e.preventDefault();
        axios.delete(`${base_url}/gallery/product/delete/${inputData.productId}`)
        .then((response)=>{
            console.log(response);
        })
        .catch((error)=>{
            console.log(error);
        });
    };



    return(<>
        <div className="card" style={{width: "20rem"}}> 
                    <label htmlFor="">Enter Product ID:</label>
                    <input type="text" name='productId'  value={inputData.productId} onChange={handleData}/>
                    <br />   
                    <label htmlFor="">Enter Product Name:</label>
                    <input type="text" name='productName'  value={inputData.productName} onChange={handleData}/>
                    <br />
                    <label htmlFor="">Enter Product Price:</label>
                    <input type="text" name='productPrice' value={inputData.productPrice} onChange={handleData}/>
                    <br />
                    <label htmlFor="">Enter productDescription:</label>
                    <input type="text" name='productDescription' value={inputData.productDescription} onChange={handleData}/>
                    <br />
                    <div>
                        <Button className="mr-3  btn-block btn-success" onClick={handleSubmit}>Submit</Button>
                        <Button className="mr-3  btn-block " onClick={handleChange}>Update</Button>
                        <Button className="mr-3  btn-block btn-danger" onClick={handleDelete}>Delete</Button>
                    </div>
                </div>
    </>);
}