import React from "react";
import "./card.css";

const Card = ({ productsArray }) => {

    return (
        <>
            {
                productsArray?.map((data, index) => {
                    return (
                        <div className="card" key={index}>
                            <div className="card-img">
                                <img src={data?.img} alt="Avatar" style={{ width: '100%' }} />
                            </div>
                            <div className="container">
                                {index}
                                <h4><b>{data?.name}</b></h4>
                                <p>{data?.title}</p>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Card;