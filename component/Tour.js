import React, { useState } from "react";
import Tour from "./tours";

const Tourr = ({ id, title, description, image, price, removetour }) => {
    const [readMore, setReadMore] = useState(false);
    return (
        <div className="single-tour">
            <img src={image} alt={title} />
            <footer>
                <div className="tour-info">
                    <h4>{title}</h4>
                    <h4 className="price">{price}</h4>
                </div>
                <p>
                    {readMore ? description : `${description.substring(0,200)}...`}{" "}

                    <button onClick={() => setReadMore(!readMore)}>{readMore ? "Show Less" : "Read More"}</button>
                </p>
                <button className="btn-dlt" onClick={()=> removeTour(id)}>Not Intersted</button>
            </footer>
        </div>
    );
}
export default Tourr;