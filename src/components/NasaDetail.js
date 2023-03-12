import React from "react";


const NasaDetail = (props) => {
    const {nasaData} = props
    console.log(nasaData)
    return (
        <div>
            <h1>{nasaData.title}</h1>
            <p>Description: {nasaData.explanation}</p>
            <p>{nasaData.date}</p>
            <div>
                <img src={nasaData.url} alt = "Astronomy Picture of the Day"/>
            </div>
        </div>
    )
}
export default NasaDetail