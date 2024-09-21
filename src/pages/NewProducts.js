import React, { useState } from "react";
import Card from "../components/Cards";

const NewProducts = () => {

    const productsArray = [
        {
            img: "https://plus.unsplash.com/premium_photo-1673306778968-5aab577a7365?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFja2dyb3VuZCUyMGltYWdlfGVufDB8fDB8fHww",
            name: "Test",
            title: "Engr"
        },
        {
            img: "https://png.pngtree.com/thumb_back/fh260/background/20230408/pngtree-rainbow-curves-abstract-colorful-background-image_2164067.jpg",
            name: "Effect",
            title: "This is some effect."
        }
    ]

    const [show, setShow] = useState(false);

    // console.log(show, "showww", typeof show);


    return (
        <div className="p-wrapper">

            <button onClick={() => setShow(!show)}>Show cards</button>
            {
                show ?
                    <Card
                        productsArray={productsArray}
                    />
                    :
                    "No data found!"
            }
        </div>
    )
}

export default NewProducts;