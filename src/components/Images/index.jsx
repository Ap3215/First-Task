import axios from "axios";
import React, { useState, useEffect } from "react";

import "./index.css";

const Images = () => {
    const [images, setImages] = useState([]);

    const getImagesHandler = async () => {
        try {
            const { data } = await axios.get(
                "https://api.unsplash.com/photos/?client_id=h2MclBzE6Mqf6V-R5uYQ0BD1GTNO6ZNCew3aqlDcTM8"
            );

            setImages(data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getImagesHandler();
    }, []);

    return (
        <div className="container">
            <div className="gallery">
                {images.map((image) => (
                    <div key={image.id}>
                        <img
                            src={image.urls.small}
                            alt={image.alt_description || "Gallery"}
                            className="gallery__image"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Images;
