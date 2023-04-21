import { useEffect, useState } from "react";
import axios from "axios";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AdminImageCard from "./AdminImageCard";
import base_url from "../baseurls/baseurl";

export default function AdminShowImage() {
    const [imageObject, setImageObject] = useState();

    useEffect(() => {
        axios.get(`${base_url}/gallery/image`)
            .then((response) => {
                console.log(response.data);
                setImageObject(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    function setImageInCard(data) {
        return (
            <div className="col" key={data.id}>
                <AdminImageCard
                    key={data.id}
                    id={data.id}
                    image={data.image}
                    name={data.name}
                />
            </div>
        );

    }

    return (<>
        <div className='row'>
            {imageObject ? imageObject.map(setImageInCard) : null}
        </div>
    </>);
}