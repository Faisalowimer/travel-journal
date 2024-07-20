import React from "react"

export default function Card(props) {
    return(
        <section>
        <div className="card--body">
        
            <div>
                <img 
                    src={`/Pictures/${props.imageUrl}`} 
                    className="card--img"
                />
            </div>
            
            <div className="card--details">
                <div className="card--location">
                    <p className="card--location--icon">📍</p>
                    <h2 className="card--location--name">{props.location}</h2>
                    <a 
                        href={props.googleMapsUrl}
                        target="_blank"
                        className="card-location-url"    
                    >
                        View on Google Maps
                    </a>
                  </div>
                  
                  <div>  
                    <h1 className="card--title">{props.title}</h1>
                    <span className="bold">{props.startDate} – </span>
                    <span className="bold">{props.endDate}</span>
                    <p className="card--description">{props.description}</p>
                </div>
                
            </div>
        </div>
        </section>
    )
}
