import { useEffect, useState } from "react";
import axios from "axios";
import Image from "./Image";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ImageCard from "./ImageCard";
import base_url from "../baseurls/baseurl.js";
import HomeAboutCards from "../homeRelatedAbouts/HomeAboutCards";

export default function GetImages() {
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

    function setImage(imageData) {
        return (
            <Image
                key={imageData.id}
                id={imageData.id}
                image={imageData.image}
                name={imageData.name}
            />
        );
    }

    function setImageInCard(data) {
        return (
            <div className="col-sm" key={data.id}>
                <ImageCard
                    key={data.id}
                    id={data.id}
                    image={data.image}
                    name={data.name}
                />
            </div>
        );

    }

    return (<>
        <Slider
            dots={true}
            infinite={true}
            speed={500}
            slidesToScroll={1}
        >
            {imageObject ? imageObject.map(setImage) : null}
        </Slider>
        
        <br />
        <br />
        <HomeAboutCards />
        <br />
        <br />
        <div style={{ paddingTop: '20px' }} className='row'>
            {imageObject ? imageObject.slice(0, 4).map(setImageInCard) : null}
        </div>
        <br />
        <br />
        {imageObject ? imageObject.slice(0, 2).map(setImage) : null}


    </>);
}