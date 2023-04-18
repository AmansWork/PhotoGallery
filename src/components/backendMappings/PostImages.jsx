import  axios from "axios";
import { useState } from "react";
import { Button } from 'react-bootstrap';

export default function PostImages(){

    const data = {id : "", name : ""};
    const [inputData, setInputdata] = useState(data);
    const [image, setImage] = useState();


    const handleData = (e)=>{
        setInputdata({...inputData,[e.target.name]:e.target.value});
    };

    const handleImageData = (e)=>{
        setImage(e.target.files[0]);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        const formData = new FormData();
        formData.append('id', inputData.id);
        formData.append('name', inputData.name);
        formData.append('image', image);
    
        axios.post("http://localhost:8080/gallery/image", formData)
        .then((response) =>{
            console.log(response);
            alert("Image added successfully")
        })
        .catch((error)=>{
            console.log(error);
        });
    };

    const handleChange = (e)=>{
        e.preventDefault();
        axios.put("http://localhost:8080/gallery/image", inputData)
        .then((response)=>{
            console.log(response);
        })
        .catch((error)=>{
            console.log(error);
        });
    };


   
    const handleDelete = (e)=>{
        e.preventDefault();
        axios.delete(`http://localhost:8080/gallery/image/${inputData.id}`)
        .then((response)=>{
            console.log(response);
        })
        .catch((error)=>{
            console.log(error);
        });
    };




    return(
        <>
            <div className="card" style={{width: "20rem"}}> 
                    <label htmlFor="">Enter image ID:</label>
                    <input type="text" name='id'  value={inputData.id} onChange={handleData}/>
                    <br />   
                    <label htmlFor="">Enter image Name:</label>
                    <input type="text" name='name'  value={inputData.name} onChange={handleData}/>
                    <br />
                    <label htmlFor="">upload Image:</label>
                    <input type="file" name='image' onChange={handleImageData}/>
                    <br />
                    <div>
                        <Button className="mr-3  btn-block btn-success" onClick={handleSubmit}>Submit</Button>
                        <Button className="mr-3  btn-block btn-primary" onClick={handleChange}>Update</Button>
                        <Button className="mr-3  btn-block btn-danger" onClick={handleDelete}>Delete</Button>
                    </div>
                </div>
        </>
    );
}