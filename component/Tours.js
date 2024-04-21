import React, { useState } from "react";
import { tourData } from "./data.js";
import Tourr from "./Tour.js";
import "./App.css";

const Tour = () => {
    const [tours, setTours] = useState(tourData);

    const removeTour=(id)=>{
        const newTour=tours.filter((tour)=> tour.id !==id)
        setTours(newTour)

    }
    const refreshItems=()=> setTours(tourData);

    
    return (

        <main>
            <section>
                <div className="title">
                <h2>Our Tours</h2>
                <div className="underline"></div>
                </div>
                {tours.length > 0 ? (tours.map((tour) => <tour key={tour.id} {...tour} removeTour={removeTour(id)} />)

            ) : (<div className="title">
                <h2>No Tour Left.....</h2>
                <button className="btn" onClick={refreshItems}>Refresh</button>
            </div>
            )}
            </section>

            
        </main>
    );
}


export default Tour;